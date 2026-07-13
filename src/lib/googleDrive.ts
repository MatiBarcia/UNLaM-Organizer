import type { ProgresoPerfil } from '../types';

// drive.appdata: carpeta oculta de Drive que solo esta app puede ver — el usuario
// nunca la ve entre sus archivos normales. Sumado a userinfo (para mostrar nombre y
// foto), es un scope de "bajo riesgo" que no requiere que Google revise la app.
const SCOPES = [
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
].join(' ');

const DRIVE_FILE_NAME = 'progreso.json';
const AUTH_HINT_KEY = 'unlam_google_auth_hint_v1';

export interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

/** Todo el progreso guardado en Drive: un blob por carrera, igual que en localStorage. */
export type CloudProgreso = Record<string, ProgresoPerfil>;

function getClientId(): string | null {
  const id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return typeof id === 'string' && id.length > 0 ? id : null;
}

export function isGoogleSyncConfigured(): boolean {
  return getClientId() !== null;
}

function waitForGis(): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (window.google?.accounts?.oauth2) {
        resolve();
      } else if (Date.now() - start > 10000) {
        reject(new Error('No se pudo cargar el script de Google.'));
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

/**
 * Pide un access token. `interactive: false` intenta restaurar la sesión sin mostrar
 * ningún popup (funciona si el navegador todavía tiene la sesión de Google activa y
 * ya se concedieron los permisos antes); si falla, no insiste ni molesta al usuario.
 *
 * La API de GIS fija el callback al crear el token client, no en cada pedido de token,
 * así que creamos un client nuevo por llamada para poder resolver la promesa correcta.
 */
export async function requestToken(interactive: boolean): Promise<string> {
  const clientId = getClientId();
  if (!clientId) throw new Error('Falta configurar VITE_GOOGLE_CLIENT_ID.');
  await waitForGis();

  return new Promise((resolve, reject) => {
    const client = window.google!.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPES,
      callback: response => {
        if (response.error) reject(new Error(response.error_description ?? response.error));
        else resolve(response.access_token);
      },
      error_callback: err => reject(new Error(err.message ?? err.type)),
    });
    client.requestAccessToken({ prompt: interactive ? '' : 'none' });
  });
}

export function revokeToken(token: string): void {
  window.google?.accounts.oauth2.revoke(token);
}

export function markAuthHint(): void {
  localStorage.setItem(AUTH_HINT_KEY, '1');
}

export function clearAuthHint(): void {
  localStorage.removeItem(AUTH_HINT_KEY);
}

export function hasAuthHint(): boolean {
  return localStorage.getItem(AUTH_HINT_KEY) === '1';
}

export async function fetchUserInfo(token: string): Promise<GoogleUser> {
  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('No se pudo obtener el perfil de Google.');
  const data = await res.json() as { name?: string; email?: string; picture?: string };
  return { name: data.name ?? 'Usuario', email: data.email ?? '', picture: data.picture ?? '' };
}

async function driveFindFileId(token: string): Promise<string | null> {
  const params = new URLSearchParams({
    spaces: 'appDataFolder',
    q: `name='${DRIVE_FILE_NAME}'`,
    fields: 'files(id)',
  });
  const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('No se pudo buscar el archivo de progreso en Drive.');
  const data = await res.json() as { files?: { id: string }[] };
  return data.files?.[0]?.id ?? null;
}

/** Descarga el progreso guardado en Drive. Si no hay archivo todavía, devuelve {}. */
export async function driveLoadAll(token: string): Promise<CloudProgreso> {
  const fileId = await driveFindFileId(token);
  if (!fileId) return {};
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('No se pudo leer el progreso guardado en Drive.');
  return await res.json() as CloudProgreso;
}

/** Sobreescribe el archivo de progreso en Drive con el blob completo (crea el archivo la primera vez). */
async function driveCreateEmptyFile(token: string): Promise<string> {
  const res = await fetch('https://www.googleapis.com/drive/v3/files', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: DRIVE_FILE_NAME, parents: ['appDataFolder'] }),
  });
  if (!res.ok) throw new Error('No se pudo crear el archivo de progreso en Drive.');
  const created = await res.json() as { id: string };
  return created.id;
}

export async function driveSaveAll(token: string, data: CloudProgreso): Promise<void> {
  // Crear el archivo (sin contenido) y subir el contenido son dos pasos separados:
  // uploadType=multipart necesita un body multipart/related, que no es lo mismo que
  // el multipart/form-data que arma FormData en el navegador — más simple hacerlo así.
  const fileId = (await driveFindFileId(token)) ?? (await driveCreateEmptyFile(token));
  const res = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('No se pudo guardar el progreso en Drive.');
}
