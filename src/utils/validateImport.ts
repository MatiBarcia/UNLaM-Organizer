import type { ProgresoPerfil } from '../types';

const VALID_ESTADOS = new Set(['cursando', 'regularizada', 'aprobada']);

export type ImportResult =
  | { ok: true; progreso: ProgresoPerfil }
  | { ok: false; error: string };

export function validateImport(raw: unknown, carreraId: string): ImportResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: 'El archivo no tiene el formato correcto.' };
  }
  const obj = raw as Record<string, unknown>;

  if (obj.version !== '1') {
    return { ok: false, error: 'Versión de archivo no reconocida.' };
  }
  if (obj.carreraId !== carreraId) {
    return { ok: false, error: `El archivo corresponde a otra carrera (${obj.carreraId ?? 'desconocida'}).` };
  }
  if (typeof obj.progreso !== 'object' || obj.progreso === null || Array.isArray(obj.progreso)) {
    return { ok: false, error: 'El archivo no contiene datos de progreso válidos.' };
  }

  const progreso = obj.progreso as Record<string, unknown>;
  for (const val of Object.values(progreso)) {
    if (!val || typeof val !== 'object' || Array.isArray(val)) {
      return { ok: false, error: 'El archivo contiene entradas de progreso inválidas.' };
    }
    const entry = val as Record<string, unknown>;
    if (!VALID_ESTADOS.has(entry.estado as string)) {
      return { ok: false, error: 'El archivo contiene estados de materia inválidos.' };
    }
    for (const key of ['notaParcial1', 'notaParcial2', 'notaFinal']) {
      if (entry[key] !== null && typeof entry[key] !== 'number') {
        return { ok: false, error: 'El archivo contiene notas inválidas.' };
      }
    }
  }

  return { ok: true, progreso: progreso as ProgresoPerfil };
}
