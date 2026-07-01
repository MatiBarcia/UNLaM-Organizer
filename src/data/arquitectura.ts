import type { Carrera } from '../types';

export const arquitectura: Carrera = {
  id: 'arquitectura',
  nombre: 'Arquitectura',
  plan: '2015',
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2952', codigo: '2952', nombre: 'Proyecto I',            anio: 1, cuatrimestre: 1, horasSemanales: 8, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '2953', codigo: '2953', nombre: 'Tecnología I',          anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '2954', codigo: '2954', nombre: 'Forma I',               anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '2955', codigo: '2955', nombre: 'Historia y Crítica I',  anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },
    { id: '2956', codigo: '2956', nombre: 'Matemática Aplicada I', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],                                              tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2957', codigo: '2957', nombre: 'Proyecto II',            anio: 1, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2952'],                                       tipo: 'obligatoria' },
    { id: '2958', codigo: '2958', nombre: 'Tecnología II',          anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2953'],                                       tipo: 'obligatoria' },
    { id: '2959', codigo: '2959', nombre: 'Forma II',               anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2954'],                                       tipo: 'obligatoria' },
    { id: '2960', codigo: '2960', nombre: 'Historia y Crítica II',  anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2955'],                                       tipo: 'obligatoria' },
    { id: '2961', codigo: '2961', nombre: 'Matemática Aplicada II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2956'],                                       tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2962', codigo: '2962', nombre: 'Proyecto III',   anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2957', '2959', '2953'],                               tipo: 'obligatoria' },
    { id: '2963', codigo: '2963', nombre: 'Tecnología III', anio: 2, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2958', '2956'],                                       tipo: 'obligatoria' },
    { id: '2964', codigo: '2964', nombre: 'Forma III',      anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2959'],                                               tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2966', codigo: '2966', nombre: 'Proyecto IV',                        anio: 2, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2962', '2955', '2956'],           tipo: 'obligatoria' },
    { id: '2967', codigo: '2967', nombre: 'Tecnología IV',                      anio: 2, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2963', '2961', '2952', '2954', '2955'], tipo: 'obligatoria' },
    { id: '2965', codigo: '2965', nombre: 'Sistemas Informáticos Proyectuales I',  anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2961', '2952', '2953', '2954', '2955'], tipo: 'obligatoria' },
    { id: '2968', codigo: '2968', nombre: 'Historia y Crítica III',             anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2960', '2952', '2953', '2954', '2956'], tipo: 'obligatoria' },

    // ── 3° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2970', codigo: '2970', nombre: 'Proyecto V',                          anio: 3, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2966', '2964', '2958', '2960', '2961'], tipo: 'obligatoria' },
    { id: '2971', codigo: '2971', nombre: 'Tecnología V',                        anio: 3, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2967', '2957', '2960', '2961'], tipo: 'obligatoria' },
    { id: '2969', codigo: '2969', nombre: 'Sistemas Informáticos Proyectuales II', anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2965', '2957', '2958', '2959', '2960'], tipo: 'obligatoria' },
    { id: '2972', codigo: '2972', nombre: 'Historia y Crítica IV',               anio: 3, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2968', '2957', '2958', '2959', '2961'], tipo: 'obligatoria' },

    // ── 3° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2973', codigo: '2973', nombre: 'Proyecto VI',   anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2970', '2963'],           tipo: 'obligatoria' },
    { id: '2974', codigo: '2974', nombre: 'Tecnología VI', anio: 3, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2971', '2962', '2964'],   tipo: 'obligatoria' },
    { id: '2975', codigo: '2975', nombre: 'Forma IV',      anio: 3, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2964', '2962', '2963'],   tipo: 'obligatoria' },

    // ── 4° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2977', codigo: '2977', nombre: 'Proyecto VII',       anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2971', '2972', '2973'],         tipo: 'obligatoria' },
    { id: '2978', codigo: '2978', nombre: 'Tecnología VII',     anio: 4, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2970', '2972', '2974'],         tipo: 'obligatoria' },
    { id: '2979', codigo: '2979', nombre: 'Forma V',            anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2970', '2971', '2972', '2975'], tipo: 'obligatoria' },
    { id: '2980', codigo: '2980', nombre: 'Historia y Crítica V', anio: 4, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2970', '2971', '2972'],       tipo: 'obligatoria' },

    // ── 4° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2981', codigo: '2981', nombre: 'Proyecto VIII',       anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2974', '2975', '2977'],         tipo: 'obligatoria' },
    { id: '2982', codigo: '2982', nombre: 'Tecnología VIII',     anio: 4, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2973', '2975', '2978'],         tipo: 'obligatoria' },
    { id: '2983', codigo: '2983', nombre: 'Forma VI',            anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2973', '2974', '2979'],         tipo: 'obligatoria' },
    { id: '2984', codigo: '2984', nombre: 'Historia y Crítica VI', anio: 4, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2973', '2974', '2975', '2980'], tipo: 'obligatoria' },

    // ── 5° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '2985', codigo: '2985', nombre: 'Proyecto IX',          anio: 5, cuatrimestre: 1, horasSemanales: 8, correlativas: ['2978', '2979', '2980', '2981'], tipo: 'obligatoria' },
    { id: '2986', codigo: '2986', nombre: 'Urbanismo I',          anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'obligatoria' },
    { id: '2987', codigo: '2987', nombre: 'Gestión I',            anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'obligatoria' },
    { id: '2988', codigo: '2988', nombre: 'Práctica Profesional I', anio: 5, cuatrimestre: 1, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'obligatoria' },

    // ── 5° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '2989', codigo: '2989', nombre: 'Proyecto X',             anio: 5, cuatrimestre: 2, horasSemanales: 8, correlativas: ['2981', '2982', '2983', '2984', '2985'], tipo: 'obligatoria' },
    { id: '2990', codigo: '2990', nombre: 'Urbanismo II',           anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2981', '2982', '2983', '2984', '2986'], tipo: 'obligatoria' },
    { id: '2991', codigo: '2991', nombre: 'Gestión II',             anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2981', '2982', '2983', '2984', '2987'], tipo: 'obligatoria' },
    { id: '2992', codigo: '2992', nombre: 'Práctica Profesional II', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'],         tipo: 'obligatoria' },
    { id: '2993', codigo: '2993', nombre: 'Espacio Curricular Optativo I',  anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_slot' },
    { id: '2994', codigo: '2994', nombre: 'Espacio Curricular Optativo II', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_slot' },

    // ── 6° Año ────────────────────────────────────────────────────────────
    { id: '2995', codigo: '2995', nombre: 'Proyecto Final de Carrera', anio: 6, cuatrimestre: 1, horasSemanales: 12, correlativas: ['2989', '2990', '2992', '2993'], tipo: 'obligatoria' },

    // ── Electivas Disponibles ──────────────────────────────────────────────
    { id: '3941', codigo: '3941', nombre: 'Desarrollo Urbano Sustentable',        anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_opcion' },
    { id: '3942', codigo: '3942', nombre: 'Paisaje, Arquitectura y Tecnologías I', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_opcion' },
    { id: '3943', codigo: '3943', nombre: 'Paisaje, Arquitectura y Tecnologías II', anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_opcion' },
    { id: '3944', codigo: '3944', nombre: 'Programas Urbanos Especiales',          anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_opcion' },
    { id: '3945', codigo: '3945', nombre: 'Teoría y Crítica',                      anio: 5, cuatrimestre: 2, horasSemanales: 4, correlativas: ['2977', '2978', '2979', '2980'], tipo: 'electiva_opcion' },

    // ── Conocimientos Transversales ────────────────────────────────────────
    { id: '901',  codigo: '901',  nombre: 'Inglés Transversal Nivel I',    anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],      tipo: 'transversal' },
    { id: '902',  codigo: '902',  nombre: 'Inglés Transversal Nivel II',   anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['901'], tipo: 'transversal' },
    { id: '903',  codigo: '903',  nombre: 'Inglés Transversal Nivel III',  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['902'], tipo: 'transversal' },
    { id: '904',  codigo: '904',  nombre: 'Inglés Transversal Nivel IV',   anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['903'], tipo: 'transversal' },
    { id: '911',  codigo: '911',  nombre: 'Computación Transversal Nivel I',  anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [],       tipo: 'transversal' },
    { id: '912',  codigo: '912',  nombre: 'Computación Transversal Nivel II', anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['911'],  tipo: 'transversal' },
  ],
};
