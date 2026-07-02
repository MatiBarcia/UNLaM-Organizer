import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const comercioInternacional: Carrera = {
  id: 'lic-comercio-internacional',
  nombre: 'Licenciatura en Comercio Internacional',
  plan: '2018',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2400', codigo: '2400', nombre: 'Matemática I',                  anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2401', codigo: '2401', nombre: 'Contabilidad Básica',           anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2402', codigo: '2402', nombre: 'Derecho Público',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2403', codigo: '2403', nombre: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2404', codigo: '2404', nombre: 'Historia Económica Social Contemporánea', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2405', codigo: '2405', nombre: 'Administración General',        anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2407', codigo: '2407', nombre: 'Estadística',                   anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2411', codigo: '2411', nombre: 'Economía General',              anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400', '2404'], tipo: 'obligatoria' },
    { id: '2440', codigo: '2440', nombre: 'Derecho Civil y Comercial',     anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2402'], tipo: 'obligatoria' },
    { id: '2441', codigo: '2441', nombre: 'Introducción al Comercio Internacional', anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2416', codigo: '2416', nombre: 'Macroeconomía',                 anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2400', '2411'], tipo: 'obligatoria' },
    { id: '2443', codigo: '2443', nombre: 'Legislación Aduanera',          anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2440', '2441'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2439', codigo: '2439', nombre: 'Geografía Económica',           anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2444', codigo: '2444', nombre: 'Operadora del Comercio Internacional', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2443'], tipo: 'obligatoria' },
    { id: '2445', codigo: '2445', nombre: 'Valoración y Clasificación Arancelaria', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2443'], tipo: 'obligatoria' },
    { id: '2446', codigo: '2446', nombre: 'Costos y Elementos de Finanzas', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2401'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2448', codigo: '2448', nombre: 'Práctica Aduanera',             anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2444', '2445'], tipo: 'obligatoria' },
    { id: '2449', codigo: '2449', nombre: 'Logística Internacional',       anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2439', '2444'], tipo: 'obligatoria' },
    { id: '2450', codigo: '2450', nombre: 'Régimen Financiero del Comercio Internacional', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2441', '2446'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2451', codigo: '2451', nombre: 'Comercialización',              anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2405', '2407', '2441'], tipo: 'obligatoria' },
    { id: '2452', codigo: '2452', nombre: 'Investigación de Mercados',     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2403', '2407', '2439'], tipo: 'obligatoria' },
    { id: '2453', codigo: '2453', nombre: 'Integración Económica',         anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2441', '2416'], tipo: 'obligatoria' },
    { id: '2454', codigo: '2454', nombre: 'Planeamiento y Evaluación de Proyectos', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2407', '2444', '2446'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2455', codigo: '2455', nombre: 'Taller de Gestión Operativa del Comercio Internacional', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2444', '2445', '2446', '2454'], tipo: 'obligatoria' },
    { id: '2456', codigo: '2456', nombre: 'Economía Internacional',        anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2453'], tipo: 'obligatoria' },
    { id: '2461', codigo: '2461', nombre: 'Inglés Técnico I',              anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2457', codigo: '2457', nombre: 'Relaciones Económicas Internacionales', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2456'], tipo: 'obligatoria' },
    { id: '2458', codigo: '2458', nombre: 'Práctica Profesional',          anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2452', '2455'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2459', codigo: '2459', nombre: 'Derecho Internacional',         anio: 5, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2443', '2453'], tipo: 'obligatoria' },
    { id: '2462', codigo: '2462', nombre: 'Inglés Técnico II',             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2461'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
