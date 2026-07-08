import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const comunicacionSocial: Carrera = {
  id: 'lic-comunicacion',
  nombre: 'Licenciatura en Comunicación Social',
  plan: '2009',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2700', codigo: '2700', nombre: 'Economía',                              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2850', codigo: '2850', nombre: 'Taller de Gráfica, Radio y Televisión I', anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2702', codigo: '2702', nombre: 'Filosofía',                             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2703', codigo: '2703', nombre: 'Sociología',                            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2704', codigo: '2704', nombre: 'Taller de Integración',                 anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2705', codigo: '2705', nombre: 'Psicología',                            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2851', codigo: '2851', nombre: 'Taller de Gráfica, Radio y Televisión II', anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2850'], tipo: 'obligatoria' },
    { id: '2706', codigo: '2706', nombre: 'Teoría Social',                         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2707', codigo: '2707', nombre: 'Procesos Sociohistóricos Mundiales',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2761', codigo: '2761', nombre: 'Semiótica I',                           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2762', codigo: '2762', nombre: 'Teoría de la Comunicación I',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2764', codigo: '2764', nombre: 'Procesos Sociohistóricos Argentinos',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2783', codigo: '2783', nombre: 'Archivo y Documentación Periodística',  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2852', codigo: '2852', nombre: 'Taller de Gráfica, Radio y Televisión III', anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2704', '2850', '2851'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2765', codigo: '2765', nombre: 'Teoría de la Comunicación II',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2762', '2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2766', codigo: '2766', nombre: 'Antropología Social y Cultural',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2764', '2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2784', codigo: '2784', nombre: 'Taller de Aplicación',                  anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2783', '2704', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2853', codigo: '2853', nombre: 'Taller de Gráfica, Radio y Televisión IV', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2852', '2704', '2850', '2851'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2759', codigo: '2759', nombre: 'Metodología de la Investigación I',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2761', '2762', '2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2768', codigo: '2768', nombre: 'Semiótica II',                          anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2761', '2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2769', codigo: '2769', nombre: 'Análisis y Producción Periodística',    anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2761', '2765', '2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2771', codigo: '2771', nombre: 'Historia de los Medios de Comunicación', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2854', codigo: '2854', nombre: 'Taller de Gráfica, Radio y Televisión V', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2852', '2853', '2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2772', codigo: '2772', nombre: 'Metodología de la Investigación II',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2759'], tipo: 'obligatoria' },
    { id: '2773', codigo: '2773', nombre: 'Cultura Popular e Industria Cultural',  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2765', '2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2774', codigo: '2774', nombre: 'Comunicación Comunitaria',              anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2766', '2771'], tipo: 'obligatoria' },
    { id: '2855', codigo: '2855', nombre: 'Taller de Gráfica, Radio y Televisión VI', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2854'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2775', codigo: '2775', nombre: 'Derecho de la Información Social',      anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2702', '2703', '2704', '2705', '2706', '2707', '2850', '2851'], tipo: 'obligatoria' },
    { id: '2776', codigo: '2776', nombre: 'Principales Tendencias Estéticas y Artísticas', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2773'], tipo: 'obligatoria' },
    { id: '2777', codigo: '2777', nombre: 'Comunicación e Imagen Institucional',   anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2768', '2774'], tipo: 'obligatoria' },
    { id: '2778', codigo: '2778', nombre: 'Taller de Producción y Administración en Medios', anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2768', '2855'], tipo: 'obligatoria', esAnual: true },
    { id: '2779', codigo: '2779', nombre: 'Políticas y Planificación de la Comunicación', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2772', '2774'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2780', codigo: '2780', nombre: 'Taller Electivo',                       anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2855'], tipo: 'obligatoria' },
    { id: '2781', codigo: '2781', nombre: 'Taller de Elaboración de Trabajo Final', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2769', '2776', '2777'], tipo: 'obligatoria' },
    { id: '2782', codigo: '2782', nombre: 'Seminario de Tópicos de Avanzada',      anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2775', '2855'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',             anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
