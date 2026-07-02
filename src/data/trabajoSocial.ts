import type { Carrera } from '../types';

// El plan oficial (UNLaM) agrupa las primeras 8 materias en el "C.E.F.I." (Ciclo de
// Estudios de Formación Inicial en Ciencias Sociales), compartido con otras carreras
// del Departamento de Humanidades y Ciencias Sociales (en esta carrera, "Introducción
// al Trabajo Social" ocupa el lugar de "Relaciones Públicas I"). Las materias marcadas
// "Previstas del C.E.F.I." solo exigen 5 de las 8 (incluyendo obligatoriamente "Taller
// de Integración" e "Introducción al Trabajo Social"); por simplicidad se modelaron esas
// dos como correlativas directas. Las marcadas "C.E.F.I. completo" sí exigen las 8.
// No se incluyó "2846 - Taller de Gestión en Servicios Sociales" por ser una materia
// específica de otra carrera (Tecnicatura Universitaria en Servicios Sociales).
export const trabajoSocial: Carrera = {
  id: 'lic-trabajo-social',
  nombre: 'Licenciatura en Trabajo Social',
  plan: '2009',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2700', codigo: '2700', nombre: 'Economía',                              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2845', codigo: '2845', nombre: 'Introducción al Trabajo Social',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2702', codigo: '2702', nombre: 'Filosofía',                             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2703', codigo: '2703', nombre: 'Sociología',                            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2704', codigo: '2704', nombre: 'Taller de Integración',                 anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2705', codigo: '2705', nombre: 'Psicología',                            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2706', codigo: '2706', nombre: 'Teoría Social',                         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2707', codigo: '2707', nombre: 'Procesos Sociohistóricos Mundiales',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2785', codigo: '2785', nombre: 'Metodología de la Investigación I',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2786', codigo: '2786', nombre: 'Trabajo Social I',                      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2785'], tipo: 'obligatoria' },
    { id: '2787', codigo: '2787', nombre: 'Psicología Social e Institucional',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2845', '2705'], tipo: 'obligatoria' },
    { id: '2788', codigo: '2788', nombre: 'Procesos Sociohistóricos Argentinos',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2704', '2845', '2707'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2789', codigo: '2789', nombre: 'Metodología de la Investigación II',    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2704', '2845', '2785'], tipo: 'obligatoria' },
    { id: '2790', codigo: '2790', nombre: 'Taller de Producción y Registro de la Información', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2704', '2845'], tipo: 'obligatoria' },
    { id: '2791', codigo: '2791', nombre: 'Trabajo Social II',                     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2704', '2845', '2786'], tipo: 'obligatoria' },
    { id: '2792', codigo: '2792', nombre: 'Derecho y Legislación Aplicada',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2704', '2845'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2793', codigo: '2793', nombre: 'Práctica I (individual y familiar)',    anio: 3, cuatrimestre: 1, horasSemanales: 10, correlativas: ['2700', '2845', '2702', '2703', '2704', '2705', '2706', '2707', '2790'], tipo: 'obligatoria' },
    { id: '2794', codigo: '2794', nombre: 'Trabajo Social III',                    anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2845', '2702', '2703', '2704', '2705', '2706', '2707', '2790', '2791', '2792'], tipo: 'obligatoria' },
    { id: '2795', codigo: '2795', nombre: 'Antropología Social y Cultural',        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2845', '2702', '2703', '2704', '2705', '2706', '2707'], tipo: 'obligatoria' },
    { id: '2796', codigo: '2796', nombre: 'Estado y Políticas Públicas',           anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2700', '2845', '2702', '2703', '2704', '2705', '2706', '2707', '2788'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2797', codigo: '2797', nombre: 'Práctica II (grupo y comunidad)',       anio: 3, cuatrimestre: 2, horasSemanales: 10, correlativas: ['2793'], tipo: 'obligatoria' },
    { id: '2798', codigo: '2798', nombre: 'Trabajo Social IV',                     anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2789', '2794', '2795'], tipo: 'obligatoria' },
    { id: '2799', codigo: '2799', nombre: 'Gestión de Organizaciones',             anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2787'], tipo: 'obligatoria' },
    { id: '2836', codigo: '2836', nombre: 'Políticas Sociales y Gestión Local',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2796'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2837', codigo: '2837', nombre: 'Práctica III (organizaciones)',         anio: 4, cuatrimestre: 1, horasSemanales: 10, correlativas: ['2797'], tipo: 'obligatoria' },
    { id: '2838', codigo: '2838', nombre: 'Trabajo Social V',                      anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2798', '2799', '2836'], tipo: 'obligatoria' },
    { id: '2839', codigo: '2839', nombre: 'Seminario Electivo I',                  anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2798'], tipo: 'obligatoria' },
    { id: '2840', codigo: '2840', nombre: 'Seminario Electivo II',                 anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2798'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2841', codigo: '2841', nombre: 'Taller de Elaboración de Trabajo Final', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2789', '2837', '2838'], tipo: 'obligatoria' },
    { id: '2842', codigo: '2842', nombre: 'Práctica IV (planificación y proyectos)', anio: 4, cuatrimestre: 2, horasSemanales: 10, correlativas: ['2837'], tipo: 'obligatoria' },
    { id: '2843', codigo: '2843', nombre: 'Sistematización de la Práctica',        anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2837'], tipo: 'obligatoria' },
    { id: '2847', codigo: '2847', nombre: 'Seminario de Tópicos de Avanzada',      anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2798'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
