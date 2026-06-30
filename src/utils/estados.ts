import type { Theme } from '../context/ThemeContext';
import type { EstadoMateria, Materia, ProgresoPerfil } from '../types';

export function getEstadoEfectivo(materia: Materia, progreso: ProgresoPerfil): EstadoMateria {
  const p = progreso[materia.id];
  if (p) return p.estado;
  if (materia.correlativas.length === 0) return 'disponible';
  const cumplidas = materia.correlativas.every(id => {
    const cp = progreso[id];
    return cp?.estado === 'regularizada' || cp?.estado === 'aprobada';
  });
  return cumplidas ? 'disponible' : 'bloqueada';
}

export const ESTADO_COLORS = {
  bloqueada:    { border: '#475569', bg: '#151e2d', text: '#64748b', label: 'Bloqueada'    },
  disponible:   { border: '#3b82f6', bg: '#172554', text: '#93c5fd', label: 'Disponible'   },
  cursando:     { border: '#f59e0b', bg: '#3d2706', text: '#fde68a', label: 'Cursando'     },
  regularizada: { border: '#22c55e', bg: '#052e16', text: '#86efac', label: 'Regularizada' },
  aprobada:     { border: '#4ade80', bg: '#14532d', text: '#bbf7d0', label: 'Aprobada'     },
} satisfies Record<EstadoMateria, { border: string; bg: string; text: string; label: string }>;

export const ESTADO_COLORS_LIGHT = {
  bloqueada:    { border: '#94a3b8', bg: '#f1f5f9', text: '#64748b', label: 'Bloqueada'    },
  disponible:   { border: '#2563eb', bg: '#dbeafe', text: '#1e40af', label: 'Disponible'   },
  cursando:     { border: '#d97706', bg: '#fef3c7', text: '#92400e', label: 'Cursando'     },
  regularizada: { border: '#16a34a', bg: '#dcfce7', text: '#166534', label: 'Regularizada' },
  aprobada:     { border: '#15803d', bg: '#bbf7d0', text: '#14532d', label: 'Aprobada'     },
} satisfies Record<EstadoMateria, { border: string; bg: string; text: string; label: string }>;

export type EstadoColorsMap = typeof ESTADO_COLORS;

export function getEstadoColors(theme: Theme): EstadoColorsMap {
  return theme === 'light' ? ESTADO_COLORS_LIGHT : ESTADO_COLORS;
}

export function computeStats(
  materias: Materia[],
  estadosEfectivos: Record<string, EstadoMateria>,
) {
  const trackable = materias.filter(m => m.tipo !== 'electiva_opcion');
  let bloqueadas = 0, disponibles = 0, cursando = 0, regularizadas = 0, aprobadas = 0;
  for (const m of trackable) {
    switch (estadosEfectivos[m.id]) {
      case 'bloqueada':    bloqueadas++;    break;
      case 'disponible':   disponibles++;   break;
      case 'cursando':     cursando++;      break;
      case 'regularizada': regularizadas++; break;
      case 'aprobada':     aprobadas++;     break;
    }
  }
  return { total: trackable.length, bloqueadas, disponibles, cursando, regularizadas, aprobadas };
}
