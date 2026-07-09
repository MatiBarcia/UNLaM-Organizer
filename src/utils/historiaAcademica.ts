import type { Carrera, ProgresoPerfil } from '../types';
// Solo se importa la URL del worker (asset estático); pdfjs-dist en sí se carga
// de forma diferida (import dinámico) para no sumar peso al bundle principal.
// Se usa el build "legacy" (no el moderno) porque trae un polyfill de
// Promise.withResolvers() — pdf.js lo usa internamente y Safari solo lo soporta
// desde iOS 17.4; sin el polyfill, en versiones anteriores explota con un
// "undefined is not a function" al leer el PDF.
import pdfWorkerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';

export interface MateriaReconocida {
  materiaId: string;
  codigo: string;
  nombre: string;
  nota: number | null;
}

export interface MateriaIgnorada {
  codigo: string;
  nombre: string;
}

export type HistoriaResult =
  | { ok: true; carreraDetectada: string; reconocidas: MateriaReconocida[]; ignoradas: MateriaIgnorada[]; progreso: ProgresoPerfil }
  | { ok: false; error: string };

interface FilaHistoria {
  codigo: string;
  nombre: string;
  nota: number | null;
}

const BOILERPLATE_PATTERNS = [
  /^universidad nacional/i,
  /^plan de estudios$/i,
  /^alumno:/i,
  /^nro\.?\s*documento:/i,
  /^fecha de impresi[oó]n/i,
  /^p[aá]gina\s+\d+\s+de\s+\d+/i,
  /^n[°º]\s*origen\s*c[oó]digo\s*nombre/i,
  /^acta\s*\/?\s*$/i,
  /^resoluci[oó]n$/i,
];

// Fila completa en una sola línea, ej:
// "2 Promocion 01026 TECNOLOGIA INGENIERIA Y SOCIEDAD 38992020 29/08/2020 10"
const ROW_START = /^\d+\s+[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s+\d{3,6}\b/;
const ROW_FULL = /^\d+\s+[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s+(\d{3,6})\s+(.+?)\s+(\d{3,10}(?:\/\d{2,4})?)\s+(\d{2}\/\d{2}\/\d{4})(?:\s+(\d{1,2}))?\s*$/;
// Fila cuyo nombre se partió en dos líneas: el PDF ordena por línea base de texto, y como
// el resto de las columnas están centradas verticalmente en la celda, terminan quedando
// EN MEDIO de las dos mitades del nombre (mitad1 / fila-sin-nombre / mitad2), no después.
const ROW_SPLIT = /^\d+\s+[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s+(\d{3,6})\s+(\d{3,10}(?:\/\d{2,4})?)\s+(\d{2}\/\d{2}\/\d{4})(?:\s+(\d{1,2}))?\s*$/;

function normalize(s: string): string {
  return s
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
}

function parseLines(lines: string[]): { carreraNombre: string; filas: FilaHistoria[] } {
  // 1° pasada: identificar el título de la carrera (primera línea en mayúsculas antes de
  // cualquier fila de la tabla).
  let carreraNombre = '';
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || BOILERPLATE_PATTERNS.some(re => re.test(line))) continue;
    if (ROW_START.test(line)) break;
    if (/^[A-ZÁÉÍÓÚÑ ]{6,}$/.test(line)) {
      carreraNombre = line;
      break;
    }
  }

  // 2° pasada: descartar todo el "ruido" repetido en cada página (encabezados, título,
  // datos del alumno, pie de página) para que las líneas de contenido que sobreviven
  // queden adyacentes entre sí, incluso si un salto de página cae en medio de una fila.
  const contentLines = lines
    .map(l => l.trim())
    .filter(line => line && !BOILERPLATE_PATTERNS.some(re => re.test(line)) && line !== carreraNombre);

  const filas: FilaHistoria[] = [];
  const consumed = new Set<number>();

  for (let i = 0; i < contentLines.length; i++) {
    if (consumed.has(i)) continue;
    const line = contentLines[i];
    if (!ROW_START.test(line)) continue;

    const full = ROW_FULL.exec(line);
    if (full) {
      consumed.add(i);
      filas.push({ codigo: full[1], nombre: full[2].trim(), nota: full[5] ? Number(full[5]) : null });
      continue;
    }

    const split = ROW_SPLIT.exec(line);
    if (!split) continue;
    const before = i > 0 && !consumed.has(i - 1) && !ROW_START.test(contentLines[i - 1]) ? contentLines[i - 1] : '';
    const after = i < contentLines.length - 1 && !ROW_START.test(contentLines[i + 1]) ? contentLines[i + 1] : '';
    consumed.add(i);
    if (before) consumed.add(i - 1);
    if (after) consumed.add(i + 1);
    filas.push({ codigo: split[1], nombre: `${before} ${after}`.trim(), nota: split[4] ? Number(split[4]) : null });
  }

  return { carreraNombre, filas };
}

async function extractPdfLines(file: File): Promise<string[]> {
  // pdf.mjs (no ".min") porque solo ese tiene declaraciones de tipos junto al paquete;
  // Vite igual lo minifica al bundlearlo, así que no se pierde nada en el build final.
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  const lines: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    const rows: { y: number; items: { x: number; str: string }[] }[] = [];
    for (const item of content.items) {
      if (!('str' in item) || !item.str.trim()) continue;
      const x = item.transform[4];
      const y = Math.round(item.transform[5]);
      let row = rows.find(r => Math.abs(r.y - y) <= 2);
      if (!row) {
        row = { y, items: [] };
        rows.push(row);
      }
      row.items.push({ x, str: item.str });
    }

    rows.sort((a, b) => b.y - a.y);
    for (const row of rows) {
      row.items.sort((a, b) => a.x - b.x);
      const line = row.items.map(it => it.str).join(' ').replace(/\s+/g, ' ').trim();
      if (line) lines.push(line);
    }
  }

  return lines;
}

export async function procesarHistoriaAcademica(file: File, carrera: Carrera): Promise<HistoriaResult> {
  let lines: string[];
  try {
    lines = await extractPdfLines(file);
  } catch (err) {
    // Diagnóstico: en mobile este catch se dispara por motivos que no pudimos reproducir
    // en desktop (posible falla al cargar el worker de pdf.js), así que mostramos el
    // detalle real en vez de tragárnoslo en silencio.
    console.error('Error leyendo PDF:', err);
    const detalle = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `No se pudo leer el PDF. Verificá que el archivo no esté dañado. (${detalle})` };
  }

  const { carreraNombre, filas } = parseLines(lines);

  if (!carreraNombre) {
    return { ok: false, error: 'No se pudo identificar la carrera en el documento. Verificá que sea tu historia académica descargada desde Autogestión.' };
  }
  if (filas.length === 0) {
    return { ok: false, error: 'No se encontraron materias en el documento.' };
  }

  const normDoc = normalize(carreraNombre);
  const normCarrera = normalize(carrera.nombre);
  const coincide = normDoc === normCarrera || normDoc.includes(normCarrera) || normCarrera.includes(normDoc);
  if (!coincide) {
    return {
      ok: false,
      error: `Este documento corresponde a "${carreraNombre}", pero estás importando en "${carrera.nombre}". Abrí la carrera correcta para importarlo.`,
    };
  }

  const porCodigo = new Map(carrera.materias.map(m => [m.codigo, m]));
  const reconocidas: MateriaReconocida[] = [];
  const ignoradas: MateriaIgnorada[] = [];

  for (const fila of filas) {
    const codigoLimpio = fila.codigo.replace(/^0+(?=\d)/, '');
    const materia = porCodigo.get(codigoLimpio);
    if (materia) {
      reconocidas.push({ materiaId: materia.id, codigo: codigoLimpio, nombre: materia.nombre, nota: fila.nota });
    } else {
      ignoradas.push({ codigo: fila.codigo, nombre: fila.nombre });
    }
  }

  if (reconocidas.length === 0) {
    return { ok: false, error: 'Ninguna materia del documento corresponde al plan actual. ¿Elegiste la carrera correcta?' };
  }

  const progreso: ProgresoPerfil = {};
  for (const r of reconocidas) {
    progreso[r.materiaId] = { estado: 'aprobada', notaParcial1: null, notaParcial2: null, notaFinal: r.nota };
  }

  return { ok: true, carreraDetectada: carreraNombre, reconocidas, ignoradas, progreso };
}
