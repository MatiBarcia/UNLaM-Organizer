import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const produccionMusical: Carrera = {
  id: 'tec-produccion-musical',
  nombre: 'Tecnicatura Universitaria en Producción Musical',
  plan: '2025',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4274', codigo: '4274', nombre: 'Metodología del Estudio',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4275', codigo: '4275', nombre: 'Grabación y Edición Digital',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4276', codigo: '4276', nombre: 'Lenguaje Musical y Armonía',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4277', codigo: '4277', nombre: 'Taller de Electrónica I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4278', codigo: '4278', nombre: 'Comportamiento de los Fenómenos Sonoros', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4279', codigo: '4279', nombre: 'Técnicas de Operación I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4280', codigo: '4280', nombre: 'Taller de Prácticas de Grabación I', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4274', '4275'], tipo: 'obligatoria' },
    { id: '4281', codigo: '4281', nombre: 'Apreciación Musical y Estructuras Sonoras', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4274', '4276'], tipo: 'obligatoria' },
    { id: '4282', codigo: '4282', nombre: 'Taller de Electrónica II',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4274', '4277'], tipo: 'obligatoria' },
    { id: '4283', codigo: '4283', nombre: 'Diseño de Ámbitos Sonoros I',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4274', '4278'], tipo: 'obligatoria' },
    { id: '4284', codigo: '4284', nombre: 'Técnicas de Operación II',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4274', '4279'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                       anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '4285', codigo: '4285', nombre: 'Técnica de Mezcla',               anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4280', '4283'], tipo: 'obligatoria' },
    { id: '4286', codigo: '4286', nombre: 'Electrónica Aplicada al Audio I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4282', '4283'], tipo: 'obligatoria' },
    { id: '4287', codigo: '4287', nombre: 'Instrumental de Medición y Diagnóstico', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4282'], tipo: 'obligatoria' },
    { id: '4288', codigo: '4288', nombre: 'Diseño de Ámbitos Sonoros II',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4283', '4284'], tipo: 'obligatoria' },
    { id: '4289', codigo: '4289', nombre: 'Sistemas de Sonido I',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4283', '4284'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4290', codigo: '4290', nombre: 'Representación Gráfica de Sistemas y Dispositivos', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3457'], tipo: 'obligatoria' },
    { id: '4291', codigo: '4291', nombre: 'Taller de Prácticas de Grabación II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4285', '4288'], tipo: 'obligatoria' },
    { id: '4292', codigo: '4292', nombre: 'Electroacústica',                 anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4286', '4287'], tipo: 'obligatoria' },
    { id: '4293', codigo: '4293', nombre: 'Psicoacústica y Experimentación Sonora', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4281', '4288'], tipo: 'obligatoria' },
    { id: '4294', codigo: '4294', nombre: 'Sistemas de Sonido II',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4288', '4289'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4295', codigo: '4295', nombre: 'Mezcla Avanzada y Mastering',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4291', '4292'], tipo: 'obligatoria' },
    { id: '4296', codigo: '4296', nombre: 'Gestión Integral de Proyectos Musicales', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4290'], tipo: 'obligatoria' },
    { id: '4297', codigo: '4297', nombre: 'Electrónica Aplicada al Audio II', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4292', '4294'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4298', codigo: '4298', nombre: 'Streaming y Video',               anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4291', '4294'], tipo: 'obligatoria' },
    { id: '4299', codigo: '4299', nombre: 'Proyecto Final',                  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4293', '4294'], tipo: 'obligatoria' },
  ],
};
