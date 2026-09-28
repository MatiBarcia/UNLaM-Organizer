// Migración del dominio viejo al nuevo.
//
// El progreso vive en localStorage, que es por dominio: un redirect 301 hecho por
// Vercel dejaría atrás todo lo que el usuario cargó en el dominio viejo. Por eso el
// dominio viejo sigue sirviendo la app, y es la app la que, al cargar ahí, junta el
// progreso local y redirige al dominio nuevo pasándolo en el fragmento de la URL
// (`#migrar=...`, que el navegador nunca manda al servidor). En el dominio nuevo se
// fusiona con lo que ya hubiera y se limpia la URL.

const DOMINIO_VIEJO = 'unlam-organizer-matibarcia.vercel.app';
const DOMINIO_NUEVO = 'organizador-unlam.vercel.app';
const PREFIJO_PROGRESO = 'unlam_progreso_v1_';
const PARAM_MIGRAR = '#migrar=';

type Migracion = Record<string, Record<string, unknown>>;

function codificar(data: Migracion): string {
  const bytes = new TextEncoder().encode(JSON.stringify(data));
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodificar(texto: string): Migracion {
  const bin = atob(texto.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes)) as Migracion;
}

function leerProgresoLocal(): Migracion {
  const result: Migracion = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(PREFIJO_PROGRESO)) continue;
    try {
      const progreso = JSON.parse(localStorage.getItem(key) ?? '{}');
      if (progreso && Object.keys(progreso).length > 0) {
        result[key.slice(PREFIJO_PROGRESO.length)] = progreso;
      }
    } catch {
      // entrada corrupta, se ignora
    }
  }
  return result;
}

/** En el dominio nuevo: incorpora el progreso que vino del viejo. Si una materia ya
 *  tiene progreso acá, gana lo de acá. */
function importarMigracion(texto: string) {
  const data = decodificar(texto);
  for (const [carreraId, entrante] of Object.entries(data)) {
    const key = PREFIJO_PROGRESO + carreraId;
    let actual: Record<string, unknown> = {};
    try {
      actual = JSON.parse(localStorage.getItem(key) ?? '{}');
    } catch {
      // entrada corrupta, se pisa con lo migrado
    }
    localStorage.setItem(key, JSON.stringify({ ...entrante, ...actual }));
  }
}

/**
 * Se llama antes de montar React. Devuelve `true` si está redirigiendo al dominio
 * nuevo (en ese caso no hay que renderizar la app).
 */
export function migrarDominio(): boolean {
  const { hostname, pathname, search, hash } = window.location;

  if (hostname === DOMINIO_VIEJO) {
    let fragmento = '';
    try {
      const progreso = leerProgresoLocal();
      if (Object.keys(progreso).length > 0) fragmento = PARAM_MIGRAR + codificar(progreso);
    } catch {
      // si falla la lectura, se redirige igual (sin progreso)
    }
    window.location.replace(`https://${DOMINIO_NUEVO}${pathname}${search}${fragmento}`);
    return true;
  }

  if (hash.startsWith(PARAM_MIGRAR)) {
    try {
      importarMigracion(hash.slice(PARAM_MIGRAR.length));
    } catch {
      // fragmento inválido, se ignora
    }
    history.replaceState(null, '', pathname + search);
  }

  return false;
}
