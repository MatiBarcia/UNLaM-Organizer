import type { Carrera } from '../types';

export const ingenieriaMecanica: Carrera = {
  id: 'ing-mecanica',
  nombre: 'Ingeniería Mecánica',
  plan: '2015',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1023', codigo: '1023', nombre: 'Análisis Matemático I',          anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '1024', codigo: '1024', nombre: 'Elementos de Programación',      anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '1027', codigo: '1027', nombre: 'Álgebra y Geometría Analítica I', anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1026', codigo: '1026', nombre: 'Tecnología, Ingeniería y Sociedad', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1025', codigo: '1025', nombre: 'Sistemas de Representación',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1028', codigo: '1028', nombre: 'Matemática Discreta',             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1029', codigo: '1029', nombre: 'Química General',                 anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1030', codigo: '1030', nombre: 'Fundamentos de TICs',             anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1033', codigo: '1033', nombre: 'Análisis Matemático II',          anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['1023'], tipo: 'obligatoria' },
    { id: '1031', codigo: '1031', nombre: 'Física I',                        anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['1023'], tipo: 'obligatoria' },
    { id: '1032', codigo: '1032', nombre: 'Álgebra y Geometría Analítica II', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1027'], tipo: 'obligatoria' },
    { id: '3016', codigo: '3016', nombre: 'Probabilidad Estadística',        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1023'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3017', codigo: '3017', nombre: 'Química Industrial',              anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1029'], tipo: 'obligatoria' },
    { id: '3018', codigo: '3018', nombre: 'Estabilidad I',                   anio: 2, cuatrimestre: 2, horasSemanales: 8, correlativas: ['1031'], tipo: 'obligatoria' },
    { id: '3019', codigo: '3019', nombre: 'Cálculo Numérico',                anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1033'], tipo: 'obligatoria' },
    { id: '1035', codigo: '1035', nombre: 'Física II',                       anio: 2, cuatrimestre: 2, horasSemanales: 8, correlativas: ['1031'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3020', codigo: '3020', nombre: 'Termodinámica',                   anio: 3, cuatrimestre: 1, horasSemanales: 8, correlativas: ['1035', '3017'], tipo: 'obligatoria' },
    { id: '3021', codigo: '3021', nombre: 'Física III',                      anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['1035'], tipo: 'obligatoria' },
    { id: '3022', codigo: '3022', nombre: 'Matemática Avanzada',             anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1032', '3019'], tipo: 'obligatoria' },
    { id: '3023', codigo: '3023', nombre: 'Costos Industriales',             anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1023'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3024', codigo: '3024', nombre: 'Mecánica General',                anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1031', '3022'], tipo: 'obligatoria' },
    { id: '3025', codigo: '3025', nombre: 'Máquinas Térmicas',               anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3020'], tipo: 'obligatoria' },
    { id: '3026', codigo: '3026', nombre: 'Estabilidad II',                  anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3018'], tipo: 'obligatoria' },
    { id: '3027', codigo: '3027', nombre: 'Organización Industrial',         anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3023'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3028', codigo: '3028', nombre: 'Mecánica de los Fluidos',         anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3020', '3022', '3024'], tipo: 'obligatoria' },
    { id: '3029', codigo: '3029', nombre: 'Estabilidad III',                 anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3022', '3026'], tipo: 'obligatoria' },
    { id: '3030', codigo: '3030', nombre: 'Metalurgia Física I',             anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3017', '3021'], tipo: 'obligatoria' },
    { id: '3031', codigo: '3031', nombre: 'Electrotecnia y Electrónica',     anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3021'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3032', codigo: '3032', nombre: 'Elementos de Máquinas',           anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3024', '3026'], tipo: 'obligatoria' },
    { id: '3033', codigo: '3033', nombre: 'Automación I',                    anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3031'], tipo: 'obligatoria' },
    { id: '3034', codigo: '3034', nombre: 'Trabajado Mecánico I',            anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3026', '3030'], tipo: 'obligatoria' },
    { id: '3035', codigo: '3035', nombre: 'Metalurgia Física II',            anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3030'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3036', codigo: '3036', nombre: 'Trabajado Mecánico II',           anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3034', '3035'], tipo: 'obligatoria' },
    { id: '3037', codigo: '3037', nombre: 'Elementos de Economía',           anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3023'], tipo: 'obligatoria' },
    { id: '3038', codigo: '3038', nombre: 'Automación II',                   anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3033', '3034'], tipo: 'obligatoria' },
    { id: '3039', codigo: '3039', nombre: 'Máquinas Eléctricas',             anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3031'], tipo: 'obligatoria' },
    { id: '3044', codigo: '3044', nombre: 'Práctica Profesional Supervisada', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3034'], tipo: 'obligatoria', esAnual: true },
    { id: '3045', codigo: '3045', nombre: 'Proyecto Final',                  anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3035', '3044'], tipo: 'obligatoria', esAnual: true },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3040', codigo: '3040', nombre: 'Metrología y Gestión de la Calidad', anio: 5, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3016', '3032', '3034'], tipo: 'obligatoria' },
    { id: '3041', codigo: '3041', nombre: 'Higiene y Seguridad en el Trabajo', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3025', '3039'], tipo: 'obligatoria' },
    { id: '3042', codigo: '3042', nombre: 'Instalaciones Industriales',      anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3025', '3028'], tipo: 'obligatoria' },
    { id: '3043', codigo: '3043', nombre: 'Legislación General',             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1026'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
