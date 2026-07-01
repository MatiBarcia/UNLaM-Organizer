import type { Carrera } from '../types';

export const ingenieriaInformatica: Carrera = {
  id: 'ing-informatica',
  nombre: 'Ingeniería en Informática',
  plan: '2026',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3621', codigo: '3621', nombre: 'Matemática Discreta',                      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '3622', codigo: '3622', nombre: 'Análisis Matemático I',                    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '3623', codigo: '3623', nombre: 'Programación Inicial',                     anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '3624', codigo: '3624', nombre: 'Introducción a los Sistemas de Información', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                            tipo: 'obligatoria' },
    { id: '3625', codigo: '3625', nombre: 'Sistemas de Numeración',                   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '3626', codigo: '3626', nombre: 'Principios de Calidad de Software',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3627', codigo: '3627', nombre: 'Álgebra y Geometría Analítica I',          anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '3628', codigo: '3628', nombre: 'Física I',                                 anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3622'],                                        tipo: 'obligatoria' },
    { id: '3629', codigo: '3629', nombre: 'Programación Estructurada Básica',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3623'],                                        tipo: 'obligatoria' },
    { id: '3630', codigo: '3630', nombre: 'Introducción a la Gestión de Requisitos',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3624'],                                        tipo: 'obligatoria' },
    { id: '3631', codigo: '3631', nombre: 'Fundamentos de Sistemas Embebidos',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3625'],                                        tipo: 'obligatoria' },
    { id: '3632', codigo: '3632', nombre: 'Introducción a Proyectos Informáticos',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3633', codigo: '3633', nombre: 'Análisis Matemático II',                   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3622'],                                        tipo: 'obligatoria' },
    { id: '3634', codigo: '3634', nombre: 'Física II',                                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3628'],                                        tipo: 'obligatoria' },
    { id: '3635', codigo: '3635', nombre: 'Tópicos de Programación',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3629', '3621'],                                tipo: 'obligatoria' },
    { id: '3636', codigo: '3636', nombre: 'Bases de Datos',                           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3629', '3621'],                                tipo: 'obligatoria' },
    { id: '3637', codigo: '3637', nombre: 'Análisis de Sistemas',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3630'],                                        tipo: 'obligatoria' },
    { id: '3638', codigo: '3638', nombre: 'Arquitectura de Computadoras',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3631'],                                        tipo: 'obligatoria' },
    { id: '3676', codigo: '3676', nombre: 'Responsabilidad Social Universitaria',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3626'],                                        tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3639', codigo: '3639', nombre: 'Análisis Matemático III',                  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3633'],                                        tipo: 'obligatoria' },
    { id: '3640', codigo: '3640', nombre: 'Algoritmos y Estructuras de Datos',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3635'],                                        tipo: 'obligatoria' },
    { id: '3641', codigo: '3641', nombre: 'Bases de Datos Aplicada',                  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3635', '3636'],                                tipo: 'obligatoria' },
    { id: '3642', codigo: '3642', nombre: 'Principios de Diseño de Sistemas',         anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3637', '3626'],                                tipo: 'obligatoria' },
    { id: '3643', codigo: '3643', nombre: 'Redes de Computadoras',                    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3638'],                                        tipo: 'obligatoria' },
    { id: '3644', codigo: '3644', nombre: 'Gestión de las Organizaciones',            anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3632'],                                        tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3645', codigo: '3645', nombre: 'Álgebra y Geometría Analítica II',         anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3627'],                                        tipo: 'obligatoria' },
    { id: '3646', codigo: '3646', nombre: 'Paradigmas de Programación',               anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3640', '3633'],                                tipo: 'obligatoria' },
    { id: '3647', codigo: '3647', nombre: 'Requisitos Avanzados',                     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3642'],                                        tipo: 'obligatoria' },
    { id: '3648', codigo: '3648', nombre: 'Diseño de Software',                       anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3635', '3636', '3642'],                        tipo: 'obligatoria' },
    { id: '3649', codigo: '3649', nombre: 'Sistemas Operativos',                      anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3629', '3638'],                                tipo: 'obligatoria' },
    { id: '3650', codigo: '3650', nombre: 'Seguridad de la Información',              anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3643', '3638', '3635'],                        tipo: 'obligatoria' },
    { id: '3675', codigo: '3675', nombre: 'Práctica Profesional Supervisada',         anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3636', '3640', '3642'],                        tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3651', codigo: '3651', nombre: 'Probabilidad y Estadística',               anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3645', '3639', '3621'],                        tipo: 'obligatoria' },
    { id: '3652', codigo: '3652', nombre: 'Programación Avanzada',                    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3641', '3646'],                                tipo: 'obligatoria' },
    { id: '3653', codigo: '3653', nombre: 'Arquitecturas de Sistemas Software',       anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3648'],                                        tipo: 'obligatoria' },
    { id: '3654', codigo: '3654', nombre: 'Virtualización de Hardware',               anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3643', '3649'],                                tipo: 'obligatoria' },
    { id: '3655', codigo: '3655', nombre: 'Auditoría y Legislación',                  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3650'],                                        tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3656', codigo: '3656', nombre: 'Estadística Aplicada',                     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3651'],                                        tipo: 'obligatoria' },
    { id: '3657', codigo: '3657', nombre: 'Autómatas y Gramática',                    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3646'],                                        tipo: 'obligatoria' },
    { id: '3658', codigo: '3658', nombre: 'Programación Concurrente',                 anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3646', '3649'],                                tipo: 'obligatoria' },
    { id: '3659', codigo: '3659', nombre: 'Gestión Aplicada al Desarrollo de Software I', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3644', '3647', '3648'],                   tipo: 'obligatoria' },
    { id: '3660', codigo: '3660', nombre: 'Sistemas Operativos Avanzados',            anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3634', '3654'],                                tipo: 'obligatoria' },
    { id: '3661', codigo: '3661', nombre: 'Gestión de Proyectos',                     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3651', '3650', '3644'],                        tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3662', codigo: '3662', nombre: 'Matemática Aplicada',                      anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3651'],                                        tipo: 'obligatoria' },
    { id: '3663', codigo: '3663', nombre: 'Lenguajes y Compiladores',                 anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3657'],                                        tipo: 'obligatoria' },
    { id: '3664', codigo: '3664', nombre: 'Inteligencia Artificial',                  anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3651', '3646'],                                tipo: 'obligatoria' },
    { id: '3665', codigo: '3665', nombre: 'Gestión Aplicada al Desarrollo de Software II', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3653', '3659'],                          tipo: 'obligatoria' },
    { id: '3666', codigo: '3666', nombre: 'Seguridad Aplicada y Forensia',            anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3655', '3652', '3649'],                        tipo: 'obligatoria' },
    { id: '3667', codigo: '3667', nombre: 'Gestión de la Calidad en Procesos de Sistemas', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3642', '3661'],                          tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3668', codigo: '3668', nombre: 'Inteligencia Artificial Aplicada',         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3664', '3656'],                                tipo: 'obligatoria' },
    { id: '3669', codigo: '3669', nombre: 'Innovación y Emprendedorismo',             anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3661'],                                        tipo: 'obligatoria' },
    { id: '3670', codigo: '3670', nombre: 'Ciencia de Datos',                         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3664', '3656'],                                tipo: 'obligatoria' },
    { id: '3671', codigo: '3671', nombre: 'Proyecto Final de Carrera',                anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3656', '3659', '3660', '3667'],               tipo: 'obligatoria', esAnual: true },
    { id: '3672', codigo: '3672', nombre: 'Electiva I',                               anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_slot' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3673', codigo: '3673', nombre: 'Electiva II',                              anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_slot' },
    { id: '3674', codigo: '3674', nombre: 'Electiva III',                             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_slot' },

    // ── Cursos Electivos Disponibles ───────────────────────────────────────
    { id: '3677', codigo: '3677', nombre: 'Lenguaje Orientado a Negocios',            anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_opcion' },
    { id: '3678', codigo: '3678', nombre: 'Tecnologías en Seguridad',                 anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_opcion' },
    { id: '3599', codigo: '3599', nombre: 'Redes Móviles e IoT',                      anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_opcion' },
    { id: '3679', codigo: '3679', nombre: 'Visión Artificial',                        anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3652', '3653', '3661'],                        tipo: 'electiva_opcion' },

    // ── Conocimientos Transversales ────────────────────────────────────────
    { id: '901',  codigo: '901',  nombre: 'Inglés Transversal Nivel I',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'transversal' },
    { id: '902',  codigo: '902',  nombre: 'Inglés Transversal Nivel II',              anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'],                                         tipo: 'transversal' },
    { id: '903',  codigo: '903',  nombre: 'Inglés Transversal Nivel III',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'],                                         tipo: 'transversal' },
    { id: '904',  codigo: '904',  nombre: 'Inglés Transversal Nivel IV',              anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'],                                         tipo: 'transversal' },
    { id: '911',  codigo: '911',  nombre: 'Computación Transversal Nivel I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'transversal' },
    { id: '912',  codigo: '912',  nombre: 'Computación Transversal Nivel II',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'],                                         tipo: 'transversal' },
  ],
};
