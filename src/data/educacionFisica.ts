import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) para esta carrera NO publica año ni cuatrimestre
// por materia — solo el listado de correlatividades, la carga horaria y si el régimen
// es cuatrimestral o anual. El año y el cuatrimestre de cada una se infirieron a partir
// de la profundidad de sus cadenas de correlativas; como la mayoría de las materias no
// tiene correlativas entre sí (talleres deportivos independientes), se distribuyeron de
// forma pareja a lo largo de los años en vez de amontonarlas todas al inicio. Las 7
// materias marcadas en el plan oficial como "específicas de la Licenciatura" (no
// requeridas para el Profesorado) se ubicaron en el último año. El plan lista dos pares
// de materias con código repetido ("0408" para Rugby y Cestobol, "0418" para Fútbol y
// Expresión Corporal, aparentemente un error de tipeo del plan original); se mantuvo el
// código tal cual figura y se diferenciaron por id interno.
export const educacionFisica: Carrera = {
  id: 'prof-lic-educacion-fisica',
  nombre: 'Profesorado y Licenciatura en Educación Física',
  plan: '2000',
  cuatrimestreEstimado: true,
  anioEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '180', codigo: '180', nombre: 'Introducción a la Epistemología',    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '390', codigo: '390', nombre: 'Teoría del Aprendizaje',             anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '391', codigo: '391', nombre: 'Pedagogía',                         anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '394', codigo: '394', nombre: 'Introducción a la Psicología',      anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '392', codigo: '392', nombre: 'Biología',                         anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '393', codigo: '393', nombre: 'Educación Sanitaria',               anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '395', codigo: '395', nombre: 'Ecología y Vida al Aire Libre',     anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '397', codigo: '397', nombre: 'Gimnasia I',                        anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '398', codigo: '398', nombre: 'Atletismo I',                       anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '404', codigo: '404', nombre: 'Natación I',                        anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '1772', codigo: '1772', nombre: 'Anatomía y Fisiología',           anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '1773', codigo: '1773', nombre: 'Organización de Actividades Lúdicas', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '399', codigo: '399', nombre: 'Handball',                         anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '400', codigo: '400', nombre: 'Basquetbol',                       anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '407', codigo: '407', nombre: 'Voleibol',                         anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '408-1', codigo: '408', nombre: 'Rugby',                          anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '408-2', codigo: '408', nombre: 'Cestobol',                       anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '401', codigo: '401', nombre: 'Psicología Evolutiva I',           anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['394'], tipo: 'obligatoria', esAnual: true },
    { id: '402', codigo: '402', nombre: 'Didáctica General',                anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['390', '391'], tipo: 'obligatoria', esAnual: true },
    { id: '1774', codigo: '1774', nombre: 'Ética y Deontología Profesional', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['180'], tipo: 'obligatoria' },
    { id: '1775', codigo: '1775', nombre: 'Psicología Social',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['394'], tipo: 'obligatoria' },
    { id: '1777', codigo: '1777', nombre: 'Historia de la Educación Argentina', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['391'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '417', codigo: '417', nombre: 'Softbol',                          anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '418-1', codigo: '418', nombre: 'Fútbol',                         anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '418-2', codigo: '418', nombre: 'Expresión Corporal',             anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '419', codigo: '419', nombre: 'Hockey s/c',                       anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '405', codigo: '405', nombre: 'Gimnasia II',                      anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['397'], tipo: 'obligatoria', esAnual: true },
    { id: '406', codigo: '406', nombre: 'Atletismo II',                     anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['398'], tipo: 'obligatoria', esAnual: true },
    { id: '1730', codigo: '1730', nombre: 'Fisiología del Ejercicio',       anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1772'], tipo: 'obligatoria' },
    { id: '1778', codigo: '1778', nombre: 'Folklore y Tango',               anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1773'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1753', codigo: '1753', nombre: 'Desarrollo Evolutivo de las Actividades Motoras', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '1754', codigo: '1754', nombre: 'Elementos de Sociología en el Deporte', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '414', codigo: '414', nombre: 'Psicología Evolutiva II',          anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['401'], tipo: 'obligatoria' },
    { id: '415', codigo: '415', nombre: 'Natación II',                      anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['404'], tipo: 'obligatoria', esAnual: true },
    { id: '413', codigo: '413', nombre: 'Metodología de la Enseñanza de la Educación Física', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['402'], tipo: 'obligatoria', esAnual: true },
    { id: '1757', codigo: '1757', nombre: 'Historia de la Educación Física', anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1777'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1755', codigo: '1755', nombre: 'Estadísticas y Evaluación de las Actividades Físicas', anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '416', codigo: '416', nombre: 'Gimnasia III',                     anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['405'], tipo: 'obligatoria', esAnual: true },
    { id: '1732', codigo: '1732', nombre: 'Biomecánica',                    anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1730'], tipo: 'obligatoria' },
    { id: '1758', codigo: '1758', nombre: 'Legislación y Administración de la Educación Física', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1774'], tipo: 'obligatoria', esAnual: true },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1779', codigo: '1779', nombre: 'Elocución',                      anio: 4, cuatrimestre: 1, horasSemanales: 2, correlativas: ['413'], tipo: 'obligatoria', esAnual: true },
    { id: '1780', codigo: '1780', nombre: 'Observación y Práctica Docente', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['413'], tipo: 'obligatoria', esAnual: true },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1776', codigo: '1776', nombre: 'Introducción a la Actividad Física Especial', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1732'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre (materias específicas de la Licenciatura) ──
    { id: '1781', codigo: '1781', nombre: 'Elementos de Relaciones Públicas e Institucionales', anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '1782', codigo: '1782', nombre: 'Elementos de Comercialización en el Deporte', anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '1784', codigo: '1784', nombre: 'Seminario de Tecnología Deportiva', anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria', esAnual: true },
    { id: '1788', codigo: '1788', nombre: 'Metodología de la Investigación', anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre (materias específicas de la Licenciatura) ──
    { id: '1783', codigo: '1783', nombre: 'Legislación Deportiva',          anio: 5, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1774'], tipo: 'obligatoria', esAnual: true },
    { id: '1785', codigo: '1785', nombre: 'Investigación Aplicada',         anio: 5, cuatrimestre: 2, horasSemanales: 8, correlativas: ['1788'], tipo: 'obligatoria' },
    { id: '1786', codigo: '1786', nombre: 'Medicina Deportiva',             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1732'], tipo: 'obligatoria', esAnual: true },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',      anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',  anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
  ],
};
