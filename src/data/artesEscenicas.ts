import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const artesEscenicas: Carrera = {
  id: 'tec-artes-escenicas',
  nombre: 'Tecnicatura Universitaria en Artes Escénicas',
  plan: '2019',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3400', codigo: '3400', nombre: 'Historia de las Artes',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3401', codigo: '3401', nombre: 'Introducción a las Artes Escénicas', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3402', codigo: '3402', nombre: 'Actuación I',                       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3403', codigo: '3403', nombre: 'Expresión Corporal I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3404', codigo: '3404', nombre: 'Introducción a la Música',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3405', codigo: '3405', nombre: 'Artes Escénicas Contemporáneas',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3400'], tipo: 'obligatoria' },
    { id: '3406', codigo: '3406', nombre: 'Actuación II',                      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3402'], tipo: 'obligatoria' },
    { id: '3407', codigo: '3407', nombre: 'Expresión Corporal II',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3403'], tipo: 'obligatoria' },
    { id: '3408', codigo: '3408', nombre: 'Taller de Música y Vocalización I', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3404'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3409', codigo: '3409', nombre: 'Gestión de Proyectos',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3410', codigo: '3410', nombre: 'Taller de Música y Vocalización II', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3408'], tipo: 'obligatoria' },
    { id: '3411', codigo: '3411', nombre: 'Expresión Corporal III',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3407'], tipo: 'obligatoria' },
    { id: '3412', codigo: '3412', nombre: 'Actuación III',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3406'], tipo: 'obligatoria' },
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                          anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3414', codigo: '3414', nombre: 'Arte y Cultura Latinoamericana',    anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3405'], tipo: 'obligatoria' },
    { id: '3415', codigo: '3415', nombre: 'Actuación IV',                      anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3412'], tipo: 'obligatoria' },
    { id: '3416', codigo: '3416', nombre: 'Diseño, Realización y Montaje',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3417', codigo: '3417', nombre: 'Práctica Pre Profesional I',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3410', '3411', '3412'], tipo: 'obligatoria' },
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                         anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3419', codigo: '3419', nombre: 'Arte y Políticas Sociales de Inclusión', anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3414'], tipo: 'obligatoria' },
    { id: '3420', codigo: '3420', nombre: 'Producción Artística General',      anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3416'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3421', codigo: '3421', nombre: 'Práctica Pre Profesional II',       anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3417'], tipo: 'obligatoria' },
    { id: '3422', codigo: '3422', nombre: 'Taller de Integración Final',       anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3416', '3417'], tipo: 'obligatoria' },
  ],
};
