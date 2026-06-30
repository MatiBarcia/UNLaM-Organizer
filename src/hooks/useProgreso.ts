import { useState, useEffect, useCallback } from 'react';
import type { MateriaProgreso, ProgresoPerfil } from '../types';

const STORAGE_KEY = 'unlam_progreso_v1';

export function useProgreso() {
  const [progreso, setProgreso] = useState<ProgresoPerfil>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as ProgresoPerfil) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
  }, [progreso]);

  const setEstado = useCallback((id: string, estado: MateriaProgreso['estado']) => {
    setProgreso(prev => ({
      ...prev,
      [id]: {
        notaParcial1: null,
        notaParcial2: null,
        notaFinal: null,
        ...prev[id],
        estado,
      },
    }));
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

  return { progreso, setEstado, updateGrades, removeMateria };
}
