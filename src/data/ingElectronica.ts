import type { Carrera } from '../types';

export const ingenieriaElectronica: Carrera = {
  id: 'ing-electronica',
  nombre: 'Ingeniería Electrónica',
  plan: '2023',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3681', codigo: '3681', nombre: 'Análisis Matemático I',             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3682', codigo: '3682', nombre: 'Álgebra y Geometría Analítica I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3683', codigo: '3683', nombre: 'Fundamentos de Química',            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3684', codigo: '3684', nombre: 'Física I',                          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3685', codigo: '3685', nombre: 'Integración Tecnológica I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3686', codigo: '3686', nombre: 'Tecnología, Ingeniería y Sociedad', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3687', codigo: '3687', nombre: 'Análisis Matemático II',            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3681'], tipo: 'obligatoria' },
    { id: '3688', codigo: '3688', nombre: 'Álgebra y Geometría Analítica II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3682'], tipo: 'obligatoria' },
    { id: '3689', codigo: '3689', nombre: 'Elementos de Programación',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3690', codigo: '3690', nombre: 'Física II',                         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3684'], tipo: 'obligatoria' },
    { id: '3691', codigo: '3691', nombre: 'Sistemas de Representación',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3692', codigo: '3692', nombre: 'Técnicas Digitales I',              anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3693', codigo: '3693', nombre: 'Análisis Matemático III',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3687'], tipo: 'obligatoria' },
    { id: '3694', codigo: '3694', nombre: 'Física III',                        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3690'], tipo: 'obligatoria' },
    { id: '3695', codigo: '3695', nombre: 'Técnicas Digitales II',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3692', '3689'], tipo: 'obligatoria' },
    { id: '3696', codigo: '3696', nombre: 'Electrónica I',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3688', '3687'], tipo: 'obligatoria' },
    { id: '3697', codigo: '3697', nombre: 'Teoría de los Circuitos I',         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3688', '3687'], tipo: 'obligatoria' },
    { id: '3698', codigo: '3698', nombre: 'Integración Tecnológica II',        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3685'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3699', codigo: '3699', nombre: 'Análisis Matemático IV',            anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3693'], tipo: 'obligatoria' },
    { id: '3700', codigo: '3700', nombre: 'Probabilidad Estadística',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3693', '3688'], tipo: 'obligatoria' },
    { id: '3701', codigo: '3701', nombre: 'Análisis de Señales I',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3693'], tipo: 'obligatoria' },
    { id: '3702', codigo: '3702', nombre: 'Electrónica II',                    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3696'], tipo: 'obligatoria' },
    { id: '3703', codigo: '3703', nombre: 'Teoría de Circuitos II',            anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3697'], tipo: 'obligatoria' },
    { id: '3704', codigo: '3704', nombre: 'Medidas Electrónicas',              anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3697', '3696'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3705', codigo: '3705', nombre: 'Técnicas Digitales III',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3695'], tipo: 'obligatoria' },
    { id: '3706', codigo: '3706', nombre: 'Electromagnetismo',                 anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3699', '3694'], tipo: 'obligatoria' },
    { id: '3707', codigo: '3707', nombre: 'Análisis de Señales II',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3701'], tipo: 'obligatoria' },
    { id: '3708', codigo: '3708', nombre: 'Electrónica Aplicada I',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3702'], tipo: 'obligatoria' },
    { id: '3709', codigo: '3709', nombre: 'Teoría de los Circuitos III',       anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3703'], tipo: 'obligatoria' },
    { id: '3710', codigo: '3710', nombre: 'Integración Tecnológica III',       anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3698', '3704'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3711', codigo: '3711', nombre: 'Cálculo Numérico',                  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3699'], tipo: 'obligatoria' },
    { id: '3712', codigo: '3712', nombre: 'Técnicas Digitales IV',             anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3705'], tipo: 'obligatoria' },
    { id: '3713', codigo: '3713', nombre: 'Medios de Enlace',                  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3706'], tipo: 'obligatoria' },
    { id: '3714', codigo: '3714', nombre: 'Electrónica Aplicada II',           anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3708'], tipo: 'obligatoria' },
    { id: '3715', codigo: '3715', nombre: 'Teoría de Circuitos IV',            anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3709'], tipo: 'obligatoria' },
    { id: '3716', codigo: '3716', nombre: 'Tecnología',                        anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3706', '3710'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3717', codigo: '3717', nombre: 'Física IV',                         anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3699', '3694'], tipo: 'obligatoria' },
    { id: '3718', codigo: '3718', nombre: 'Lenguajes Descriptivos de Hardware', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3712'], tipo: 'obligatoria' },
    { id: '3719', codigo: '3719', nombre: 'Comunicaciones I',                  anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3713'], tipo: 'obligatoria' },
    { id: '3720', codigo: '3720', nombre: 'Control I',                         anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3707', '3711'], tipo: 'obligatoria' },
    { id: '3721', codigo: '3721', nombre: 'Electrónica Aplicada III',          anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3714'], tipo: 'obligatoria' },
    { id: '3722', codigo: '3722', nombre: 'Economía',                          anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3686'], tipo: 'obligatoria' },
    { id: '3723', codigo: '3723', nombre: 'Práctica Profesional Supervisada',  anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3724', codigo: '3724', nombre: 'Responsabilidad Social Universitaria', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3725', codigo: '3725', nombre: 'Sistemas Operativos en Tiempo Real', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3718'], tipo: 'obligatoria' },
    { id: '3726', codigo: '3726', nombre: 'Comunicaciones II',                 anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3719'], tipo: 'obligatoria' },
    { id: '3727', codigo: '3727', nombre: 'Control II',                        anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3720'], tipo: 'obligatoria' },
    { id: '3728', codigo: '3728', nombre: 'Electrónica Industrial',            anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3721', '3720'], tipo: 'obligatoria' },
    { id: '3729', codigo: '3729', nombre: 'Gestión de Proyectos',              anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3710', '3722'], tipo: 'obligatoria' },
    { id: '3730', codigo: '3730', nombre: 'Ejercicios de la Profesión',        anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3722'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3731', codigo: '3731', nombre: 'Procesamiento Digital de Señales',  anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3725'], tipo: 'obligatoria' },
    { id: '3732', codigo: '3732', nombre: 'Comunicaciones III',                anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3726'], tipo: 'obligatoria' },
    { id: '3733', codigo: '3733', nombre: 'Automatización Industrial',         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3727'], tipo: 'obligatoria' },
    { id: '3734', codigo: '3734', nombre: 'Electrónica de Potencia',           anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3728'], tipo: 'obligatoria' },
    { id: '3735', codigo: '3735', nombre: 'Integración Tecnológica IV',        anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3729'], tipo: 'obligatoria' },
    { id: '3736', codigo: '3736', nombre: 'Electiva I',                        anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3737', codigo: '3737', nombre: 'Comunicaciones Avanzadas',          anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3732'], tipo: 'obligatoria' },
    { id: '3738', codigo: '3738', nombre: 'Control Avanzado',                  anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3733'], tipo: 'obligatoria' },
    { id: '3739', codigo: '3739', nombre: 'Proyecto Integrador',               anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3734', '3733', '3732', '3731'], tipo: 'obligatoria' },
    { id: '3740', codigo: '3740', nombre: 'Electiva II',                       anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },
    { id: '3741', codigo: '3741', nombre: 'Electiva III',                      anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },
    { id: '3742', codigo: '3742', nombre: 'Seguridad e Higiene y Organización Industrial', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3730'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
