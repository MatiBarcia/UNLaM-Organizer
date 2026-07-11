import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) especifica el año de cada materia (a diferencia de
// lo que se había asumido en una versión anterior de estos datos), pero no el
// cuatrimestre — se infirió a partir de las correlativas dentro del mismo año (y, cuando
// no hay relación de dependencia entre sí, se balancearon entre 1° y 2° cuatrimestre). La
// carga horaria solo figura en el plan oficial para "Taller de Aplicación I/II"; el resto
// de las materias se dejó en 4 hs/semana, igual que esas dos.
export const relacionesLaborales: Carrera = {
  id: 'lic-relaciones-laborales',
  nombre: 'Licenciatura en Relaciones Laborales',
  plan: '2008',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1500', codigo: '1500', nombre: 'Introducción a las Relaciones Laborales', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '751', codigo: '751', nombre: 'Elementos de Sociología',                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '748', codigo: '748', nombre: 'Elementos de Psicología',                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '749', codigo: '749', nombre: 'Elementos de Economía',                   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '752', codigo: '752', nombre: 'Procesos Sociohistóricos Mundiales',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1502', codigo: '1502', nombre: 'Administración General',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1501', codigo: '1501', nombre: 'Administración de los Recursos Humanos I', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1500'], tipo: 'obligatoria' },
    { id: '1503', codigo: '1503', nombre: 'Sociología del Trabajo',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['751'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1504', codigo: '1504', nombre: 'Administración de los Recursos Humanos II', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1501', '1502'], tipo: 'obligatoria' },
    { id: '1505', codigo: '1505', nombre: 'Psicología Laboral',                    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['748', '1503'], tipo: 'obligatoria' },
    { id: '1506', codigo: '1506', nombre: 'Derecho Laboral I',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1510', codigo: '1510', nombre: 'Economía Política',                     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['749'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1507', codigo: '1507', nombre: 'Administración de los Recursos Humanos III', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1504', '1505'], tipo: 'obligatoria' },
    { id: '1508', codigo: '1508', nombre: 'Teoría de las Remuneraciones',          anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1504', '1506'], tipo: 'obligatoria' },
    { id: '1509', codigo: '1509', nombre: 'Derecho Laboral II',                    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1506'], tipo: 'obligatoria' },
    { id: '1528', codigo: '1528', nombre: 'Taller de Aplicación I',                anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1504', '1506'], tipo: 'obligatoria' },
    { id: '1529', codigo: '1529', nombre: 'Taller de Aplicación II',               anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1528', '1507', '1508', '1509'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '756', codigo: '756', nombre: 'Procesos Sociohistóricos Argentinos',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['752'], tipo: 'obligatoria' },
    { id: '1511', codigo: '1511', nombre: 'Sistemas de Relaciones Laborales Comparadas', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1507', '1510'], tipo: 'obligatoria' },
    { id: '1512', codigo: '1512', nombre: 'Negociación Colectiva',                 anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1507', '1509', '1510'], tipo: 'obligatoria' },
    { id: '1513', codigo: '1513', nombre: 'Metodología de la Investigación I',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1507'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1514', codigo: '1514', nombre: 'Derecho Laboral III',                   anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1509'], tipo: 'obligatoria' },
    { id: '1515', codigo: '1515', nombre: 'Condiciones y Medio Ambiente Laboral',  anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1505', '1507'], tipo: 'obligatoria' },
    { id: '1516', codigo: '1516', nombre: 'Sistemas de Seguridad Social',          anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1511'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1517', codigo: '1517', nombre: 'Mediación y Negociación',               anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1512', '1514', '1516'], tipo: 'obligatoria' },
    { id: '1519', codigo: '1519', nombre: 'Políticas de Trabajo y Empleo',         anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1511', '1512'], tipo: 'obligatoria' },
    { id: '1520', codigo: '1520', nombre: 'Historia del Movimiento Obrero',        anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['756'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1518', codigo: '1518', nombre: 'Metodología de la Investigación II',    anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1513', '1517'], tipo: 'obligatoria' },
    { id: '1521', codigo: '1521', nombre: 'Taller de Elaboración del Trabajo Final', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1518', '1519'], tipo: 'obligatoria' },
    { id: '1522', codigo: '1522', nombre: 'Seminario de Gestión de Recursos Humanos', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1514', '1517', '1519'], tipo: 'obligatoria' },
    { id: '1523', codigo: '1523', nombre: 'Seminario de Tópicos de Avanzada',      anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1517', '1520'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],     tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II',        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['911'], tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',            anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',             anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
  ],
};
