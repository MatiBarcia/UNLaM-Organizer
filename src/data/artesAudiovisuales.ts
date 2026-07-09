import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const artesAudiovisuales: Carrera = {
  id: 'tec-artes-audiovisuales',
  nombre: 'Tecnicatura Universitaria en Artes Audiovisuales',
  plan: '2019',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3450', codigo: '3450', nombre: 'Historia del Arte Audiovisual',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3451', codigo: '3451', nombre: 'Producción Audiovisual I',           anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                           anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3455', codigo: '3455', nombre: 'Lenguaje Audiovisual I',             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3456', codigo: '3456', nombre: 'Realización Audiovisual I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3458', codigo: '3458', nombre: 'Iluminación y Cámara I',             anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3453', codigo: '3453', nombre: 'Guion I',                            anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3454', codigo: '3454', nombre: 'Sonido I',                           anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                          anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3459', codigo: '3459', nombre: 'Edición y Montaje I',                anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3460', codigo: '3460', nombre: 'Narrativa Audiovisual I',            anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3461', codigo: '3461', nombre: 'Taller I',                           anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3451'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3462', codigo: '3462', nombre: 'Historia del Arte Audiovisual II',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3450'], tipo: 'obligatoria' },
    { id: '3463', codigo: '3463', nombre: 'Arte Digital y Animación I',         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3464', codigo: '3464', nombre: 'Producción Audiovisual II',          anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3451'], tipo: 'obligatoria' },
    { id: '3465', codigo: '3465', nombre: 'Iluminación y Cámara II',            anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3458'], tipo: 'obligatoria' },
    { id: '3466', codigo: '3466', nombre: 'Lenguaje Audiovisual II',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3455'], tipo: 'obligatoria' },
    { id: '3467', codigo: '3467', nombre: 'Realización Audiovisual II',         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3456'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3468', codigo: '3468', nombre: 'Guion II',                           anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3453'], tipo: 'obligatoria' },
    { id: '3469', codigo: '3469', nombre: 'Sonido II',                          anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3454'], tipo: 'obligatoria' },
    { id: '3470', codigo: '3470', nombre: 'Edición y Montaje II',               anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3459'], tipo: 'obligatoria' },
    { id: '3471', codigo: '3471', nombre: 'Narrativa Audiovisual II',           anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3460'], tipo: 'obligatoria' },
    { id: '3472', codigo: '3472', nombre: 'Taller II',                          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3461'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3473', codigo: '3473', nombre: 'Arte Digital y Animación II',        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3463'], tipo: 'obligatoria' },
    { id: '3475', codigo: '3475', nombre: 'Historia del Cine y la TV Argentina', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3462'], tipo: 'obligatoria' },
    { id: '3476', codigo: '3476', nombre: 'Redes Sociales y Nuevas Plataformas', anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3466', '3467'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3474', codigo: '3474', nombre: 'Narrativa Audiovisual Transmedia',   anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3471'], tipo: 'obligatoria' },
    { id: '3477', codigo: '3477', nombre: 'Taller Integral',                    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3472'], tipo: 'obligatoria' },
  ],
};
