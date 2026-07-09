import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const desarrolloVideojuegos: Carrera = {
  id: 'tec-desarrollo-videojuegos',
  nombre: 'Tecnicatura Universitaria en Desarrollo de Videojuegos',
  plan: '2024',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                     anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4234', codigo: '4234', nombre: 'Programación',                 anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4235', codigo: '4235', nombre: 'Álgebra',                      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4236', codigo: '4236', nombre: 'Tecnología de la Información', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '4237', codigo: '4237', nombre: 'Introducción al Diseño',       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4240', codigo: '4240', nombre: 'Arte Digital en 2D',           anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4234'], tipo: 'obligatoria' },
    { id: '4238', codigo: '4238', nombre: 'Motores de Desarrollo',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4237'], tipo: 'obligatoria' },
    { id: '4239', codigo: '4239', nombre: 'Física del Movimiento',        anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4235'], tipo: 'obligatoria' },
    { id: '4241', codigo: '4241', nombre: 'Audio y Sonido',               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4236'], tipo: 'obligatoria' },
    { id: '4242', codigo: '4242', nombre: 'Base de Datos',                anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4234'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '4243', codigo: '4243', nombre: 'Motores de Desarrollo Avanzados', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4238', '4239'], tipo: 'obligatoria' },
    { id: '4244', codigo: '4244', nombre: 'Interfaz de Usuario',          anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4237'], tipo: 'obligatoria' },
    { id: '4245', codigo: '4245', nombre: 'Arte Digital en 3D',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4240'], tipo: 'obligatoria' },
    { id: '4246', codigo: '4246', nombre: 'Diseño de Sonido',             anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4241'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4247', codigo: '4247', nombre: 'Metodología de Desarrollo',    anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4236'], tipo: 'obligatoria' },
    { id: '4248', codigo: '4248', nombre: 'Experiencia de Usuario',       anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4244'], tipo: 'obligatoria' },
    { id: '4249', codigo: '4249', nombre: 'Estructura Narrativa',         anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4237'], tipo: 'obligatoria' },
    { id: '4250', codigo: '4250', nombre: 'Diseño de Niveles',            anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4244'], tipo: 'obligatoria' },
    { id: '4251', codigo: '4251', nombre: 'Diseño de Videojuegos',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4243', '4245'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '4252', codigo: '4252', nombre: 'Inteligencia Artificial',      anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4251'], tipo: 'obligatoria' },
    { id: '4253', codigo: '4253', nombre: 'Interfases de Control',        anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4251'], tipo: 'obligatoria' },
    { id: '4254', codigo: '4254', nombre: 'Calidad en Videojuegos',       anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['4251'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '4255', codigo: '4255', nombre: 'Innovación y Emprendedorismo', anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4251'], tipo: 'obligatoria' },
    { id: '4256', codigo: '4256', nombre: 'Proyecto Integrador',          anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['4251'], tipo: 'obligatoria' },
  ],
};
