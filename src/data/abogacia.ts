import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const abogacia: Carrera = {
  id: 'abogacia',
  nombre: 'Abogacía',
  plan: '2018',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2302', codigo: '2302', nombre: 'Derecho Político',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2340', codigo: '2340', nombre: 'Introducción al Estudio del Derecho', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '2341', codigo: '2341', nombre: 'Historia y Evolución de las Instituciones del Derecho', anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '2306', codigo: '2306', nombre: 'Filosofía del Derecho',         anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2304', codigo: '2304', nombre: 'Derecho Constitucional I',      anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2302', '2340'], tipo: 'obligatoria' },
    { id: '2309', codigo: '2309', nombre: 'Economía Política',             anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '2342', codigo: '2342', nombre: 'Derecho Civil y Comercial I (Parte General)', anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2340', '2341'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2314', codigo: '2314', nombre: 'Derecho Constitucional II',     anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2304'], tipo: 'obligatoria' },
    { id: '2343', codigo: '2343', nombre: 'Derecho Civil y Comercial II (Obligaciones Civiles y Comerciales)', anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2342'], tipo: 'obligatoria' },
    { id: '2318', codigo: '2318', nombre: 'Derecho Administrativo I',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2304'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2305', codigo: '2305', nombre: 'Sociología',                    anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2306'], tipo: 'obligatoria' },
    { id: '2333', codigo: '2333', nombre: 'Derecho Público: Provincial y Municipal', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2304'], tipo: 'obligatoria' },
    { id: '2307', codigo: '2307', nombre: 'Derecho Penal I',               anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2304'], tipo: 'obligatoria' },
    { id: '2344', codigo: '2344', nombre: 'Derecho Civil y Comercial III (Contratos Civiles y Comerciales)', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2343'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2311', codigo: '2311', nombre: 'Derecho Penal II',              anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2307'], tipo: 'obligatoria' },
    { id: '2345', codigo: '2345', nombre: 'Derecho Civil y Comercial IV (Derechos Reales y Garantías)', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2344'], tipo: 'obligatoria' },
    { id: '2327', codigo: '2327', nombre: 'Derecho Administrativo II',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2318'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2346', codigo: '2346', nombre: 'Derecho Empresario I (Sociedades Comerciales y Seguros)', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2344'], tipo: 'obligatoria' },
    { id: '2316', codigo: '2316', nombre: 'Derecho Procesal I',            anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2314', '2311'], tipo: 'obligatoria' },
    { id: '2347', codigo: '2347', nombre: 'Derecho Civil y Comercial V (Derecho de Familia y Sucesiones)', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2345'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2323', codigo: '2323', nombre: 'Derecho Procesal II',           anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2316', '2347'], tipo: 'obligatoria' },
    { id: '2324', codigo: '2324', nombre: 'Derecho Internacional Público', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2314'], tipo: 'obligatoria' },
    { id: '2348', codigo: '2348', nombre: 'Derecho del Trabajo y la Seguridad Social', anio: 4, cuatrimestre: 1, horasSemanales: 6, correlativas: ['2344'], tipo: 'obligatoria' },
    { id: '2338', codigo: '2338', nombre: 'Taller de Retórica y Oratoria Forense', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2305'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2312', codigo: '2312', nombre: 'Finanzas y Derecho Tributario', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2323', '2309'], tipo: 'obligatoria' },
    { id: '2319', codigo: '2319', nombre: 'Política Económica',            anio: 4, cuatrimestre: 2, horasSemanales: 2, correlativas: ['2309'], tipo: 'obligatoria' },
    { id: '2349', codigo: '2349', nombre: 'Derecho Empresario II (Títulos Valores y Concursos y Quiebras)', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2348', '2346', '2323'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2325', codigo: '2325', nombre: 'Metodología de la Investigación Jurídica', anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: ['2349', '2347', '2306'], tipo: 'obligatoria' },
    { id: '2334', codigo: '2334', nombre: 'Seminario de Resolución Adecuada de Controversias', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2323'], tipo: 'obligatoria' },
    { id: '2335', codigo: '2335', nombre: 'Práctica Profesional I',        anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2323', '2327', '2348'], tipo: 'obligatoria' },
    { id: '2337', codigo: '2337', nombre: 'Seminario de Derecho de los Consumidores', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2346', '2327', '2323'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2328', codigo: '2328', nombre: 'Derecho Ambiental y de los Recursos Naturales', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2314'], tipo: 'obligatoria' },
    { id: '2329', codigo: '2329', nombre: 'Derecho Internacional Privado', anio: 5, cuatrimestre: 2, horasSemanales: 6, correlativas: ['2349', '2323'], tipo: 'obligatoria' },
    { id: '2336', codigo: '2336', nombre: 'Práctica Profesional II',       anio: 5, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2335'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
