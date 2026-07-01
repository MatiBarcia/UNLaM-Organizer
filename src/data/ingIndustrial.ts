import type { Carrera } from '../types';

export const ingenieriaIndustrial: Carrera = {
  id: 'ing-industrial',
  nombre: 'Ingeniería Industrial',
  plan: '2024',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4052', codigo: '4052', nombre: 'Análisis Matemático I',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4053', codigo: '4053', nombre: 'Infraestructura Tecnológica',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4054', codigo: '4054', nombre: 'Álgebra y Geometría Analítica I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4055', codigo: '4055', nombre: 'Física I',                             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4056', codigo: '4056', nombre: 'Sistemas de Representación',           anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4057', codigo: '4057', nombre: 'Introducción al Ejercicio Profesional', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4058', codigo: '4058', nombre: 'Elementos de Economía',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4052'], tipo: 'obligatoria' },
    { id: '4059', codigo: '4059', nombre: 'Análisis Matemático II',               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4052'], tipo: 'obligatoria' },
    { id: '4060', codigo: '4060', nombre: 'Física II',                            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4055'], tipo: 'obligatoria' },
    { id: '4061', codigo: '4061', nombre: 'Fundamentos de Química',               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4062', codigo: '4062', nombre: 'Álgebra y Geometría Analítica II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4054'], tipo: 'obligatoria' },
    { id: '4063', codigo: '4063', nombre: 'Organización Industrial I',            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4057'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4064', codigo: '4064', nombre: 'Costos Industriales',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4058', '4063'], tipo: 'obligatoria' },
    { id: '4065', codigo: '4065', nombre: 'Análisis Matemático III',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4059'], tipo: 'obligatoria' },
    { id: '4066', codigo: '4066', nombre: 'Ética Profesional y Legislación',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4057'], tipo: 'obligatoria' },
    { id: '4067', codigo: '4067', nombre: 'Elementos de Programación',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4053'], tipo: 'obligatoria' },
    { id: '4068', codigo: '4068', nombre: 'Física III',                           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4060'], tipo: 'obligatoria' },
    { id: '4069', codigo: '4069', nombre: 'Materiales Industriales',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4059', '4060', '4061'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4070', codigo: '4070', nombre: 'Tecnología de Materiales y Procesos I', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4069'], tipo: 'obligatoria' },
    { id: '4071', codigo: '4071', nombre: 'Higiene, Seguridad e Ingeniería Ambiental', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4063', '4066'], tipo: 'obligatoria' },
    { id: '4072', codigo: '4072', nombre: 'Probabilidad y Estadística',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4062', '4065'], tipo: 'obligatoria' },
    { id: '4073', codigo: '4073', nombre: 'Química Industrial',                   anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4061'], tipo: 'obligatoria' },
    { id: '4074', codigo: '4074', nombre: 'Gestión de Operaciones I',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4064'], tipo: 'obligatoria' },
    { id: '4075', codigo: '4075', nombre: 'Electrotecnia y Máquinas Eléctricas',  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4056', '4068'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4076', codigo: '4076', nombre: 'Termodinámica',                        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4060', '4065', '4073'], tipo: 'obligatoria' },
    { id: '4077', codigo: '4077', nombre: 'Organización Industrial II',           anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4063', '4074'], tipo: 'obligatoria' },
    { id: '4078', codigo: '4078', nombre: 'Tecnología de Materiales y Procesos II', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4070'], tipo: 'obligatoria' },
    { id: '4079', codigo: '4079', nombre: 'Gestión de la Innovación y Emprendedorismo', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4069', '4074'], tipo: 'obligatoria' },
    { id: '4080', codigo: '4080', nombre: 'Estadística Aplicada',                 anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4072'], tipo: 'obligatoria' },
    { id: '4081', codigo: '4081', nombre: 'Gestión de Operaciones II',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4074'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4082', codigo: '4082', nombre: 'Espacio de Integración Tecnológica',   anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4056', '4070', '4071', '4075', '4081'], tipo: 'obligatoria' },
    { id: '4083', codigo: '4083', nombre: 'Máquinas Térmicas',                    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4060', '4076'], tipo: 'obligatoria' },
    { id: '4084', codigo: '4084', nombre: 'Gestión de la Calidad',                anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4080', '4081'], tipo: 'obligatoria' },
    { id: '4085', codigo: '4085', nombre: 'Mecánica de los Fluidos',              anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4076'], tipo: 'obligatoria' },
    { id: '4086', codigo: '4086', nombre: 'Investigación Operativa',              anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4074', '4080'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4087', codigo: '4087', nombre: 'Procesos Industriales I',              anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4073', '4076', '4082'], tipo: 'obligatoria' },
    { id: '4088', codigo: '4088', nombre: 'Gestión Comercial',                    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4058', '4077'], tipo: 'obligatoria' },
    { id: '4089', codigo: '4089', nombre: 'Gestión Logística',                    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4081', '4086'], tipo: 'obligatoria' },
    { id: '4090', codigo: '4090', nombre: 'Finanzas de la Empresa',               anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4058', '4064', '4077', '4081'], tipo: 'obligatoria' },
    { id: '4091', codigo: '4091', nombre: 'Sistemas Informáticos de Gestión',     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4067', '4077'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4092', codigo: '4092', nombre: 'Gestión y Evaluación de Proyectos',    anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4082', '4086', '4090'], tipo: 'obligatoria' },
    { id: '4093', codigo: '4093', nombre: 'Elementos de Máquinas y Mecanismos',   anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4056', '4078', '4083'], tipo: 'obligatoria' },
    { id: '4094', codigo: '4094', nombre: 'Ecología Industrial y Desarrollo Sustentable', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4066', '4087'], tipo: 'obligatoria' },
    { id: '4095', codigo: '4095', nombre: 'Procesos Industriales II',             anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4087'], tipo: 'obligatoria' },
    { id: '4096', codigo: '4096', nombre: 'Industrias de Servicios',              anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4084', '4091'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4097', codigo: '4097', nombre: 'Responsabilidad Social Universitaria', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4082'], tipo: 'obligatoria' },
    { id: '4098', codigo: '4098', nombre: 'Proyecto Final Integrador',            anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4081', '4082', '4088', '4092', '4095'], tipo: 'obligatoria', esAnual: true },
    { id: '4099', codigo: '4099', nombre: 'Automatización Industrial',            anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4067', '4075', '4093'], tipo: 'obligatoria' },
    { id: '4106', codigo: '4106', nombre: 'Electiva I - Sistemas de Gestión y Mejora Continua', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4084', '4091'], tipo: 'electiva_slot' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4101', codigo: '4101', nombre: 'Instalaciones Industriales',           anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4083', '4085', '4099'], tipo: 'obligatoria' },
    { id: '4104', codigo: '4104', nombre: 'Gestión Industrial',                   anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4088', '4089', '4092', '4094', '4095'], tipo: 'obligatoria' },
    { id: '4105', codigo: '4105', nombre: 'Práctica Profesional Supervisada',     anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4082'], tipo: 'obligatoria' },
    { id: '4107', codigo: '4107', nombre: 'Electiva II - Manejo y Distribución de Materiales', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4089'], tipo: 'electiva_slot' },
    { id: '4108', codigo: '4108', nombre: 'Electiva III - Inteligencia Industrial', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4079', '4080', '4091'], tipo: 'electiva_slot' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
