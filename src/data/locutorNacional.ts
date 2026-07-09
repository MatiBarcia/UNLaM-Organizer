import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const locutorNacional: Carrera = {
  id: 'tec-locutor-nacional',
  nombre: 'Locutor Nacional',
  plan: '2010',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2860', codigo: '2860', nombre: 'Historia I',                        anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2862', codigo: '2862', nombre: 'Tecnología I',                      anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2865', codigo: '2865', nombre: 'Teoría de la Comunicación',         anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2864', codigo: '2864', nombre: 'Expresión Oral y Escrita',          anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2856', codigo: '2856', nombre: 'Locución I',                        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2857', codigo: '2857', nombre: 'Práctica Integral de Televisión I', anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2859', codigo: '2859', nombre: 'Foniatría I',                       anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2861', codigo: '2861', nombre: 'Música',                            anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2863', codigo: '2863', nombre: 'Informática',                       anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2866', codigo: '2866', nombre: 'Pronunciación del Inglés',          anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2867', codigo: '2867', nombre: 'Pronunciación del Portugués',       anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2868', codigo: '2868', nombre: 'Expresión Corporal',                anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2858', codigo: '2858', nombre: 'Práctica Integral de Radio I',      anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2873', codigo: '2873', nombre: 'Historia II',                       anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2860'], tipo: 'obligatoria' },
    { id: '2875', codigo: '2875', nombre: 'Investigación y Redacción Periodística', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2864'], tipo: 'obligatoria' },
    { id: '2878', codigo: '2878', nombre: 'Interpretación',                    anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2864', '2868'], tipo: 'obligatoria' },
    { id: '2879', codigo: '2879', nombre: 'Taller de Libretos y Guiones',      anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2864'], tipo: 'obligatoria' },
    { id: '2881', codigo: '2881', nombre: 'Tecnología II',                     anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2862'], tipo: 'obligatoria' },
    { id: '2869', codigo: '2869', nombre: 'Locución II',                       anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2856'], tipo: 'obligatoria' },
    { id: '2872', codigo: '2872', nombre: 'Foniatría II',                      anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2859'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2874', codigo: '2874', nombre: 'Principios de Estética e Historia del Arte', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2876', codigo: '2876', nombre: 'Literatura',                        anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2877', codigo: '2877', nombre: 'Pronunciación del Italiano',        anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2880', codigo: '2880', nombre: 'Publicidad',                        anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2870', codigo: '2870', nombre: 'Práctica Integral de Televisión II', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2857'], tipo: 'obligatoria' },
    { id: '2871', codigo: '2871', nombre: 'Práctica Integral de Radio II',     anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2858'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2886', codigo: '2886', nombre: 'Ética Profesional',                 anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2888', codigo: '2888', nombre: 'Pronunciación del Alemán',          anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2889', codigo: '2889', nombre: 'Doblaje',                           anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2869'], tipo: 'obligatoria' },
    { id: '2891', codigo: '2891', nombre: 'Planificación y Gestión de Medios', anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2893', codigo: '2893', nombre: 'Geopolítica',                       anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2882', codigo: '2882', nombre: 'Locución III',                      anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2869'], tipo: 'obligatoria' },
    { id: '2884', codigo: '2884', nombre: 'Práctica Integral de Radio III',    anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2871'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2887', codigo: '2887', nombre: 'Pronunciación del Francés',         anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2890', codigo: '2890', nombre: 'Oratoria',                          anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2869'], tipo: 'obligatoria' },
    { id: '2892', codigo: '2892', nombre: 'Redacción',                         anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2875'], tipo: 'obligatoria' },
    { id: '2894', codigo: '2894', nombre: 'Régimen Legal de la Radiodifusión', anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2883', codigo: '2883', nombre: 'Foniatría III',                     anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2872'], tipo: 'obligatoria' },
    { id: '2885', codigo: '2885', nombre: 'Práctica Integral de Televisión III', anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2870'], tipo: 'obligatoria' },
  ],
};
