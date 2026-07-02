import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
// Las Electivas 1 y 2 requieren tener aprobadas las asignaturas del Título
// Intermedio (Analista Económico), marcadas con (*) en el plan oficial.
const CORRELATIVAS_TITULO_INTERMEDIO = [
  '2400', '2401', '2402', '2403', '2404', '2405',
  '2406', '2407', '2411', '2416', '2579', '2580',
  '3193', '2419', '3194', '3195', '3196', '2585', '2597', '3197',
  '901', '902', '911', '912',
];

export const economia: Carrera = {
  id: 'lic-economia',
  nombre: 'Licenciatura en Economía',
  plan: '2023',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2400', codigo: '2400', nombre: 'Matemática I',                  anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2401', codigo: '2401', nombre: 'Contabilidad Básica',           anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '2402', codigo: '2402', nombre: 'Derecho Público',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2403', codigo: '2403', nombre: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2404', codigo: '2404', nombre: 'Historia Económica y Social Contemporánea', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2405', codigo: '2405', nombre: 'Administración General',        anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2406', codigo: '2406', nombre: 'Matemática II',                 anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2407', codigo: '2407', nombre: 'Estadística',                   anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2400'], tipo: 'obligatoria' },
    { id: '2411', codigo: '2411', nombre: 'Economía General',              anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400', '2404'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2416', codigo: '2416', nombre: 'Macroeconomía',                 anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2411'], tipo: 'obligatoria' },
    { id: '2579', codigo: '2579', nombre: 'Sociología',                    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2403', '2404'], tipo: 'obligatoria' },
    { id: '2580', codigo: '2580', nombre: 'Historia Económica Argentina',  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2404'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3193', codigo: '3193', nombre: 'Estadística Avanzada',          anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2406', '2407'], tipo: 'obligatoria' },
    { id: '2419', codigo: '2419', nombre: 'Matemática Financiera',         anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2400', '2401'], tipo: 'obligatoria' },
    { id: '3194', codigo: '3194', nombre: 'Cuentas Nacionales',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2407', '2416'], tipo: 'obligatoria' },
    { id: '3195', codigo: '3195', nombre: 'Matemática III',                anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2406'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3196', codigo: '3196', nombre: 'Microeconomía Aplicada',        anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2411', '3193'], tipo: 'obligatoria' },
    { id: '2585', codigo: '2585', nombre: 'Metodología de la Investigación Económica', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2403', '2580'], tipo: 'obligatoria' },
    { id: '2597', codigo: '2597', nombre: 'Economía de los Recursos Naturales y Ambientales', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3194'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3197', codigo: '3197', nombre: 'Macroeconomía Avanzada',        anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['3194'], tipo: 'obligatoria' },
    { id: '2431', codigo: '2431', nombre: 'Finanzas Públicas',             anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2402', '3194'], tipo: 'obligatoria' },
    { id: '3198', codigo: '3198', nombre: 'Análisis Sectorial',            anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2405', '2597', '3196'], tipo: 'obligatoria' },
    { id: '3199', codigo: '3199', nombre: 'Econometría',                   anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['3193', '3195'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2593', codigo: '2593', nombre: 'Historia del Pensamiento Económico', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2416', '2579'], tipo: 'obligatoria' },
    { id: '3233', codigo: '3233', nombre: 'Dinero, Créditos y Bancos',     anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2419', '3197'], tipo: 'obligatoria' },
    { id: '2427', codigo: '2427', nombre: 'Planeamiento y Evaluación de Proyectos', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2419', '3198'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3235', codigo: '3235', nombre: 'Economía Internacional',        anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3196', '3233'], tipo: 'obligatoria' },
    { id: '3236', codigo: '3236', nombre: 'Economía del Comportamiento',   anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2427', '3196'], tipo: 'obligatoria' },
    { id: '2595', codigo: '2595', nombre: 'Crecimiento y Desarrollo Económico', anio: 5, cuatrimestre: 1, horasSemanales: 6, correlativas: ['3197', '3198'], tipo: 'obligatoria' },
    { id: '3234', codigo: '3234', nombre: 'Electiva 1',                    anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_slot' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3237', codigo: '3237', nombre: 'Mercado de Capitales',          anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3233', '3236'], tipo: 'obligatoria' },
    { id: '2598', codigo: '2598', nombre: 'Política Económica',            anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2431', '3235'], tipo: 'obligatoria' },
    { id: '3238', codigo: '3238', nombre: 'Electiva 2',                    anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_slot' },
    { id: '2599', codigo: '2599', nombre: 'Seminario de Actuación Profesional', anio: 5, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2585', '2427', '3199'], tipo: 'obligatoria' },

    // ── Opciones de Electivas ──────────────────────────────────────────────
    { id: '3987', codigo: '3987', nombre: 'Relaciones Económicas Internacionales', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3988', codigo: '3988', nombre: 'Estructura Económica Argentina',        anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3989', codigo: '3989', nombre: 'Políticas Sociales y Gestión Local',    anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3990', codigo: '3990', nombre: 'Taller de Elocución y Oratoria',        anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3991', codigo: '3991', nombre: 'Gestión de Políticas Públicas',         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3992', codigo: '3992', nombre: 'Demografía Social',                     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3993', codigo: '3993', nombre: 'Gestión de la Innovación y Emprendedorismo', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },
    { id: '3994', codigo: '3994', nombre: 'Gestión Logística',                     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: CORRELATIVAS_TITULO_INTERMEDIO, tipo: 'electiva_opcion' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
