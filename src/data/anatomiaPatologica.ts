import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const anatomiaPatologica: Carrera = {
  id: 'tec-anatomia-patologica',
  nombre: 'Tecnicatura Universitaria en Anatomía Patológica',
  plan: '2022',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3600', codigo: '3600', nombre: 'Ciencias Biológicas I',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                            tipo: 'obligatoria' },
    { id: '3601', codigo: '3601', nombre: 'Química Inorgánica',            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                            tipo: 'obligatoria' },
    { id: '3602', codigo: '3602', nombre: 'Principios de Matemática',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                            tipo: 'obligatoria' },
    { id: '3603', codigo: '3603', nombre: 'Técnicas de Laboratorio I',     anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                            tipo: 'obligatoria' },
    { id: '3604', codigo: '3604', nombre: 'Epidemiología y Bioseguridad',  anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [],                            tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3605', codigo: '3605', nombre: 'Ciencias Biológicas II',        anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3600'],                      tipo: 'obligatoria' },
    { id: '3606', codigo: '3606', nombre: 'Química Orgánica',              anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3601'],                      tipo: 'obligatoria' },
    { id: '3607', codigo: '3607', nombre: 'Cito Histología',               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3601', '3600'],              tipo: 'obligatoria' },
    { id: '3608', codigo: '3608', nombre: 'Técnicas de Laboratorio II',    anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3603'],                      tipo: 'obligatoria' },
    { id: '3609', codigo: '3609', nombre: 'Habilidades Prácticas I',       anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3603'],                      tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3610', codigo: '3610', nombre: 'Cito Patología I',              anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3601', '3607', '3600'],      tipo: 'obligatoria' },
    { id: '3611', codigo: '3611', nombre: 'Técnicas Citológicas',          anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3600', '3605', '3608', '3607', '3603'], tipo: 'obligatoria' },
    { id: '3612', codigo: '3612', nombre: 'Técnicas Histológicas',         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3600', '3605', '3607', '3608', '3603'], tipo: 'obligatoria' },
    { id: '3613', codigo: '3613', nombre: 'Histopatología',                anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3600', '3605', '3607'],      tipo: 'obligatoria' },
    { id: '3618', codigo: '3618', nombre: 'Gestión de Servicios de Anatomía Patológica', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3603', '3608'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3614', codigo: '3614', nombre: 'Innovación en Biotecnología',   anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3608', '3603'],              tipo: 'obligatoria' },
    { id: '3615', codigo: '3615', nombre: 'Cito Patología II',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3600', '3605', '3607', '3610'], tipo: 'obligatoria' },
    { id: '3616', codigo: '3616', nombre: 'Prácticas Profesionalizantes en Citología', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3611', '3603', '3608', '3609'], tipo: 'obligatoria' },
    { id: '3617', codigo: '3617', nombre: 'Prácticas Profesionalizantes en Histología', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3603', '3612', '3608', '3609'], tipo: 'obligatoria' },
    { id: '3619', codigo: '3619', nombre: 'Habilidades Prácticas II',      anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3609'],                      tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3620', codigo: '3620', nombre: 'Prácticas Profesionalizantes Integradas', anio: 3, cuatrimestre: 1, horasSemanales: 10, correlativas: ['3600', '3601', '3602', '3603', '3604', '3605', '3606', '3607', '3608', '3609', '3610', '3611', '3612', '3613', '3614', '3615', '3616', '3617', '3618', '3619'], tipo: 'obligatoria' },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'],       tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'],      tipo: 'transversal' },
  ],
};
