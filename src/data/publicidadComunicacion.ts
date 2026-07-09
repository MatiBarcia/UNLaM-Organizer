import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const publicidadComunicacion: Carrera = {
  id: 'tec-publicidad-comunicacion',
  nombre: 'Tecnicatura Universitaria en Publicidad y Comunicación Estratégica',
  plan: '2025',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4300', codigo: '4300', nombre: 'Publicidad I',                     anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4301', codigo: '4301', nombre: 'Marketing I',                      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4302', codigo: '4302', nombre: 'Introducción al Lenguaje Visual',  anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4303', codigo: '4303', nombre: 'Publicidad y Comunicación',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4304', codigo: '4304', nombre: 'Escritura Publicitaria I: Lenguajes y Formatos Tradicionales', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4305', codigo: '4305', nombre: 'Publicidad II',                    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300'], tipo: 'obligatoria' },
    { id: '4306', codigo: '4306', nombre: 'Marketing II',                     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4301'], tipo: 'obligatoria' },
    { id: '4307', codigo: '4307', nombre: 'Introducción a la Fotografía',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4302'], tipo: 'obligatoria' },
    { id: '4308', codigo: '4308', nombre: 'Psicología Social',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4301'], tipo: 'obligatoria' },
    { id: '4309', codigo: '4309', nombre: 'Escritura Publicitaria II: Contenidos para Redes y Plataformas', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4304'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4310', codigo: '4310', nombre: 'Publicidad Digital I: Análisis del Entorno Online', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4300', '4301', '4305', '4306'], tipo: 'obligatoria' },
    { id: '4311', codigo: '4311', nombre: 'Taller de Diseño e Imagen de Marca', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4300', '4301', '4302'], tipo: 'obligatoria' },
    { id: '4312', codigo: '4312', nombre: 'Introducción al Lenguaje Audiovisual', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4302', '4307'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4313', codigo: '4313', nombre: 'Pitch Publicitario: El Arte de Vender Ideas', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4305', '4310'], tipo: 'obligatoria' },
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '4314', codigo: '4314', nombre: 'Publicidad Digital II: Gestión de Campañas Digitales', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4301', '4305', '4306', '4310'], tipo: 'obligatoria' },
    { id: '4315', codigo: '4315', nombre: 'Organización y Administración de la Empresa Publicitaria', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4305', '4310'], tipo: 'obligatoria' },
    { id: '4316', codigo: '4316', nombre: 'Marketing Social y Bien Público: Producción de Campaña Creativa', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4301', '4305', '4306', '4310'], tipo: 'obligatoria' },
    { id: '4317', codigo: '4317', nombre: 'Derecho y Práctica Profesional',   anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4305', '4310'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4318', codigo: '4318', nombre: 'Comunicación Estratégica y Gestión de Crisis', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4300', '4301', '4305', '4306', '4310', '4314'], tipo: 'obligatoria' },
    { id: '4319', codigo: '4319', nombre: 'Análisis de Datos en el Entorno Digital', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4301', '4306', '4310', '4314'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4320', codigo: '4320', nombre: 'Taller Integrador Final: Desarrollo y Presentación de Campaña Publicitaria', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4300', '4301', '4305', '4306', '4310', '4314'], tipo: 'obligatoria' },
  ],
};
