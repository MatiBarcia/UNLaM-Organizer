import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
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
  const tokenRef = useRef<string | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const updateCarreraProgreso = useCallback((carreraId: string, progreso: ProgresoPerfil) => {
    setCloudProgreso(prev => ({ ...(prev ?? {}), [carreraId]: progreso }));

    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      const token = tokenRef.current;
      if (!token) return;
      setCloudProgreso(current => {
        if (current) void driveSaveAll(token, current).catch(err => console.error('Error guardando en Drive:', err));
        return current;
      });
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider
      value={{ status, user, syncConfigured: isGoogleSyncConfigured(), cloudProgreso, login, logout, updateCarreraProgreso }}
    >
      {children}
    </AuthContext.Provider>
  );
}
