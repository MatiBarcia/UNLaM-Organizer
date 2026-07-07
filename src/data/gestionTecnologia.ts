import type { Carrera } from '../types';

// Ciclo de Licenciatura (2 años) para técnicos/analistas que ya cuentan con un título
// de grado previo. El plan oficial (UNLaM) solo publica el año de cada materia, no el
// cuatrimestre; se infirió a partir de las correlativas (si depende de otra del mismo
// año, va al 2° cuatrimestre). "Trabajo Final" no tiene correlativas publicadas pero se
// ubicó al final del plan por ser la instancia de cierre de la carrera. Esta carrera no
// tiene Inglés ni Computación transversales: trae su propio Inglés I/II con carga horaria
// reducida (2 hs/semana), propia de este ciclo.
export const gestionTecnologia: Carrera = {
  id: 'lic-gestion-tecnologia',
  nombre: 'Licenciatura en Gestión de Tecnología',
  plan: '2011',
  cuatrimestreEstimado: true,
  materias: [
    // ── 1° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1314', codigo: '1314', nombre: 'Ingeniería de Software',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1315', codigo: '1315', nombre: 'Gerenciamiento de Proyectos',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1316', codigo: '1316', nombre: 'Investigación Operativa',            anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1317', codigo: '1317', nombre: 'Tópicos Avanzados de Redes',         anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1318', codigo: '1318', nombre: 'Inglés I',                           anio: 1, cuatrimestre: 1, horasSemanales: 2, correlativas: [], tipo: 'obligatoria' },
    { id: '1320', codigo: '1320', nombre: 'Explotación y Administración de BD', anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1321', codigo: '1321', nombre: 'Gestión del Conocimiento',           anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1322', codigo: '1322', nombre: 'Elementos de Economía',              anio: 1, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 1° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1319', codigo: '1319', nombre: 'Arquitectura de Software',           anio: 1, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1314'], tipo: 'obligatoria' },
    { id: '1323', codigo: '1323', nombre: 'Inglés II',                          anio: 1, cuatrimestre: 2, horasSemanales: 2, correlativas: ['1318'], tipo: 'obligatoria' },

    // ── 2° Año ─ 1° Cuatrimestre ──────────────────────────────────────────
    { id: '1324', codigo: '1324', nombre: 'Programación Avanzada I',            anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1325', codigo: '1325', nombre: 'Inteligencia de Negocios',           anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: ['1320'], tipo: 'obligatoria' },
    { id: '1326', codigo: '1326', nombre: 'Modelos de Calidad',                 anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1327', codigo: '1327', nombre: 'Legislación Aplicada a la Tecnología', anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1329', codigo: '1329', nombre: 'Gestión de Procesos de Negocios',    anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },
    { id: '1330', codigo: '1330', nombre: 'Gestión de RR.HH.',                  anio: 2, cuatrimestre: 1, horasSemanales: 4, correlativas: [], tipo: 'obligatoria' },

    // ── 2° Año ─ 2° Cuatrimestre ──────────────────────────────────────────
    { id: '1328', codigo: '1328', nombre: 'Programación Avanzada II',           anio: 2, cuatrimestre: 2, horasSemanales: 4, correlativas: ['1324'], tipo: 'obligatoria' },
    { id: '1331', codigo: '1331', nombre: 'Trabajo Final',                      anio: 2, cuatrimestre: 2, horasSemanales: 8, correlativas: [], tipo: 'obligatoria' },
  ],
};
