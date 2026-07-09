import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const disenoGraficoDigital: Carrera = {
  id: 'tec-diseno-grafico-digital',
  nombre: 'Tecnicatura Universitaria en Diseño Gráfico y Digital',
  plan: '2023',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3820', codigo: '3820', nombre: 'Diseño I',            anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '3821', codigo: '3821', nombre: 'Morfología I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3822', codigo: '3822', nombre: 'Tipografía I',        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3823', codigo: '3823', nombre: 'Gráfica Digital',     anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3824', codigo: '3824', nombre: 'Diseño II',           anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3820', '3821'], tipo: 'obligatoria' },
    { id: '3825', codigo: '3825', nombre: 'Morfología II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3820', '3821'], tipo: 'obligatoria' },
    { id: '3826', codigo: '3826', nombre: 'Tipografía II',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3821', '3822'], tipo: 'obligatoria' },
    { id: '3827', codigo: '3827', nombre: 'Comunicación',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3828', codigo: '3828', nombre: 'Diseño III',          anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3824', '3825'], tipo: 'obligatoria' },
    { id: '3829', codigo: '3829', nombre: 'Fotografía',          anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3825'], tipo: 'obligatoria' },
    { id: '3830', codigo: '3830', nombre: 'Historia del Arte y del Diseño Gráfico', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3824', '3826'], tipo: 'obligatoria' },
    { id: '3834', codigo: '3834', nombre: 'Tecnología Gráfica',  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3831', codigo: '3831', nombre: 'Diseño IV',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3825', '3828'], tipo: 'obligatoria' },
    { id: '3832', codigo: '3832', nombre: 'Diseño Editorial',    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3826', '3828'], tipo: 'obligatoria' },
    { id: '3833', codigo: '3833', nombre: 'Gráfica en Movimiento I', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3825', '3828'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3835', codigo: '3835', nombre: 'Gráfica en Movimiento II', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3831', '3833'], tipo: 'obligatoria' },
    { id: '3836', codigo: '3836', nombre: 'Diseño de Campaña Publicitaria', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3825', '3831'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3837', codigo: '3837', nombre: 'Diseño de Productos y Envases', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3831'], tipo: 'obligatoria' },
    { id: '3838', codigo: '3838', nombre: 'Proyecto Final',      anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3831', '3832', '3833'], tipo: 'obligatoria' },
  ],
};
