import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const medicina: Carrera = {
  id: 'medicina',
  nombre: 'Medicina',
  plan: '2023',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3242', codigo: '3242', nombre: 'Psicología y Relación Médico Paciente', anio: 1, cuatrimestre: 1, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },
    { id: '3243', codigo: '3243', nombre: 'Promoción Intercultural de la Salud y Ambiente', anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
    { id: '3262', codigo: '3262', nombre: 'Integradora Básica II',         anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3241', codigo: '3241', nombre: 'Articulación Básico Clínica I', anio: 1, cuatrimestre: 1, horasSemanales: 10, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3261', codigo: '3261', nombre: 'Integradora Básica I',          anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3240', codigo: '3240', nombre: 'Formación del Ser Humano',      anio: 1, cuatrimestre: 2, horasSemanales: 6, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3247', codigo: '3247', nombre: 'Epidemiología e Investigación en Salud', anio: 2, cuatrimestre: 1, horasSemanales: 7, correlativas: ['3243'], tipo: 'obligatoria' },
    { id: '3264', codigo: '3264', nombre: 'Integradora Salud Pública II',  anio: 2, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3245', codigo: '3245', nombre: 'Articulación Básico Clínica II', anio: 2, cuatrimestre: 1, horasSemanales: 10, correlativas: ['3241'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3263', codigo: '3263', nombre: 'Integradora Salud Pública I',   anio: 2, cuatrimestre: 2, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '3244', codigo: '3244', nombre: 'Nacimiento, Crecimiento y Desarrollo', anio: 2, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3241', '3240'], tipo: 'obligatoria' },
    { id: '3246', codigo: '3246', nombre: 'Agentes, Mecanismos de Defensa y Nutrición', anio: 2, cuatrimestre: 2, horasSemanales: 5, correlativas: ['3241'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3248', codigo: '3248', nombre: 'Articulación Básico Clínica III', anio: 3, cuatrimestre: 1, horasSemanales: 12, correlativas: ['3245'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3249', codigo: '3249', nombre: 'Farmacología I. Bases Fisiopatológicas del Tratamiento', anio: 3, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3246', '3241'], tipo: 'obligatoria' },
    { id: '3251', codigo: '3251', nombre: 'Gestión de Redes y Servicios de Salud', anio: 3, cuatrimestre: 2, horasSemanales: 7, correlativas: ['3247'], tipo: 'obligatoria' },
    { id: '3250', codigo: '3250', nombre: 'Salud Integral de la Mujer',    anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['3245', '3244'], tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3255', codigo: '3255', nombre: 'Medicina General',              anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['3248'], tipo: 'obligatoria' },
    { id: '3266', codigo: '3266', nombre: 'Integradora Clínica II',        anio: 4, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3261', '3262', '3263', '3264'], tipo: 'obligatoria' },
    { id: '3252', codigo: '3252', nombre: 'Salud del Niño, Niña y Adolescente', anio: 4, cuatrimestre: 1, horasSemanales: 9, correlativas: ['3248', '3244'], tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3254', codigo: '3254', nombre: 'Farmacología II. Clínica y Terapéutica', anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3248', '3249'], tipo: 'obligatoria' },
    { id: '3265', codigo: '3265', nombre: 'Integradora Clínica I',         anio: 4, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3261', '3262', '3263', '3264'], tipo: 'obligatoria' },
    { id: '3256', codigo: '3256', nombre: 'Salud Mental',                  anio: 4, cuatrimestre: 2, horasSemanales: 6, correlativas: ['3249', '3242'], tipo: 'obligatoria' },
    { id: '3253', codigo: '3253', nombre: 'Medicina Interna y Campos Clínicos I', anio: 4, cuatrimestre: 2, horasSemanales: 9, correlativas: ['3248'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3257', codigo: '3257', nombre: 'Salud del Adulto Mayor',        anio: 5, cuatrimestre: 1, horasSemanales: 5, correlativas: ['3253'], tipo: 'obligatoria' },
    { id: '3267', codigo: '3267', nombre: 'Integradora Avanzada I',        anio: 5, cuatrimestre: 1, horasSemanales: 2, correlativas: ['3261', '3262', '3263', '3264'], tipo: 'obligatoria' },
    { id: '3258', codigo: '3258', nombre: 'Medicina Interna y Campos Clínicos II', anio: 5, cuatrimestre: 1, horasSemanales: 9, correlativas: ['3254', '3253'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3260', codigo: '3260', nombre: 'Bioética, Derechos Humanos y Legislación en Salud', anio: 5, cuatrimestre: 2, horasSemanales: 5, correlativas: ['3251'], tipo: 'obligatoria' },
    { id: '3268', codigo: '3268', nombre: 'Integradora Avanzada II',       anio: 5, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3261', '3262', '3263', '3264'], tipo: 'obligatoria' },
    { id: '3259', codigo: '3259', nombre: 'Clínica Quirúrgica',            anio: 5, cuatrimestre: 2, horasSemanales: 9, correlativas: ['3248', '3250'], tipo: 'obligatoria' },

    // ── 6° Año ─ Práctica Final (anual) ────────────────────────────────────
    { id: '3269', codigo: '3269', nombre: 'Práctica Final Obligatoria',    anio: 6, cuatrimestre: 1, horasSemanales: 50, correlativas: ['3267', '3268', '3265', '3266', '3257', '3252', '3256', '3260', '3259', '3255', '3258'], tipo: 'obligatoria', esAnual: true },

    // ── Transversales ──────────────────────────────────────────────────────
    { id: '901', codigo: '901', nombre: 'Inglés Transversal Nivel I',      anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '902', codigo: '902', nombre: 'Inglés Transversal Nivel II',     anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['901'],       tipo: 'transversal' },
    { id: '903', codigo: '903', nombre: 'Inglés Transversal Nivel III',    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['902'],       tipo: 'transversal' },
    { id: '904', codigo: '904', nombre: 'Inglés Transversal Nivel IV',     anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['903'],       tipo: 'transversal' },
    { id: '911', codigo: '911', nombre: 'Computación Transversal Nivel I', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: [],           tipo: 'transversal' },
    { id: '912', codigo: '912', nombre: 'Computación Transversal Nivel II', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['911'],      tipo: 'transversal' },
  ],
};
