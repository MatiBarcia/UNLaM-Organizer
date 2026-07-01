import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) para esta carrera NO publica año ni cuatrimestre
// por materia — solo el listado de correlatividades y la carga horaria. El año y el
// cuatrimestre de cada una se infirieron a partir de la profundidad de sus cadenas de
// correlativas (cuántos "pasos" de dependencia hay desde una materia sin requisitos).
export const procurador: Carrera = {
  id: 'procurador',
  nombre: 'Procurador',
  plan: '2010',
  cuatrimestreEstimado: true,
  anioEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2300', codigo: '2300', nombre: 'Introducción al Derecho',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2301', codigo: '2301', nombre: 'Derecho Romano',                anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2302', codigo: '2302', nombre: 'Derecho Político',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2303', codigo: '2303', nombre: 'Derecho Civil I',               anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2301'], tipo: 'obligatoria' },
    { id: '2304', codigo: '2304', nombre: 'Derecho Constitucional I',      anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2302'], tipo: 'obligatoria' },
    { id: '2339', codigo: '2339', nombre: 'Práctica Forense I',            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2300'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2307', codigo: '2307', nombre: 'Derecho Penal I',               anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2300', '2304'], tipo: 'obligatoria' },
    { id: '2308', codigo: '2308', nombre: 'Derecho Civil II',              anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2303'], tipo: 'obligatoria' },
    { id: '2314', codigo: '2314', nombre: 'Derecho Constitucional II',     anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2304'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2311', codigo: '2311', nombre: 'Derecho Penal II',              anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2307'], tipo: 'obligatoria' },
    { id: '2313', codigo: '2313', nombre: 'Derecho Comercial I',           anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2308'], tipo: 'obligatoria' },
    { id: '2315', codigo: '2315', nombre: 'Derecho Civil III',             anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2308'], tipo: 'obligatoria' },
    { id: '2318', codigo: '2318', nombre: 'Derecho Administrativo I',      anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2314'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2316', codigo: '2316', nombre: 'Derecho Procesal I',            anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2304', '2311'], tipo: 'obligatoria' },
    { id: '2317', codigo: '2317', nombre: 'Derecho del Trabajo',           anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2315'], tipo: 'obligatoria' },
    { id: '2320', codigo: '2320', nombre: 'Derecho Comercial II',          anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2313'], tipo: 'obligatoria' },
    { id: '2322', codigo: '2322', nombre: 'Derecho Civil IV',              anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2315'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2323', codigo: '2323', nombre: 'Derecho Procesal II',           anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2316'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['911'], tipo: 'transversal' },
  ],
};
