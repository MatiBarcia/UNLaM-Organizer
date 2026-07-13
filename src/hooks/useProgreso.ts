import { useState, useEffect, useRef, useCallback } from 'react';
import type { MateriaProgreso, ProgresoPerfil } from '../types';
import { useAuth } from '../context/AuthContext';

export function useProgreso(carreraId: string) {
  const storageKey = `unlam_progreso_v1_${carreraId}`;
  const { status, cloudProgreso, updateCarreraProgreso } = useAuth();

  const [progreso, setProgreso] = useState<ProgresoPerfil>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as ProgresoPerfil) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progreso));
  }, [progreso, storageKey]);

  // Guarda en Drive (con debounce) cada vez que cambia el progreso, mientras haya sesión.
  const skipNextSync = useRef(false);
  useEffect(() => {
    if (status !== 'logged-in') return;
    if (skipNextSync.current) { skipNextSync.current = false; return; }
    updateCarreraProgreso(carreraId, progreso);
    // Solo cuando progreso cambia — updateCarreraProgreso es estable entre renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progreso, status, carreraId]);

  // Al completarse el login, se trae lo que ya había en la nube para esta carrera:
  // une con lo que hay en memoria (la nube gana si una materia está en las dos partes).
  const reconciledFor = useRef<string | null>(null);
  useEffect(() => {
    if (status !== 'logged-in' || !cloudProgreso || reconciledFor.current === carreraId) return;
    reconciledFor.current = carreraId;
    const cloudForCarrera = cloudProgreso[carreraId];
    if (!cloudForCarrera) return;
    skipNextSync.current = true;
    setProgreso(prev => ({ ...prev, ...cloudForCarrera }));
  }, [status, cloudProgreso, carreraId]);

  const setEstado = useCallback((id: string, estado: MateriaProgreso['estado']) => {
    setProgreso(prev => {
      const existing = prev[id];
      return {
        ...prev,
        [id]: {
          notaParcial1: existing?.notaParcial1 ?? null,
          notaParcial2: existing?.notaParcial2 ?? null,
          notaFinal:    existing?.notaFinal ?? null,
          estado,
        },
      };
    });
  }, []);

  const updateGrades = useCallback(
    (id: string, updates: Pick<MateriaProgreso, 'notaParcial1' | 'notaParcial2' | 'notaFinal'>) => {
      setProgreso(prev => ({
        ...prev,
        [id]: { ...prev[id]!, ...updates },
      }));
    },
    [],
  );

  const removeMateria = useCallback((id: string) => {
    setProgreso(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const importProgreso = useCallback((data: ProgresoPerfil) => {
    setProgreso(data);
  }, []);

  return { progreso, setEstado, updateGrades, removeMateria, importProgreso };
}
