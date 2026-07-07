import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) para esta carrera solo publica el año de cada
// materia, no el cuatrimestre. El cuatrimestre se infirió a partir de las correlativas:
// si una materia depende de otra del mismo año, se ubicó en el 2° cuatrimestre.
export const ingenieriaEnergiasRenovables: Carrera = {
  id: 'ing-energias-renovables',
  nombre: 'Ingeniería en Energías Renovables',
  plan: '2024',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4000', codigo: '4000', nombre: 'Análisis Matemático I',                    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4001', codigo: '4001', nombre: 'Química General',                          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4002', codigo: '4002', nombre: 'Álgebra y Geometría Analítica I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4003', codigo: '4003', nombre: 'Introducción a las Energías',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4004', codigo: '4004', nombre: 'Fundamentos de la Transición Energética',  anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4005', codigo: '4005', nombre: 'Sistemas de Representación',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4007', codigo: '4007', nombre: 'Física I',                                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4006', codigo: '4006', nombre: 'Análisis Matemático II',                   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4000'], tipo: 'obligatoria' },
    { id: '4008', codigo: '4008', nombre: 'Química Orgánica e Hidrocarburos',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4001'], tipo: 'obligatoria' },
    { id: '4009', codigo: '4009', nombre: 'Introducción a la Eficiencia Energética',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4004'], tipo: 'obligatoria' },
    { id: '4010', codigo: '4010', nombre: 'Introducción a las Energías Renovables',   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4004'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4011', codigo: '4011', nombre: 'Física II',                                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4007'], tipo: 'obligatoria' },
    { id: '4012', codigo: '4012', nombre: 'Álgebra y Geometría Analítica II',         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4002'], tipo: 'obligatoria' },
    { id: '4013', codigo: '4013', nombre: 'Análisis Matemático III',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4006'], tipo: 'obligatoria' },
    { id: '4014', codigo: '4014', nombre: 'Laboratorio y Proyectos de Energía I',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4009', '4010'], tipo: 'obligatoria' },
    { id: '4015', codigo: '4015', nombre: 'Introducción a la Informática',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4017', codigo: '4017', nombre: 'Termodinámica',                           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4006', '4008'], tipo: 'obligatoria' },
    { id: '4020', codigo: '4020', nombre: 'Economía y Finanzas de la Energía',        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4003'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4016', codigo: '4016', nombre: 'Física III',                               anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4011'], tipo: 'obligatoria' },
    { id: '4018', codigo: '4018', nombre: 'Mecánica de Fluidos',                      anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4011'], tipo: 'obligatoria' },
    { id: '4019', codigo: '4019', nombre: 'Ciencia de los Materiales',                anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4011'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4021', codigo: '4021', nombre: 'Procesos Energéticos I',                   anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4017', '4019'], tipo: 'obligatoria' },
    { id: '4022', codigo: '4022', nombre: 'Introducción a la Electrónica',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4011', '4015'], tipo: 'obligatoria' },
    { id: '4023', codigo: '4023', nombre: 'Petróleo y Gas Natural',                   anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4017', '4019'], tipo: 'obligatoria' },
    { id: '4024', codigo: '4024', nombre: 'Energías Renovables I',                    anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4017', '4018', '4019'], tipo: 'obligatoria' },
    { id: '4025', codigo: '4025', nombre: 'Higiene y Seguridad',                      anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4008'], tipo: 'obligatoria' },
    { id: '4026', codigo: '4026', nombre: 'Marco Normativo de la Energía',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4009', '4010'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4027', codigo: '4027', nombre: 'Ecología y Desarrollo Sustentable',        anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4020', '4025'], tipo: 'obligatoria' },
    { id: '4028', codigo: '4028', nombre: 'Energías Renovables II',                   anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4024'], tipo: 'obligatoria' },
    { id: '4029', codigo: '4029', nombre: 'Vectores Energéticos y Almacenamiento',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4022', '4024'], tipo: 'obligatoria' },
    { id: '4030', codigo: '4030', nombre: 'Laboratorio y Proyectos de Energía II',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4014', '4024'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4031', codigo: '4031', nombre: 'Probabilidad y Estadística',               anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4006'], tipo: 'obligatoria' },
    { id: '4032', codigo: '4032', nombre: 'Instalaciones y Máquinas Eléctricas I',    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4013', '4016', '4021'], tipo: 'obligatoria' },
    { id: '4033', codigo: '4033', nombre: 'Normas y Auditorías Energéticas',          anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4026'], tipo: 'obligatoria' },
    { id: '4034', codigo: '4034', nombre: 'Electrónica Aplicada',                     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4016', '4022', '4030'], tipo: 'obligatoria' },
    { id: '4035', codigo: '4035', nombre: 'Laboratorio y Proyectos de Energía III',   anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4029', '4030'], tipo: 'obligatoria' },
    { id: '4040', codigo: '4040', nombre: 'Emprendimientos e Innovación',             anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4027'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4036', codigo: '4036', nombre: 'Procesos Energéticos II',                  anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4032', '4034'], tipo: 'obligatoria' },
    { id: '4037', codigo: '4037', nombre: 'Energía Hidráulica',                       anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4032'], tipo: 'obligatoria' },
    { id: '4038', codigo: '4038', nombre: 'Energía Nuclear',                          anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4032'], tipo: 'obligatoria' },
    { id: '4039', codigo: '4039', nombre: 'Modelización y Simulación Energética',     anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4035', '4031'], tipo: 'obligatoria' },
    { id: '4042', codigo: '4042', nombre: 'Procesos Energéticos III',                 anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4023', '4036'], tipo: 'obligatoria' },
    { id: '4041', codigo: '4041', nombre: 'Electiva I',                               anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4043', codigo: '4043', nombre: 'Generación, Transporte y Distribución Eléctrica', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4036', '4037', '4038'], tipo: 'obligatoria' },
    { id: '4044', codigo: '4044', nombre: 'Instalaciones y Máquinas Eléctricas II',   anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4032'], tipo: 'obligatoria' },
    { id: '4045', codigo: '4045', nombre: 'Gestión de Proyectos de Energía',          anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4039', '4040', '4042'], tipo: 'obligatoria' },
    { id: '4047', codigo: '4047', nombre: 'Energías Renovables III',                  anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4028', '4036'], tipo: 'obligatoria' },
    { id: '4049', codigo: '4049', nombre: 'Práctica Profesional Supervisada',         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4027', '4030', '4039'], tipo: 'obligatoria' },
    { id: '4051', codigo: '4051', nombre: 'Responsabilidad Social Universitaria',     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4020'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4050', codigo: '4050', nombre: 'Proyecto Final Integrador',                anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4045', '4043', '4040'], tipo: 'obligatoria' },
    { id: '4046', codigo: '4046', nombre: 'Electiva II',                              anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },
    { id: '4048', codigo: '4048', nombre: 'Electiva III',                             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
