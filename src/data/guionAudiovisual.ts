import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const guionAudiovisual: Carrera = {
  id: 'tec-guion-audiovisual',
  nombre: 'Tecnicatura Universitaria en Guion Audiovisual',
  plan: '2021',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3543', codigo: '3543', nombre: 'Guion I (Escritura Audiovisual Cortometraje)', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3544', codigo: '3544', nombre: 'Historia y Teoría de la Literatura Dramática Universal', anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3545', codigo: '3545', nombre: 'Taller de Escritura Creativa', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3547', codigo: '3547', nombre: 'Lenguaje Audiovisual',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3552', codigo: '3552', nombre: 'Taller de Práctica Profesional I', anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3546', codigo: '3546', nombre: 'Introducción a la Investigación', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3549', codigo: '3549', nombre: 'Técnicas de la Actuación',   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3548', codigo: '3548', nombre: 'Guion II (Serie y Telenovela)', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3543'], tipo: 'obligatoria' },
    { id: '3550', codigo: '3550', nombre: 'Narrativas Audiovisuales y Guion del Siglo XXI', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3545', '3547'], tipo: 'obligatoria' },
    { id: '3551', codigo: '3551', nombre: 'Historia del Cine Universal', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3544'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3553', codigo: '3553', nombre: 'Guion III (Humor y No Ficción)', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3543', '3548'], tipo: 'obligatoria' },
    { id: '3554', codigo: '3554', nombre: 'Historia del Cine Argentino', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3544'], tipo: 'obligatoria' },
    { id: '3555', codigo: '3555', nombre: 'Literatura Dramática Argentina', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3544'], tipo: 'obligatoria' },
    { id: '3556', codigo: '3556', nombre: 'Introducción a la Producción Audiovisual', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3557', codigo: '3557', nombre: 'Taller de Práctica Profesional II', anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['3552'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3558', codigo: '3558', nombre: 'Guion IV (Periodístico y Documental)', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3543', '3553', '3548'], tipo: 'obligatoria' },
    { id: '3559', codigo: '3559', nombre: 'Introducción a la Dirección Audiovisual', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3556'], tipo: 'obligatoria' },
    { id: '3560', codigo: '3560', nombre: 'Historia y Evolución de la Televisión Argentina', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3554'], tipo: 'obligatoria' },
    { id: '3561', codigo: '3561', nombre: 'Taller de Práctica Profesional III', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3552', '3557'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                 anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3562', codigo: '3562', nombre: 'Guion V - Largometraje',    anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3543', '3553', '3548', '3558'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3563', codigo: '3563', nombre: 'Taller de Práctica Profesional IV', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3552', '3557', '3561'], tipo: 'obligatoria' },
    { id: '3564', codigo: '3564', nombre: 'Trabajo Final',              anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3559'], tipo: 'obligatoria' },
  ],
};
