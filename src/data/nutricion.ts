import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const nutricion: Carrera = {
  id: 'lic-nutricion',
  nombre: 'Licenciatura en Nutrición',
  plan: '2011',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1533', codigo: '1533', nombre: 'Educación para la Salud',       anio: 1, cuatrimestre: 1, horasSemanales: 3, correlativas: [], tipo: 'obligatoria' },
    { id: '1535', codigo: '1535', nombre: 'Biofísica',                     anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '1537', codigo: '1537', nombre: 'Embriología y Desarrollo',      anio: 1, cuatrimestre: 1, horasSemanales: 3, correlativas: [], tipo: 'obligatoria' },
    { id: '1530', codigo: '1530', nombre: 'Anatomía Descriptiva y Topográfica I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1532', codigo: '1532', nombre: 'Nutrición Normal',              anio: 1, cuatrimestre: 1, horasSemanales: 5, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1534', codigo: '1534', nombre: 'Introducción al Pensamiento Científico I', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1536', codigo: '1536', nombre: 'Psicosociales',                 anio: 1, cuatrimestre: 2, horasSemanales: 3, correlativas: [], tipo: 'obligatoria' },
    { id: '1538', codigo: '1538', nombre: 'Nutrición del Niño y Adolescente Sano', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '1531', codigo: '1531', nombre: 'Bioquímica',                    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1541', codigo: '1541', nombre: 'Psicología Social e Institucional', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1533', '1536', '1537'], tipo: 'obligatoria' },
    { id: '1542', codigo: '1542', nombre: 'Epidemiología',                 anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1534'], tipo: 'obligatoria' },
    { id: '1544', codigo: '1544', nombre: 'Atención Primaria para la Salud', anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['1532', '1533', '1534', '1536', '1537', '1538'], tipo: 'obligatoria' },
    { id: '1540', codigo: '1540', nombre: 'Técnicas y Manejo de Alimentos', anio: 2, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1531', '1532', '1535'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1543', codigo: '1543', nombre: 'Bromatología y Tecnología de los Alimentos', anio: 2, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1531', '1532'], tipo: 'obligatoria' },
    { id: '1545', codigo: '1545', nombre: 'Administración, Organización y Gestión de Servicios', anio: 2, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1541'], tipo: 'obligatoria' },
    { id: '1539', codigo: '1539', nombre: 'Fisiología',                    anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['1530', '1531', '1535', '1537'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1549', codigo: '1549', nombre: 'Microbiología',                 anio: 3, cuatrimestre: 1, horasSemanales: 3, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1543'], tipo: 'obligatoria' },
    { id: '1551', codigo: '1551', nombre: 'Fisiopatología y Dietoterapia del Niño y del Adolescente', anio: 3, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540'], tipo: 'obligatoria' },
    { id: '1553', codigo: '1553', nombre: 'Toxicología de los Alimentos',  anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1540', '1543'], tipo: 'obligatoria' },
    { id: '1547', codigo: '1547', nombre: 'Fisiopatología y Dietoterapia del Adulto', anio: 3, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1543'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1550', codigo: '1550', nombre: 'Farmacología General',         anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539'], tipo: 'obligatoria' },
    { id: '1552', codigo: '1552', nombre: 'Antropología, Cultura y Nutrición', anio: 3, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1541', '1544'], tipo: 'obligatoria' },
    { id: '1546', codigo: '1546', nombre: 'Técnica Dietoterápica',        anio: 3, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1543'], tipo: 'obligatoria' },
    { id: '1548', codigo: '1548', nombre: 'Atención Comunitaria I',        anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1543'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1555', codigo: '1555', nombre: 'Atención Comunitaria II',       anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1557', codigo: '1557', nombre: 'Soporte Nutricional',           anio: 4, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1546', '1548', '1547'], tipo: 'obligatoria' },
    { id: '1559', codigo: '1559', nombre: 'Deontología',                   anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1560', codigo: '1560', nombre: 'Política y Evaluación en Nutrición', anio: 4, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1562', codigo: '1562', nombre: 'Técnicas Pedagógicas en Nutrición', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1564', codigo: '1564', nombre: 'Marketing, Investigación y Desarrollo de Alimentos', anio: 4, cuatrimestre: 1, horasSemanales: 3, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1556', codigo: '1556', nombre: 'Metodología de la Investigación I', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1558', codigo: '1558', nombre: 'Historia Argentina y Latinoamericana de las Ciencias de la Salud', anio: 4, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1546', '1548', '1547'], tipo: 'obligatoria' },
    { id: '1561', codigo: '1561', nombre: 'Economía, Comercialización y Distribución de Alimentos', anio: 4, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1563', codigo: '1563', nombre: 'Nutrición y Deporte',           anio: 4, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },
    { id: '1565', codigo: '1565', nombre: 'Bioética y Ética Profesional',  anio: 4, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1559'], tipo: 'obligatoria' },
    { id: '1554', codigo: '1554', nombre: 'Administración en Servicios de Alimentación', anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1545', '1548', '1546', '1547'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1566', codigo: '1566', nombre: 'Práctica Profesional en Servicios de Alimentación', anio: 5, cuatrimestre: 1, horasSemanales: 25, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1541', '1542', '1543', '1544', '1545', '1546', '1547', '1548', '1549', '1550'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1567', codigo: '1567', nombre: 'Práctica Profesional en Nutrición Clínica', anio: 5, cuatrimestre: 2, horasSemanales: 25, correlativas: ['1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1538', '1539', '1540', '1541', '1542', '1543', '1544', '1545', '1546', '1547', '1548', '1549', '1550', '1551', '1552', '1553', '1554', '1555', '1556', '1557', '1558', '1559', '1560', '1561', '1562', '1563', '1564', '1565'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'],       tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'],       tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['903'],       tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['911'],      tipo: 'transversal' },
  ],
};
