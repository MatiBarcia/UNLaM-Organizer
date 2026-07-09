import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const produccionContenidos: Carrera = {
  id: 'tec-produccion-contenidos',
  nombre: 'Tecnicatura Universitaria en Producción de Contenidos para la Comunicación',
  plan: '2024',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3951', codigo: '3951', nombre: 'Fundamentos de la Comunicación',   anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3952', codigo: '3952', nombre: 'Taller de Producción Audiovisual I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3953', codigo: '3953', nombre: 'Introducción al Periodismo',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3954', codigo: '3954', nombre: 'Narrativas de Storytelling',      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3955', codigo: '3955', nombre: 'Comunicación Política y Discurso', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3956', codigo: '3956', nombre: 'Taller de Producción Audiovisual II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3957', codigo: '3957', nombre: 'Introducción al Marketing',       anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3954'], tipo: 'obligatoria' },
    { id: '3958', codigo: '3958', nombre: 'Producción Radiofónica y Podcasting', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3952'], tipo: 'obligatoria' },
    { id: '3959', codigo: '3959', nombre: 'Periodismo y Redacción Digital',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3953'], tipo: 'obligatoria' },
    { id: '3960', codigo: '3960', nombre: 'Legislación de Medios y Propiedad Intelectual', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3953'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                        anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3961', codigo: '3961', nombre: 'Comunicación Corporativa y Asuntos Públicos', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3955'], tipo: 'obligatoria' },
    { id: '3962', codigo: '3962', nombre: 'Innovación y Nuevas Tecnologías en la Comunicación', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3952', '3954', '3959'], tipo: 'obligatoria' },
    { id: '3963', codigo: '3963', nombre: 'Legislación y Ética en la Producción de Contenidos', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3953', '3960'], tipo: 'obligatoria' },
    { id: '3964', codigo: '3964', nombre: 'Taller de Producción Audiovisual III', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3952', '3956'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3965', codigo: '3965', nombre: 'Comunicación Digital',            anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3957'], tipo: 'obligatoria' },
    { id: '3966', codigo: '3966', nombre: 'Narrativa Audiovisual: Cine y Documental', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3952', '3956', '3964'], tipo: 'obligatoria' },
    { id: '3967', codigo: '3967', nombre: 'Relaciones Públicas Avanzadas y Storytelling Corporativo', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3954', '3961'], tipo: 'obligatoria' },
    { id: '3968', codigo: '3968', nombre: 'Diseño Gráfico',                  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3970', codigo: '3970', nombre: 'Producción de Eventos Masivos',   anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3952', '3956', '3964'], tipo: 'obligatoria' },
    { id: '3971', codigo: '3971', nombre: 'Taller de Narrativas y Storytelling Global', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3951', '3954'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3969', codigo: '3969', nombre: 'Proyecto Integrador',             anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3951', '3952', '3956', '3964', '3966'], tipo: 'obligatoria' },
  ],
};
