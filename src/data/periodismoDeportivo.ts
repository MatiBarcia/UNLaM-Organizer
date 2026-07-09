import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const periodismoDeportivo: Carrera = {
  id: 'tec-periodismo-deportivo',
  nombre: 'Tecnicatura Universitaria en Periodismo Deportivo Integral',
  plan: '2020',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3512', codigo: '3512', nombre: 'Taller de Narrativas y Contenidos Gráficos I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3513', codigo: '3513', nombre: 'Taller de Narrativas y Contenidos Audiovisuales I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3514', codigo: '3514', nombre: 'Deportes de Equipo I',              anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3515', codigo: '3515', nombre: 'Semiótica',                        anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3516', codigo: '3516', nombre: 'Planificación y Manejo de Redes Sociales', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3517', codigo: '3517', nombre: 'Lenguaje Periodístico',            anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3518', codigo: '3518', nombre: 'Fotografía Deportiva',             anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3519', codigo: '3519', nombre: 'Taller de Narrativas y Contenidos Gráficos II', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3512'], tipo: 'obligatoria' },
    { id: '3520', codigo: '3520', nombre: 'Taller de Narrativas y Contenidos Audiovisuales II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3513'], tipo: 'obligatoria' },
    { id: '3521', codigo: '3521', nombre: 'Deportes Individuales I',          anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3522', codigo: '3522', nombre: 'Introducción a la Teoría de Género', anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3523', codigo: '3523', nombre: 'Taller Integrador Inicial',        anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3512', '3513', '3516'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                         anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3524', codigo: '3524', nombre: 'Taller de Narrativas y Contenidos Gráficos III', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3519'], tipo: 'obligatoria' },
    { id: '3526', codigo: '3526', nombre: 'Taller de Narrativas y Contenidos Audiovisuales III', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3520'], tipo: 'obligatoria' },
    { id: '3527', codigo: '3527', nombre: 'Diseño Gráfico Multimedial Aplicado al Deporte', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3528', codigo: '3528', nombre: 'Política y Derecho en el Deporte', anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3530', codigo: '3530', nombre: 'Deportes de Equipo II',            anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3514'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3529', codigo: '3529', nombre: 'Comunicación y Gestión de Prensa Institucional', anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3531', codigo: '3531', nombre: 'Literatura y Deporte',             anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3532', codigo: '3532', nombre: 'Teorías de la Comunicación',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3533', codigo: '3533', nombre: 'Taller de Narrativas y Contenidos Gráficos IV', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3524'], tipo: 'obligatoria' },
    { id: '3534', codigo: '3534', nombre: 'Taller de Narrativas y Contenidos Audiovisuales IV', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3526'], tipo: 'obligatoria' },
    { id: '3535', codigo: '3535', nombre: 'Deportes Individuales II',         anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3521'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3536', codigo: '3536', nombre: 'Taller Integrador de Periodismo Deportivo con Perspectiva de Género', anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3518', '3523', '3524', '3526', '3527'], tipo: 'obligatoria' },
    { id: '3538', codigo: '3538', nombre: 'Taller de Narrativas y Contenidos Gráficos V', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3533'], tipo: 'obligatoria' },
    { id: '3540', codigo: '3540', nombre: 'Deportes de Equipo III',           anio: 3, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3530'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3539', codigo: '3539', nombre: 'Taller de Narrativas y Contenidos Audiovisuales V', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3534'], tipo: 'obligatoria' },
    { id: '3541', codigo: '3541', nombre: 'Deportes Individuales III',        anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3535'], tipo: 'obligatoria' },
    { id: '3542', codigo: '3542', nombre: 'Taller Integrador Final',          anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3533', '3534', '3536'], tipo: 'obligatoria' },
  ],
};
