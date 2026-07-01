import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const enfermeria: Carrera = {
  id: 'lic-enfermeria',
  nombre: 'Licenciatura en Enfermería',
  plan: '2016',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '56', codigo: '56', nombre: 'Enfermería General',                anio: 1, cuatrimestre: 1, horasSemanales: 11, correlativas: [],           tipo: 'obligatoria' },
    { id: '68', codigo: '68', nombre: 'Ciencias Biológicas I',              anio: 1, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },
    { id: '78', codigo: '78', nombre: 'Epidemiología',                     anio: 1, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },
    { id: '74', codigo: '74', nombre: 'Sociología I',                      anio: 1, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '79', codigo: '79', nombre: 'Comunicación como Herramienta Profesional', anio: 1, cuatrimestre: 2, horasSemanales: 5, correlativas: [],     tipo: 'obligatoria' },
    { id: '64', codigo: '64', nombre: 'Enfermería Comunitaria I',          anio: 1, cuatrimestre: 2, horasSemanales: 9,  correlativas: ['56'],        tipo: 'obligatoria' },
    { id: '69', codigo: '69', nombre: 'Ciencias Biológicas II',            anio: 1, cuatrimestre: 2, horasSemanales: 5,  correlativas: ['68'],        tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '57', codigo: '57', nombre: 'Enfermería en la Atención del Adulto I', anio: 2, cuatrimestre: 1, horasSemanales: 11, correlativas: ['56', '69'], tipo: 'obligatoria' },
    { id: '70', codigo: '70', nombre: 'Microbiología',                     anio: 2, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },
    { id: '72', codigo: '72', nombre: 'Farmacología',                      anio: 2, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },
    { id: '73', codigo: '73', nombre: 'Antropología',                      anio: 2, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '71', codigo: '71', nombre: 'Nutrición Aplicada a la Enfermería', anio: 2, cuatrimestre: 2, horasSemanales: 5,  correlativas: ['68'],       tipo: 'obligatoria' },
    { id: '58', codigo: '58', nombre: 'Enfermería en la Atención del Adulto II', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['57'],   tipo: 'obligatoria' },
    { id: '59', codigo: '59', nombre: 'Enfermería en Salud Mental',        anio: 2, cuatrimestre: 2, horasSemanales: 9,  correlativas: [],           tipo: 'obligatoria' },
    { id: '75', codigo: '75', nombre: 'Psicología',                        anio: 2, cuatrimestre: 2, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '60', codigo: '60', nombre: 'Enfermería en Atención y Cuidados Obstétricos', anio: 3, cuatrimestre: 1, horasSemanales: 11, correlativas: ['56', '69'], tipo: 'obligatoria' },
    { id: '62', codigo: '62', nombre: 'Enfermería en la Atención del Niño y el Adolescente I', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['56', '69', '70', '72'], tipo: 'obligatoria' },
    { id: '76', codigo: '76', nombre: 'Filosofía',                         anio: 3, cuatrimestre: 1, horasSemanales: 5,  correlativas: [],           tipo: 'obligatoria' },
    { id: '77', codigo: '77', nombre: 'Marcos Éticos y Legales del Ejercicio de Enfermería', anio: 3, cuatrimestre: 1, horasSemanales: 5, correlativas: ['56'], tipo: 'obligatoria' },
    { id: '80', codigo: '80', nombre: 'Electiva I',                        anio: 3, cuatrimestre: 1, horasSemanales: 0,  correlativas: [],           tipo: 'electiva_slot' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '158', codigo: '158', nombre: 'Electiva II',                     anio: 3, cuatrimestre: 2, horasSemanales: 0,  correlativas: [],           tipo: 'electiva_slot' },
    { id: '61', codigo: '61', nombre: 'Enfermería en la Atención del Recién Nacido', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['60'], tipo: 'obligatoria' },
    { id: '63', codigo: '63', nombre: 'Enfermería en la Atención del Niño y el Adolescente II', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['62'], tipo: 'obligatoria' },
    { id: '65', codigo: '65', nombre: 'Investigación en Enfermería I',     anio: 3, cuatrimestre: 2, horasSemanales: 4,  correlativas: ['62'],       tipo: 'obligatoria' },
    { id: '66', codigo: '66', nombre: 'Introducción a la Administración de Servicios de Enfermería Comunitaria y Hospitalaria', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['58', '64'], tipo: 'obligatoria' },
    { id: '67', codigo: '67', nombre: 'Práctica Integrada I',              anio: 3, cuatrimestre: 2, horasSemanales: 18, correlativas: ['56', '68', '69', '80', '58', '59', '60', '62', '64', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '57'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '81', codigo: '81', nombre: 'Enfermería Comunitaria II',         anio: 4, cuatrimestre: 1, horasSemanales: 5,  correlativas: ['64'],       tipo: 'obligatoria' },
    { id: '83', codigo: '83', nombre: 'Enfermería en la Atención al Paciente Crítico I', anio: 4, cuatrimestre: 1, horasSemanales: 11, correlativas: ['67'], tipo: 'obligatoria' },
    { id: '85', codigo: '85', nombre: 'Investigación en la Enfermería II', anio: 4, cuatrimestre: 1, horasSemanales: 5,  correlativas: ['65'],       tipo: 'obligatoria' },
    { id: '97', codigo: '97', nombre: 'Filosofía y Ciencia Enfermera',     anio: 4, cuatrimestre: 1, horasSemanales: 5,  correlativas: ['56', '76'], tipo: 'obligatoria' },
    { id: '95', codigo: '95', nombre: 'Sociología II',                     anio: 4, cuatrimestre: 1, horasSemanales: 6,  correlativas: ['74'],       tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '82', codigo: '82', nombre: 'Enfermería Comunitaria III',        anio: 4, cuatrimestre: 2, horasSemanales: 5,  correlativas: ['81'],       tipo: 'obligatoria' },
    { id: '84', codigo: '84', nombre: 'Enfermería en la Atención del Paciente Crítico II', anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['83'], tipo: 'obligatoria' },
    { id: '86', codigo: '86', nombre: 'Investigación en la Enfermería III', anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['85'],       tipo: 'obligatoria' },
    { id: '92', codigo: '92', nombre: 'Seminario Optativo I',              anio: 4, cuatrimestre: 2, horasSemanales: 0,  correlativas: [],           tipo: 'electiva_slot' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '87', codigo: '87', nombre: 'Taller de Investigación en Enfermería I', anio: 5, cuatrimestre: 1, horasSemanales: 5, correlativas: ['86'], tipo: 'obligatoria' },
    { id: '90', codigo: '90', nombre: 'Gestión de los Servicios de Enfermería Hospitalarios y Comunitario I', anio: 5, cuatrimestre: 1, horasSemanales: 9, correlativas: ['66'], tipo: 'obligatoria' },
    { id: '93', codigo: '93', nombre: 'Seminario Optativo II',             anio: 5, cuatrimestre: 1, horasSemanales: 0,  correlativas: [],           tipo: 'electiva_slot' },
    { id: '96', codigo: '96', nombre: 'Deontología en Enfermería',         anio: 5, cuatrimestre: 1, horasSemanales: 6,  correlativas: ['77'],       tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '88', codigo: '88', nombre: 'Taller de Investigación en Enfermería II', anio: 5, cuatrimestre: 2, horasSemanales: 9, correlativas: ['87'], tipo: 'obligatoria' },
    { id: '89', codigo: '89', nombre: 'Educación en Enfermería',           anio: 5, cuatrimestre: 2, horasSemanales: 4,  correlativas: ['84'],       tipo: 'obligatoria' },
    { id: '91', codigo: '91', nombre: 'Gestión de los Servicios de Enfermería Hospitalarios y Comunitario II', anio: 5, cuatrimestre: 2, horasSemanales: 5, correlativas: ['90'], tipo: 'obligatoria' },
    { id: '94', codigo: '94', nombre: 'Práctica Integrada II',             anio: 5, cuatrimestre: 2, horasSemanales: 18, correlativas: ['81', '83', '85', '86', '61', '63', '65', '66', '67', '158', '82', '84', '87', '90', '95', '96', '97', '92'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'],       tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'],       tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'],       tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'],      tipo: 'transversal' },
  ],
};
