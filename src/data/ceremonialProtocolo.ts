import type { Carrera } from '../types';

// El plan oficial (UNLaM) agrupa las primeras 8 materias en el "C.E.F.I." (Ciclo de
// Estudios de Formación Inicial en Ciencias Sociales), compartido con otras carreras
// del Departamento de Humanidades y Ciencias Sociales. Las materias marcadas como
// "Previstas del C.E.F.I." solo exigen 5 de esas 8 (incluyendo obligatoriamente
// "Taller de Integración" y "Relaciones Públicas I"); por simplicidad se modelaron esas
// dos como correlativas directas. Las marcadas "C.E.F.I. completo" sí exigen las 8.
export const ceremonialProtocolo: Carrera = {
  id: 'tec-ceremonial-protocolo',
  nombre: 'Técnico Universitario en Ceremonial y Protocolo',
  plan: '2007',
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
    { id: '2734', codigo: '2734', nombre: 'Ceremonial y Protocolo I',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2744', codigo: '2744', nombre: 'Administración General',                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2735', codigo: '2735', nombre: 'Comunicación y Relaciones Institucionales', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2736', codigo: '2736', nombre: 'Historia de la Cultura',                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2737', codigo: '2737', nombre: 'Ceremonial y Protocolo II',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2734'], tipo: 'obligatoria' },
    { id: '2738', codigo: '2738', nombre: 'Organización de Eventos',               anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2744'], tipo: 'obligatoria' },
    { id: '2739', codigo: '2739', nombre: 'Taller de Práctica I',                  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2734', '2735'], tipo: 'obligatoria' },
    { id: '2740', codigo: '2740', nombre: 'Instituciones y Organismos Internacionales', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704', '2735', '2736'], tipo: 'obligatoria' },
    { id: '2742', codigo: '2742', nombre: 'Taller de Expresión Corporal',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },
    { id: '2743', codigo: '2743', nombre: 'Taller de Juego y Dramatización',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2701', '2704'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2741', codigo: '2741', nombre: 'Taller de Práctica II',                 anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707', '2737', '2738', '2739', '2740'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
  ],
};
