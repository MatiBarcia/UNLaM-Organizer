import { useState, useEffect, useCallback } from 'react';
import type { MateriaProgreso, ProgresoPerfil } from '../types';

export function useProgreso(carreraId: string) {
  const storageKey = `unlam_progreso_v1_${carreraId}`;

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

  return { progreso, setEstado, updateGrades, removeMateria };
}
