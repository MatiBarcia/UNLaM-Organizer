import type { Carrera } from '../types';

// El plan de estudios oficial (UNLaM) sólo especifica el año de cada materia, no el
// cuatrimestre. El cuatrimestre de cada una se infirió a partir de sus correlativas
// dentro del mismo año (y, cuando no hay relación de dependencia entre sí, se
// balancearon entre 1° y 2° cuatrimestre para no amontonar todo en uno solo).
export const animacionArteDigital: Carrera = {
  id: 'tec-animacion-arte-digital',
  nombre: 'Tecnicatura Universitaria en Animación y Arte Digital',
  plan: '2020',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3478', codigo: '3478', nombre: 'Introducción a la Animación Digital', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3479', codigo: '3479', nombre: 'Dibujo I',                            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3480', codigo: '3480', nombre: 'Animación 2D I',                      anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3481', codigo: '3481', nombre: 'Lenguaje y Producción Audiovisual',    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3482', codigo: '3482', nombre: 'Diseño de Personajes',                anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3486', codigo: '3486', nombre: 'Modelado 3D I',                       anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3483', codigo: '3483', nombre: 'Guion',                               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3481', '3482'], tipo: 'obligatoria' },
    { id: '3484', codigo: '3484', nombre: 'Dibujo II',                           anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3479'], tipo: 'obligatoria' },
    { id: '3485', codigo: '3485', nombre: 'Edición',                             anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3478', '3481'], tipo: 'obligatoria' },
    { id: '3487', codigo: '3487', nombre: 'Animación 2D II',                     anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3480', '3479'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3452', codigo: '3452', nombre: 'Inglés I',                            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '3488', codigo: '3488', nombre: 'Animación 2D Cut Out para Series y Videojuegos', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3487'], tipo: 'obligatoria' },
    { id: '3489', codigo: '3489', nombre: 'Dirección de Arte',                   anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3483', '3484'], tipo: 'obligatoria' },
    { id: '3490', codigo: '3490', nombre: 'Animación 3D I',                      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3487', '3486'], tipo: 'obligatoria' },
    { id: '3491', codigo: '3491', nombre: 'Composición y Postproducción Digital I', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3485'], tipo: 'obligatoria' },
    { id: '3494', codigo: '3494', nombre: 'Diseño de Interfaces e Interactividad', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3485'], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3457', codigo: '3457', nombre: 'Inglés II',                           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3452'], tipo: 'obligatoria' },
    { id: '3493', codigo: '3493', nombre: 'Animación 3D II',                     anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3490'], tipo: 'obligatoria' },
    { id: '3495', codigo: '3495', nombre: 'Sonido y Composición Digital',        anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3485'], tipo: 'obligatoria' },
    { id: '3497', codigo: '3497', nombre: 'Composición y Postproducción Digital II', anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3491', '3488'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '3498', codigo: '3498', nombre: 'Animación 3D III',                    anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3493', '3491'], tipo: 'obligatoria' },
    { id: '3501', codigo: '3501', nombre: 'Proyectos Audiovisuales Interactivos', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['3494', '3493'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '3499', codigo: '3499', nombre: 'Comunicación y Gestión de Proyectos', anio: 3, cuatrimestre: 2, horasSemanales: 2, correlativas: ['3489', '3493', '3495', '3497'], tipo: 'obligatoria' },
    { id: '3500', codigo: '3500', nombre: 'Proyecto Final',                      anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['3489', '3493', '3495', '3497'], tipo: 'obligatoria' },
  ],
};
