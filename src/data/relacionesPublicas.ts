import type { Carrera } from '../types';

// El plan oficial (UNLaM) agrupa las primeras 8 materias en el "C.E.F.I." (Ciclo de
// Estudios de Formación Inicial en Ciencias Sociales), compartido con otras carreras
// del Departamento de Humanidades y Ciencias Sociales. Las materias marcadas como
// "Previstas del C.E.F.I." solo exigen 5 de esas 8 (incluyendo obligatoriamente
// "Taller de Integración" y "Relaciones Públicas I"); por simplicidad se modelaron esas
// dos como correlativas directas. Las marcadas "C.E.F.I. completo" sí exigen las 8.
export const relacionesPublicas: Carrera = {
  id: 'lic-relaciones-publicas',
  nombre: 'Licenciatura en Relaciones Públicas',
  plan: '2009',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2700', codigo: '2700', nombre: 'Economía',                              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2701', codigo: '2701', nombre: 'Relaciones Públicas I',                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2702', codigo: '2702', nombre: 'Filosofía',                             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2703', codigo: '2703', nombre: 'Sociología',                            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2704', codigo: '2704', nombre: 'Taller de Integración',                 anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2705', codigo: '2705', nombre: 'Psicología',                            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2706', codigo: '2706', nombre: 'Teoría Social',                         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2707', codigo: '2707', nombre: 'Procesos Sociohistóricos Mundiales',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2708', codigo: '2708', nombre: 'Economía Aplicada',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704', '2700'], tipo: 'obligatoria' },
    { id: '2709', codigo: '2709', nombre: 'Relaciones Públicas II',                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2710', codigo: '2710', nombre: 'Teoría de la Comunicación I',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2711', codigo: '2711', nombre: 'Procesos Sociohistóricos Argentinos',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704', '2707'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2712', codigo: '2712', nombre: 'Administración General',                anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2708'], tipo: 'obligatoria' },
    { id: '2713', codigo: '2713', nombre: 'Taller de Expresión Corporal',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2753', codigo: '2753', nombre: 'Taller de Juego y Dramatización',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2715', codigo: '2715', nombre: 'Dinámica de Grupo',                     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2710'], tipo: 'obligatoria' },
    { id: '2716', codigo: '2716', nombre: 'Teoría de la Comunicación II',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2710'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2717', codigo: '2717', nombre: 'Organización y Estructura',             anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707', '2712'], tipo: 'obligatoria' },
    { id: '2718', codigo: '2718', nombre: 'Publicidad y Estrategias Comunicacionales', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707', '2709', '2710', '2711', '2712'], tipo: 'obligatoria' },
    { id: '2719', codigo: '2719', nombre: 'Semiótica',                             anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707', '2716'], tipo: 'obligatoria' },
    { id: '2720', codigo: '2720', nombre: 'Metodología de la Investigación I',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2721', codigo: '2721', nombre: 'Administración de Recursos Humanos',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2717'], tipo: 'obligatoria' },
    { id: '2756', codigo: '2756', nombre: 'Comunicación e Imagen Institucional',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2713', '2753', '2717', '2718', '2719'], tipo: 'obligatoria' },
    { id: '2723', codigo: '2723', nombre: 'Psicología Social Institucional',       anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2715'], tipo: 'obligatoria' },
    { id: '2724', codigo: '2724', nombre: 'Metodología de la Investigación II',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2720'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2725', codigo: '2725', nombre: 'Marketing',                             anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2721', '2756', '2724'], tipo: 'obligatoria' },
    { id: '2726', codigo: '2726', nombre: 'Taller de Organización de Eventos, Ceremonial y Protocolo', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2723'], tipo: 'obligatoria' },
    { id: '2755', codigo: '2755', nombre: 'Taller de Elocución y Oratoria',        anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2723'], tipo: 'obligatoria' },
    { id: '2728', codigo: '2728', nombre: 'Investigación de Mercado',              anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2724'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2757', codigo: '2757', nombre: 'Taller de Elaboración del Trabajo Final', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2725', '2726', '2755', '2728'], tipo: 'obligatoria' },
    { id: '2758', codigo: '2758', nombre: 'Planeamiento de Relaciones Públicas',   anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2725', '2726', '2755', '2728'], tipo: 'obligatoria' },
    { id: '2731', codigo: '2731', nombre: 'Seminario de Tópicos de Avanzada',      anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2725'], tipo: 'obligatoria' },
    { id: '2732', codigo: '2732', nombre: 'Relaciones Internacionales',            anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2725'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
