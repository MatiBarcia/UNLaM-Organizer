import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const contadorPublico: Carrera = {
  id: 'contador-publico',
  nombre: 'Contador Público',
  plan: '2018',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2400', codigo: '2400', nombre: 'Matemática I',                  anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2401', codigo: '2401', nombre: 'Contabilidad Básica',           anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2402', codigo: '2402', nombre: 'Derecho Público',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2403', codigo: '2403', nombre: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2404', codigo: '2404', nombre: 'Historia Económica Social y Contemporánea', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2405', codigo: '2405', nombre: 'Administración General',        anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2406', codigo: '2406', nombre: 'Matemática II',                 anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2408', codigo: '2408', nombre: 'Técnicas de Valuación',         anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2401'], tipo: 'obligatoria' },
    { id: '2409', codigo: '2409', nombre: 'Derecho Civil',                 anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2402'], tipo: 'obligatoria' },
    { id: '2411', codigo: '2411', nombre: 'Economía General',              anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400', '2404'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2413', codigo: '2413', nombre: 'Derecho Comercial I',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2409'], tipo: 'obligatoria' },
    { id: '2416', codigo: '2416', nombre: 'Macroeconomía',                 anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2406', '2411'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2407', codigo: '2407', nombre: 'Estadística',                   anio: 3, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2410', codigo: '2410', nombre: 'Elementos de Costos',           anio: 3, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2408'], tipo: 'obligatoria' },
    { id: '2412', codigo: '2412', nombre: 'Psicosociología de las Organizaciones', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2403', '2405'], tipo: 'obligatoria' },
    { id: '2417', codigo: '2417', nombre: 'Derecho Laboral y Previsional', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2409'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2418', codigo: '2418', nombre: 'Estados Contables',             anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2410', '2413'], tipo: 'obligatoria' },
    { id: '2419', codigo: '2419', nombre: 'Matemática Financiera',         anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2428', codigo: '2428', nombre: 'Estructura Económica Argentina', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2416'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2415', codigo: '2415', nombre: 'Sistemas de Información',       anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2405'], tipo: 'obligatoria' },
    { id: '2430', codigo: '2430', nombre: 'Derecho Comercial II',          anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2413'], tipo: 'obligatoria' },
    { id: '2431', codigo: '2431', nombre: 'Finanzas Públicas',             anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2402', '2407', '2416'], tipo: 'obligatoria' },
    { id: '2432', codigo: '2432', nombre: 'Costos y Actividades Especiales', anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2406', '2418'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2425', codigo: '2425', nombre: 'Administración Financiera',     anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2415', '2419'], tipo: 'obligatoria' },
    { id: '2433', codigo: '2433', nombre: 'Teoría y Técnica Impositiva I', anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2418', '2431'], tipo: 'obligatoria' },
    { id: '2434', codigo: '2434', nombre: 'Contabilidad y Administración Pública', anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2415', '2418', '2428', '2431'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2435', codigo: '2435', nombre: 'Teoría y Técnica Impositiva II', anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2418', '2431'], tipo: 'obligatoria' },
    { id: '2436', codigo: '2436', nombre: 'Auditoría',                     anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2425', '2430', '2432'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2530', codigo: '2530', nombre: 'Seminario de Práctica Profesional Administrativo Contable', anio: 5, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2412', '2417', '2433', '2434', '2435', '2436'], tipo: 'obligatoria' },
    { id: '2534', codigo: '2534', nombre: 'Seminario de Práctica Profesional Jurídico Contable',       anio: 5, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2412', '2417', '2433', '2434', '2435', '2436'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
