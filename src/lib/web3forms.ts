import type { Carrera } from '../types';

/**
 * Envío del formulario "Informar error" vía Web3Forms: un POST directo desde el
 * browser, sin backend propio. El access_key no es secreto (queda embebido en el
 * bundle); lo único que habilita es mandar mails a la casilla dueña de la key.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';

export interface ReporteError {
  nombre: string;
  email: string;
  mensaje: string;
}

export type ResultadoReporte = { ok: true } | { ok: false; error: string };

function getAccessKey(): string | null {
  const key = import.meta.env.VITE_WEB3FORMS_KEY;
  return typeof key === 'string' && key.length > 0 ? key : null;
}

export function isReporteConfigured(): boolean {
  return getAccessKey() !== null;
}

export async function enviarReporte(reporte: ReporteError, carrera: Carrera): Promise<ResultadoReporte> {
  const accessKey = getAccessKey();
  if (!accessKey) {
    return { ok: false, error: 'El formulario de reportes no está configurado en este deploy.' };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[UNLaM Organizer] Error reportado en ${carrera.nombre}`,
        from_name: 'UNLaM Organizer',
        name: reporte.nombre,
        email: reporte.email,
        replyto: reporte.email,
        message: reporte.mensaje,
        // Contexto para identificar de dónde salió el reporte sin depender de que
        // la persona lo aclare en el mensaje.
        carrera: carrera.nombre,
        carrera_id: carrera.id,
        plan: carrera.plan,
        url: typeof window !== 'undefined' ? window.location.href : '',
      }),
    });

    const data: { success?: boolean; message?: string } | null = await res.json().catch(() => null);
    if (!res.ok || !data?.success) {
      return { ok: false, error: data?.message ?? 'No se pudo enviar el reporte. Probá de nuevo en un rato.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'No se pudo conectar. Revisá tu conexión e intentá de nuevo.' };
  }
}
