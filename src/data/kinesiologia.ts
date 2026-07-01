import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const kinesiologia: Carrera = {
  id: 'lic-kinesiologia',
  nombre: 'Licenciatura en Kinesiología y Fisiatría',
  plan: '2011',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1627', codigo: '1627', nombre: 'Anatomía Descriptiva y Topográfica I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1629', codigo: '1629', nombre: 'Citología e Histología',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],         tipo: 'obligatoria' },
    { id: '1631', codigo: '1631', nombre: 'Introducción al Pensamiento Científico', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1633', codigo: '1633', nombre: 'Psicosociales',                 anio: 1, cuatrimestre: 1, horasSemanales: 3, correlativas: [],         tipo: 'obligatoria' },
    { id: '1635', codigo: '1635', nombre: 'Historia de la Kinesiología',   anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [],         tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1628', codigo: '1628', nombre: 'Bioquímica',                    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],         tipo: 'obligatoria' },
    { id: '1630', codigo: '1630', nombre: 'Educación para la Salud',       anio: 1, cuatrimestre: 2, horasSemanales: 3, correlativas: [],         tipo: 'obligatoria' },
    { id: '1632', codigo: '1632', nombre: 'Biofísica',                     anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [],         tipo: 'obligatoria' },
    { id: '1634', codigo: '1634', nombre: 'Embriología y Desarrollo',      anio: 1, cuatrimestre: 2, horasSemanales: 3, correlativas: [],         tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1636', codigo: '1636', nombre: 'Fisiología',                    anio: 2, cuatrimestre: 1, horasSemanales: 6, correlativas: ['1627', '1628', '1629', '1634'], tipo: 'obligatoria' },
    { id: '1637', codigo: '1637', nombre: 'Anatomía Descriptiva y Topográfica II', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1627'], tipo: 'obligatoria' },
    { id: '1639', codigo: '1639', nombre: 'Psicología Social e Institucional', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [],     tipo: 'obligatoria' },
    { id: '1642', codigo: '1642', nombre: 'Atención Primaria para la Salud I', anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: [],     tipo: 'obligatoria' },
    { id: '1644', codigo: '1644', nombre: 'Administración, Organización y Gestión de Servicios de Salud', anio: 2, cuatrimestre: 1, horasSemanales: 3, correlativas: ['1630'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1638', codigo: '1638', nombre: 'Biomecánica y Análisis del Movimiento', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1627', '1632', '1637'], tipo: 'obligatoria' },
    { id: '1640', codigo: '1640', nombre: 'Epidemiología',                 anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: [],         tipo: 'obligatoria' },
    { id: '1641', codigo: '1641', nombre: 'Técnicas y Evaluaciones Kinésicas I', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1627', '1632', '1637'], tipo: 'obligatoria' },
    { id: '1643', codigo: '1643', nombre: 'Kinefilaxia',                   anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [],         tipo: 'obligatoria' },
    { id: '1645', codigo: '1645', nombre: 'Diagnóstico por Imágenes',      anio: 2, cuatrimestre: 2, horasSemanales: 3, correlativas: [],         tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1651', codigo: '1651', nombre: 'Atención Comunitaria I',        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1642'], tipo: 'obligatoria' },
    { id: '1647', codigo: '1647', nombre: 'Kinefisiatría Pediátrica y Neonatal', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1636', '1637', '1638', '1641', '1645'], tipo: 'obligatoria' },
    { id: '1649', codigo: '1649', nombre: 'Kinefisiatría Traumato Ortopédica', anio: 3, cuatrimestre: 1, horasSemanales: 6, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1636', '1637', '1638', '1641', '1645'], tipo: 'obligatoria' },
    { id: '1652', codigo: '1652', nombre: 'Psicomotricidad y Estimulación Temprana', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1641', '1643'], tipo: 'obligatoria' },
    { id: '1654', codigo: '1654', nombre: 'Fisioterapia I',                anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1646', codigo: '1646', nombre: 'Técnicas y Evaluaciones Kinésicas II', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1637', '1641'], tipo: 'obligatoria' },
    { id: '1648', codigo: '1648', nombre: 'Kinefisiatría Cardiorrespiratoria', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1636', '1637', '1638', '1641', '1645'], tipo: 'obligatoria' },
    { id: '1650', codigo: '1650', nombre: 'Prótesis y Ortesis',            anio: 3, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1641'], tipo: 'obligatoria' },
    { id: '1653', codigo: '1653', nombre: 'Farmacología General',         anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1636'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1656', codigo: '1656', nombre: 'Atención Comunitaria II',       anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1651'], tipo: 'obligatoria' },
    { id: '1658', codigo: '1658', nombre: 'Historia Argentina y Latinoamericana de las Ciencias de la Salud', anio: 4, cuatrimestre: 1, horasSemanales: 3, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645'], tipo: 'obligatoria' },
    { id: '1660', codigo: '1660', nombre: 'Intensivismo',                  anio: 4, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1647', '1648', '1649'], tipo: 'obligatoria' },
    { id: '1662', codigo: '1662', nombre: 'Kinefisiatría Gerontológica',   anio: 4, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1649', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1664', codigo: '1664', nombre: 'Kinefisiatría Neurológica',     anio: 4, cuatrimestre: 1, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1646', '1650'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1655', codigo: '1655', nombre: 'Técnicas y Evaluaciones Kinésicas III', anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1646'], tipo: 'obligatoria' },
    { id: '1657', codigo: '1657', nombre: 'Metodología de la Investigación', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645'], tipo: 'obligatoria' },
    { id: '1659', codigo: '1659', nombre: 'Deontología',                   anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1647', '1648', '1649'], tipo: 'obligatoria' },
    { id: '1661', codigo: '1661', nombre: 'Fisioterapia II',                anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1663', codigo: '1663', nombre: 'Kinefisiatría Estética',        anio: 4, cuatrimestre: 2, horasSemanales: 5, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1665', codigo: '1665', nombre: 'Bioética y Ética Profesional',  anio: 4, cuatrimestre: 2, horasSemanales: 3, correlativas: ['1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1666', codigo: '1666', nombre: 'Kinefisiatría Deportiva',       anio: 5, cuatrimestre: 1, horasSemanales: 6, correlativas: ['1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654', '1661'], tipo: 'obligatoria' },
    { id: '1668', codigo: '1668', nombre: 'Auditoría y Kinesiología Legal', anio: 5, cuatrimestre: 1, horasSemanales: 3, correlativas: ['1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1669', codigo: '1669', nombre: 'Kinesiología Ocupacional y Laboral', anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1670', codigo: '1670', nombre: 'Ergonomía',                     anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: ['1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1667', codigo: '1667', nombre: 'Rehabilitación Computacional',  anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['904', '911', '1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654'], tipo: 'obligatoria' },
    { id: '1671', codigo: '1671', nombre: 'Kinefisiatría en Cuidados Paliativos', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654', '1656', '1659', '1660'], tipo: 'obligatoria' },
    { id: '1672', codigo: '1672', nombre: 'Seminario de Integración y Práctica Profesional', anio: 5, cuatrimestre: 2, horasSemanales: 40, correlativas: ['1627', '1628', '1629', '1630', '1631', '1632', '1633', '1634', '1635', '1636', '1637', '1638', '1639', '1640', '1641', '1642', '1643', '1644', '1645', '1646', '1647', '1648', '1649', '1650', '1651', '1652', '1653', '1654', '1655', '1656', '1657', '1658', '1659', '1660', '1661', '1662', '1663', '1664', '1665', '1666', '1667', '1668', '1669', '1670'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['901'],       tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'],       tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['903'],       tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'],      tipo: 'transversal' },
  ],
};
