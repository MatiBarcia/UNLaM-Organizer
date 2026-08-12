import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import type { ProgresoPerfil } from '../types';
import {
  requestToken,
  revokeToken,
  fetchUserInfo,
  driveLoadAll,
  driveSaveAll,
  isGoogleSyncConfigured,
  type GoogleUser,
  type CloudProgreso,
} from '../lib/googleDrive';

type Status = 'logged-out' | 'logging-in' | 'logged-in';

interface AuthCtx {
  status: Status;
  user: GoogleUser | null;
  syncConfigured: boolean;
  /** Progreso ya bajado de Drive, fusionado con lo que hubiera en localStorage al loguearse. */
  cloudProgreso: CloudProgreso | null;
  login: () => Promise<void>;
  logout: () => void;
  /** useProgreso llama esto en cada cambio; actualiza el estado en memoria y guarda en Drive con debounce. */
  updateCarreraProgreso: (carreraId: string, progreso: ProgresoPerfil) => void;
}

const AuthContext = createContext<AuthCtx | null>(null);

export function useAuth(): AuthCtx {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}

const LOCAL_PROGRESO_PREFIX = 'unlam_progreso_v1_';

interface ConnToast {
  kind: 'offline' | 'online';
  message: string;
}

/**
 * El evento 'online' del navegador solo dice que el SO ve *alguna* interfaz de red
 * activa, no que haya internet de verdad — al apagar el Wi-Fi, Chrome a veces lo
 * reporta con eventos fuera de orden o falsos positivos (por ejemplo si el SO ve por
 * un instante otra interfaz, una VPN, etc). Antes de anunciar "conexión restablecida"
 * hacemos un pedido real y liviano; si no llega, el 'online' era falso y lo ignoramos.
 *
 * `signal` lo controla quien llama: así, si llega un evento más nuevo (togglear
 * wifi rápido dispara varios 'online'/'offline' seguidos) se puede abortar este
 * chequeo en vez de dejarlo resolver tarde y pisar un estado más reciente.
 */
async function hasRealConnectivity(signal: AbortSignal): Promise<boolean> {
  try {
    // 'no-cors' + generate_204: el mismo endpoint que usa Chrome/Android para sus
    // propios chequeos de conectividad. No importa leer la respuesta (es opaca), solo
    // que el pedido llegue y vuelva sin tirar error de red.
    await fetch('https://www.gstatic.com/generate_204', {
      mode: 'no-cors',
      cache: 'no-store',
      signal,
    });
    return true;
  } catch {
    return false;
  }
}

function readAllLocalProgreso(): CloudProgreso {
  const result: CloudProgreso = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(LOCAL_PROGRESO_PREFIX)) continue;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      result[key.slice(LOCAL_PROGRESO_PREFIX.length)] = JSON.parse(raw) as ProgresoPerfil;
    } catch {
      // entrada corrupta, se ignora
    }
  }
  return result;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>('logged-out');
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [cloudProgreso, setCloudProgreso] = useState<CloudProgreso | null>(null);
  const [toast, setToast] = useState<ConnToast | null>(null);
  const tokenRef = useRef<string | null>(null);
  const statusRef = useRef<Status>(status);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const finishLogin = useCallback(async (token: string) => {
    tokenRef.current = token;
    const [profile, cloud] = await Promise.all([fetchUserInfo(token), driveLoadAll(token)]);

    // Primer login en este navegador: lo que había en localStorage y no está en la
    // nube se sube (unión); si una materia existe en ambos lados, gana la nube.
    const local = readAllLocalProgreso();
    const merged: CloudProgreso = structuredClone(cloud);
    let changed = false;
    for (const [carreraId, progreso] of Object.entries(local)) {
      merged[carreraId] ??= {};
      for (const [materiaId, entry] of Object.entries(progreso)) {
        if (!(materiaId in merged[carreraId])) {
          merged[carreraId][materiaId] = entry;
          changed = true;
        }
      }
    }
    if (changed) await driveSaveAll(token, merged);

    setUser(profile);
    setCloudProgreso(merged);
    setStatus('logged-in');
  }, []);

  const login = useCallback(async () => {
    setStatus('logging-in');
    try {
      const token = await requestToken();
      await finishLogin(token);
    } catch (err) {
      console.error('Error iniciando sesión con Google:', err);
      setStatus('logged-out');
      alert('No se pudo iniciar sesión con Google. Probá de nuevo.');
    }
  }, [finishLogin]);

  const logout = useCallback(() => {
    if (tokenRef.current) revokeToken(tokenRef.current);
    tokenRef.current = null;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    setUser(null);
    setCloudProgreso(null);
    setStatus('logged-out');
  }, []);

  /** Sube a Drive el `cloudProgreso` que haya en memoria en ese momento (todas las carreras). */
  const pushToDrive = useCallback(() => {
    const token = tokenRef.current;
    if (!token) return;
    setCloudProgreso(current => {
      if (current) void driveSaveAll(token, current).catch(err => console.error('Error guardando en Drive:', err));
      return current;
    });
  }, []);

  const updateCarreraProgreso = useCallback((carreraId: string, progreso: ProgresoPerfil) => {
    setCloudProgreso(prev => ({ ...(prev ?? {}), [carreraId]: progreso }));

    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(pushToDrive, 1500);
  }, [pushToDrive]);

  // Chequeo de conectividad en curso (si lo hay): togglear wifi rápido dispara varios
  // eventos 'online'/'offline' seguidos, y sin esto cada uno lanzaba su propio fetch de
  // hasta 3s sin cancelar el anterior — el que terminaba último pisaba el toast con un
  // estado viejo. Cada evento nuevo aborta el chequeo pendiente antes de seguir.
  const connCheck = useRef<{ controller: AbortController; timeout: ReturnType<typeof setTimeout> } | null>(null);
  const cancelPendingConnCheck = useCallback(() => {
    if (!connCheck.current) return;
    clearTimeout(connCheck.current.timeout);
    connCheck.current.controller.abort();
    connCheck.current = null;
  }, []);

  // Si el navegador pierde/recupera conexión, avisamos con un toast (como YouTube). Al
  // reconectar, si había sesión de Google activa, además disparamos un guardado: los
  // cambios hechos offline ya quedaron en `cloudProgreso` en memoria (ver
  // updateCarreraProgreso), pero el PATCH a Drive mientras no había red falló en
  // silencio y no se reintenta solo — hay que volver a intentarlo acá.
  useEffect(() => {
    const handleOffline = () => {
      cancelPendingConnCheck();
      setToast({ kind: 'offline', message: 'Sin conexión — los cambios se siguen guardando en este dispositivo.' });
    };
    const handleOnline = () => {
      cancelPendingConnCheck();
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      connCheck.current = { controller, timeout };
      void (async () => {
        const ok = await hasRealConnectivity(controller.signal);
        if (connCheck.current?.controller !== controller) return; // superado por un evento más nuevo
        clearTimeout(timeout);
        connCheck.current = null;
        if (!ok) return; // 'online' falso positivo, se ignora
        setToast({ kind: 'online', message: 'Conexión restablecida' });
        if (statusRef.current === 'logged-in') pushToDrive();
      })();
    };
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      cancelPendingConnCheck();
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [pushToDrive, cancelPendingConnCheck]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <AuthContext.Provider
      value={{ status, user, syncConfigured: isGoogleSyncConfigured(), cloudProgreso, login, logout, updateCarreraProgreso }}
    >
      {children}
      {toast && (
        <div className={`conn-toast conn-toast--${toast.kind}`} role="status" aria-live="polite">
          {toast.kind === 'offline' ? <WifiOff size={16} /> : <Wifi size={16} />}
          <span>{toast.message}</span>
        </div>
      )}
    </AuthContext.Provider>
  );
}
