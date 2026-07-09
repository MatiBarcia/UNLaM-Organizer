import type { Carrera } from '../types';

// Es un "Ciclo de Complementación Curricular": exige tener aprobada la Tecnicatura
// Universitaria en Animación y Arte Digital (u otra tecnicatura afín) para inscribirse.
// Por eso este plan arranca directamente en materias propias, sin correlativas hacia la
// tecnicatura de base. El plan de estudios oficial (UNLaM) sólo especifica el año de cada
// materia, no el cuatrimestre; se infirió a partir de las correlativas dentro del mismo
// año (y, cuando no hay relación de dependencia entre sí, se balancearon entre 1° y 2°
// cuatrimestre para no amontonar todo en uno solo).
export const licAnimacionDigital: Carrera = {
  id: 'lic-animacion-digital',
  nombre: 'Licenciatura en Animación Digital',
  plan: '2024',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3765', codigo: '3765', nombre: 'Análisis del Arte',           anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3766', codigo: '3766', nombre: 'Ilustración Digital',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3767', codigo: '3767', nombre: 'Expresión Corporal',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3768', codigo: '3768', nombre: 'Animación I',                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3769', codigo: '3769', nombre: 'Estructuras Narrativas',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3771', codigo: '3771', nombre: 'Modelo y Esculpido Orgánico', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3770', codigo: '3770', nombre: 'Animación II',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3767', '3768'], tipo: 'obligatoria' },
    { id: '3772', codigo: '3772', nombre: 'Guion',                       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3769'], tipo: 'obligatoria' },
    { id: '3773', codigo: '3773', nombre: 'Introducción a la Programación', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3774', codigo: '3774', nombre: 'Arte Conceptual',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3765', '3766'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3775', codigo: '3775', nombre: 'Animación III',               anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3770'], tipo: 'obligatoria' },
    { id: '3776', codigo: '3776', nombre: 'Tecnologías Inmersivas',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3773'], tipo: 'obligatoria' },
    { id: '3778', codigo: '3778', nombre: 'Producción',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3770', '3772', '3774'], tipo: 'obligatoria' },
    { id: '3779', codigo: '3779', nombre: 'Proyecto Integrador I',       anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3770', '3772', '3774'], tipo: 'obligatoria' },
    { id: '3777', codigo: '3777', nombre: 'Efectos Especiales y Simulación', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3771'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                   anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3780', codigo: '3780', nombre: 'Proyecto Integrador II',      anio: 2, cuatrimestre: 2, horasSemanales: 12, correlativas: ['3775', '3778', '3779'], tipo: 'obligatoria' },
  ],
};
