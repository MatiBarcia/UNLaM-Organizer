import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) para esta carrera NO publica año, cuatrimestre
// ni carga horaria por materia — solo el listado de correlatividades. El año y el
// cuatrimestre de cada una se infirieron a partir de la profundidad de sus cadenas de
// correlativas (cuántos "pasos" de dependencia hay desde una materia sin requisitos),
// y la carga horaria se dejó en 4 hs/semana por defecto al no haber dato oficial.
export const gestionPublica: Carrera = {
  id: 'tec-gestion-publica',
  nombre: 'Tecnicatura Universitaria en Gestión Pública',
  plan: '2010',
  cuatrimestreEstimado: true,
  anioEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2353', codigo: '2353', nombre: 'Elementos de Sociología',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2354', codigo: '2354', nombre: 'Introducción a la Ciencia Política', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2357', codigo: '2357', nombre: 'Elementos de Economía',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2358', codigo: '2358', nombre: 'Elementos de Administración',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2368', codigo: '2368', nombre: 'Derecho Constitucional',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2376', codigo: '2376', nombre: 'Finanzas Públicas',             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2384', codigo: '2384', nombre: 'Teoría Política I',             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2392', codigo: '2392', nombre: 'Estadística Administrativa',    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2366', codigo: '2366', nombre: 'Administración Pública',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2358'], tipo: 'obligatoria' },
    { id: '2375', codigo: '2375', nombre: 'Derecho Administrativo',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2368'], tipo: 'obligatoria' },
    { id: '2385', codigo: '2385', nombre: 'Economía II',                   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2357'], tipo: 'obligatoria' },
    { id: '2386', codigo: '2386', nombre: 'Teoría Política II',            anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2354', '2384'], tipo: 'obligatoria' },
    { id: '2389', codigo: '2389', nombre: 'Psicosociología de las Organizaciones', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2353'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2387', codigo: '2387', nombre: 'Teoría Política Contemporánea', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2368', '2386'], tipo: 'obligatoria' },
    { id: '2388', codigo: '2388', nombre: 'Gestión de Políticas Públicas', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2366', '2385', '2386'], tipo: 'obligatoria' },
    { id: '2391', codigo: '2391', nombre: 'Gobierno Local y Municipios',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2366', '2368', '2376'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2390', codigo: '2390', nombre: 'Taller de Gestión de Políticas Sociales', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2375', '2376', '2388', '2389'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
