/**
 * Info técnica para diagnosticar problemas de login con Google. Cuando el login
 * falla, el error real de Google (popup_closed, access_denied, ...) se guarda acá y
 * después viaja adjunto en "Informar error", así un reporte del tipo "no me deja
 * entrar" llega con la causa sin tener que preguntarle nada a la persona.
 */

const CLAVE_ULTIMO_ERROR = 'unlam_ultimo_error_login';

/**
 * Navegadores embebidos en apps (Instagram, WhatsApp, TikTok, ...). Google bloquea
 * el login OAuth en estos webviews (error 403 disallowed_useragent), así que
 * conviene avisar antes de intentar. La detección es por user agent y no es
 * perfecta: alguna app puede no aparecer acá.
 */
const NAVEGADOR_DE_APP_RE = /Instagram|FBAN|FBAV|FB_IAB|WhatsApp|TikTok|musical_ly|BytedanceWebview|Line\/|Snapchat|Twitter|; wv\)/i;

export function esNavegadorDeApp(): boolean {
  return typeof navigator !== 'undefined' && NAVEGADOR_DE_APP_RE.test(navigator.userAgent);
}

export function getMensajeError(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

export function registrarErrorLogin(err: unknown): void {
  const valor = `${getMensajeError(err)} · ${new Date().toISOString()}`;
  // sessionStorage: sobrevive a un reload antes de abrir el formulario de reporte,
  // pero no queda guardado para siempre.
  try {
    sessionStorage.setItem(CLAVE_ULTIMO_ERROR, valor);
  } catch {
    // Modo privado u otro motivo por el que no se pueda escribir: no es crítico.
  }
}

export function getDiagnostico(): Record<string, string> {
  let ultimoError: string | null = null;
  try {
    ultimoError = sessionStorage.getItem(CLAVE_ULTIMO_ERROR);
  } catch {
    // idem registrarErrorLogin
  }
  return {
    ultimo_error_login: ultimoError ?? 'ninguno',
    navegador: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    navegador_de_app: esNavegadorDeApp() ? 'sí' : 'no',
  };
}
