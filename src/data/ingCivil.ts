import type { Carrera } from '../types';

export const ingenieriaCivil: Carrera = {
  id: 'ing-civil',
  nombre: 'Ingeniería Civil',
  plan: '2025',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4121', codigo: '4121', nombre: 'Álgebra y Geometría Analítica I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4122', codigo: '4122', nombre: 'Análisis Matemático I',                    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4123', codigo: '4123', nombre: 'Física I',                                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4124', codigo: '4124', nombre: 'Introducción a la Ingeniería Civil',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4125', codigo: '4125', nombre: 'Sistemas Gráficos 2D y 3D',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4126', codigo: '4126', nombre: 'Fundamentos de Química',                   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4127', codigo: '4127', nombre: 'Álgebra y Geometría Analítica II',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4121'], tipo: 'obligatoria' },
    { id: '4128', codigo: '4128', nombre: 'Análisis Matemático II',                   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4122'], tipo: 'obligatoria' },
    { id: '4129', codigo: '4129', nombre: 'Estática de las Estructuras I',            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4121', '4122', '4123'], tipo: 'obligatoria' },
    { id: '4130', codigo: '4130', nombre: 'Geotopografía',                            anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['4123', '4125'], tipo: 'obligatoria' },
    { id: '4131', codigo: '4131', nombre: 'Innovación en Materiales de Construcción', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4124'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4132', codigo: '4132', nombre: 'Análisis Matemático III',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4128'], tipo: 'obligatoria' },
    { id: '4133', codigo: '4133', nombre: 'Evaluación de Proyecto y Tasaciones',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4122', '4124'], tipo: 'obligatoria' },
    { id: '4134', codigo: '4134', nombre: 'Estática de las Estructuras II',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4128', '4129'], tipo: 'obligatoria' },
    { id: '4135', codigo: '4135', nombre: 'Física II',                                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4122', '4123'], tipo: 'obligatoria' },
    { id: '4136', codigo: '4136', nombre: 'Probabilidad y Estadística',               anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4127', '4128'], tipo: 'obligatoria' },
    { id: '4140', codigo: '4140', nombre: 'Tecnología de la Construcción',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4124', '4129', '4130', '4131'], tipo: 'obligatoria' },
    { id: '4141', codigo: '4141', nombre: 'Higiene, Seguridad y Medioambiente',       anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4124', '4126'], tipo: 'obligatoria' },
    { id: '4142', codigo: '4142', nombre: 'Responsabilidad Social Universitaria',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4124'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4137', codigo: '4137', nombre: 'Electricidad y Magnetismo',                anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4135'], tipo: 'obligatoria' },
    { id: '4138', codigo: '4138', nombre: 'Cálculo Numérico',                         anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4127', '4132'], tipo: 'obligatoria' },
    { id: '4139', codigo: '4139', nombre: 'Mecánica de los Materiales I',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4127', '4132', '4134'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4143', codigo: '4143', nombre: 'Hidráulica General',                       anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4128', '4129', '4135'], tipo: 'obligatoria' },
    { id: '4144', codigo: '4144', nombre: 'Instalaciones Termomecánicas',             anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4131', '4135', '4140'], tipo: 'obligatoria' },
    { id: '4145', codigo: '4145', nombre: 'Mecánica de los Materiales II',            anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4139'], tipo: 'obligatoria' },
    { id: '4146', codigo: '4146', nombre: 'Tecnología Avanzada del Hormigón',         anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4131', '4135', '4136', '4139'], tipo: 'obligatoria' },
    { id: '4147', codigo: '4147', nombre: 'Análisis Estructural Básico',              anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4138', '4139'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4148', codigo: '4148', nombre: 'Hidráulica Aplicada',                      anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4143'], tipo: 'obligatoria' },
    { id: '4149', codigo: '4149', nombre: 'Ingeniería Legal',                         anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4141', '4142'], tipo: 'obligatoria' },
    { id: '4150', codigo: '4150', nombre: 'Instalaciones Eléctricas y Acústicas',     anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4137'], tipo: 'obligatoria' },
    { id: '4151', codigo: '4151', nombre: 'Instalaciones Sanitarias y de Gas',        anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4135', '4143'], tipo: 'obligatoria' },
    { id: '4152', codigo: '4152', nombre: 'Análisis Estructural Avanzado',            anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4147'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4153', codigo: '4153', nombre: 'Organización y Conducción de Obras',       anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4121', '4140', '4149'], tipo: 'obligatoria' },
    { id: '4154', codigo: '4154', nombre: 'Introducción a las Estructuras de Hormigón', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4140', '4146', '4152'], tipo: 'obligatoria' },
    { id: '4155', codigo: '4155', nombre: 'Geotecnia',                                anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4140', '4145'], tipo: 'obligatoria' },
    { id: '4156', codigo: '4156', nombre: 'Hidrología Aplicada',                      anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4148'], tipo: 'obligatoria' },
    { id: '4157', codigo: '4157', nombre: 'Construcciones Metálicas y de Madera',     anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4152'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4158', codigo: '4158', nombre: 'Diseño Arquitectónico, Planeamiento y Urbanismo', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4125', '4140', '4150', '4151', '4154'], tipo: 'obligatoria' },
    { id: '4159', codigo: '4159', nombre: 'Estructuras de Hormigón',                  anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4154'], tipo: 'obligatoria' },
    { id: '4160', codigo: '4160', nombre: 'Geotecnia Aplicada',                       anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4155'], tipo: 'obligatoria' },
    { id: '4161', codigo: '4161', nombre: 'Obras Hidráulicas',                        anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4156'], tipo: 'obligatoria' },
    { id: '4162', codigo: '4162', nombre: 'Ingeniería en Infraestructura Vial Básica', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4131', '4146', '4155'], tipo: 'obligatoria' },
    { id: '4163', codigo: '4163', nombre: 'Práctica Profesional Supervisada',         anio: 4, cuatrimestre: 2, horasSemanales: 2, correlativas: ['4149'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4164', codigo: '4164', nombre: 'Análisis de Cargas Especiales en Estructuras', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4152', '4159'], tipo: 'obligatoria' },
    { id: '4165', codigo: '4165', nombre: 'Anteproyecto',                             anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4153', '4157', '4158', '4159', '4161', '4162'], tipo: 'obligatoria' },
    { id: '4166', codigo: '4166', nombre: 'Cimentaciones',                            anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4159', '4160'], tipo: 'obligatoria' },
    { id: '4167', codigo: '4167', nombre: 'Modelización de las Construcciones Metálicas y de Madera', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4157'], tipo: 'obligatoria' },
    { id: '4168', codigo: '4168', nombre: 'Ingeniería Sanitaria',                     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4161'], tipo: 'obligatoria' },
    { id: '4169', codigo: '4169', nombre: 'Obras Viales',                             anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4162'], tipo: 'obligatoria' },
    { id: '4170', codigo: '4170', nombre: 'Optativa I',                               anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },
    { id: '4171', codigo: '4171', nombre: 'Optativa II',                              anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4172', codigo: '4172', nombre: 'Optativa III',                             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'electiva_slot' },
    { id: '4173', codigo: '4173', nombre: 'Análisis de Costos',                       anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4133', '4152', '4157', '4158'], tipo: 'obligatoria' },
    { id: '4174', codigo: '4174', nombre: 'Proyecto Final',                           anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4149', '4164', '4165', '4166', '4167', '4169'], tipo: 'obligatoria' },
    { id: '4175', codigo: '4175', nombre: 'Planificación y Gestión de Sistemas del Transporte', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4169'], tipo: 'obligatoria' },

    // ── Electivas disponibles ──────────────────────────────────────────────
    { id: '4176', codigo: '4176', nombre: 'Estructuras Especiales',                   anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4159', '4160'], tipo: 'electiva_opcion' },
    { id: '4177', codigo: '4177', nombre: 'Tecnologías de las Prefabricaciones Innovadoras', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4159', '4160'], tipo: 'electiva_opcion' },
    { id: '4178', codigo: '4178', nombre: 'Excavaciones y Túneles',                   anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4159', '4160'], tipo: 'electiva_opcion' },
    { id: '4179', codigo: '4179', nombre: 'BIM y Gestión de la Construcción',         anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4158', '4169', '4161'], tipo: 'electiva_opcion' },
    { id: '4180', codigo: '4180', nombre: 'Modelización Hidráulica',                  anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4158', '4169', '4161'], tipo: 'electiva_opcion' },
    { id: '4181', codigo: '4181', nombre: 'Tránsito y Vialidad Urbana',               anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4158', '4169', '4161'], tipo: 'electiva_opcion' },
    { id: '4182', codigo: '4182', nombre: 'Infraestructura Sostenible',               anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4159', '4160', '4167', '4168'], tipo: 'electiva_opcion' },
    { id: '4183', codigo: '4183', nombre: 'Plantas Potabilizadoras y Tratamiento de Afluentes Líquidos', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4159', '4160', '4167', '4168'], tipo: 'electiva_opcion' },
    { id: '4184', codigo: '4184', nombre: 'Puentes',                                  anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4159', '4160', '4167', '4168'], tipo: 'electiva_opcion' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
