import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) para esta carrera NO publica año, cuatrimestre
// ni carga horaria por materia — solo el listado de correlatividades. El año y el
// cuatrimestre de cada una se infirieron a partir de la profundidad de sus cadenas de
// correlativas (cuántos "pasos" de dependencia hay desde una materia sin requisitos),
// y la carga horaria se dejó en 4 hs/semana por defecto al no haber dato oficial.
export const cienciaPolitica: Carrera = {
  id: 'lic-ciencia-politica',
  nombre: 'Licenciatura en Ciencia Política',
  plan: '2005',
  cuatrimestreEstimado: true,
  anioEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2351', codigo: '2351', nombre: 'Elementos de Filosofía',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2352', codigo: '2352', nombre: 'Procesos Sociohistóricos Mundiales', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2353', codigo: '2353', nombre: 'Elementos de Sociología',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2354', codigo: '2354', nombre: 'Introducción a la Ciencia Política', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2357', codigo: '2357', nombre: 'Elementos de Economía',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2358', codigo: '2358', nombre: 'Elementos de Administración',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2368', codigo: '2368', nombre: 'Derecho Constitucional',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2376', codigo: '2376', nombre: 'Finanzas Públicas',             anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2355', codigo: '2355', nombre: 'Taller de Integración',         anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2353', '2354'], tipo: 'obligatoria' },
    { id: '2356', codigo: '2356', nombre: 'Procesos Sociohistóricos Argentinos', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2352'], tipo: 'obligatoria' },
    { id: '2360', codigo: '2360', nombre: 'Teoría Sociológica I',          anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2353', '2354'], tipo: 'obligatoria' },
    { id: '2361', codigo: '2361', nombre: 'Economía I',                    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2357'], tipo: 'obligatoria' },
    { id: '2362', codigo: '2362', nombre: 'Teoría Política I',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2354'], tipo: 'obligatoria' },
    { id: '2366', codigo: '2366', nombre: 'Administración Pública',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2358'], tipo: 'obligatoria' },
    { id: '2375', codigo: '2375', nombre: 'Derecho Administrativo',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2368'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2359', codigo: '2359', nombre: 'Metodología de la Investigación I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2355'], tipo: 'obligatoria' },
    { id: '2363', codigo: '2363', nombre: 'Psicosociología de las Organizaciones', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2360'], tipo: 'obligatoria' },
    { id: '2364', codigo: '2364', nombre: 'Economía II',                   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2361'], tipo: 'obligatoria' },
    { id: '2365', codigo: '2365', nombre: 'Teoría Política II',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2360', '2362'], tipo: 'obligatoria' },
    { id: '2379', codigo: '2379', nombre: 'Historia Política Americana',   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2362'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2367', codigo: '2367', nombre: 'Metodología de la Investigación II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2359'], tipo: 'obligatoria' },
    { id: '2369', codigo: '2369', nombre: 'Demografía Social',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2365'], tipo: 'obligatoria' },
    { id: '2370', codigo: '2370', nombre: 'Política y Comunicación',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2365'], tipo: 'obligatoria' },
    { id: '2374', codigo: '2374', nombre: 'Gestión de Políticas Públicas', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2364', '2365', '2366'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2371', codigo: '2371', nombre: 'Economía Política Argentina',   anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2369'], tipo: 'obligatoria' },
    { id: '2372', codigo: '2372', nombre: 'Sistemas Políticos Comparados', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2369'], tipo: 'obligatoria' },
    { id: '2373', codigo: '2373', nombre: 'Teoría de la Política Contemporánea', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2367', '2368', '2370'], tipo: 'obligatoria' },
    { id: '2380', codigo: '2380', nombre: 'Taller de Gestión de Políticas Sociales', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2363', '2374', '2375', '2376'], tipo: 'obligatoria' },
    { id: '2381', codigo: '2381', nombre: 'Taller de Gestión de Políticas de Producción', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2363', '2374', '2375', '2376'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2377', codigo: '2377', nombre: 'Relaciones Internacionales',    anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2373'], tipo: 'obligatoria' },
    { id: '2378', codigo: '2378', nombre: 'Seminario de Tópicos de Avanzada', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2371', '2372', '2373'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
