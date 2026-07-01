import type { Carrera } from '../types';
import { ingenieriaInformatica } from './ingInformatica';

export interface CarreraInfo {
  id: string;
  nombre: string;
  departamento: string;
  plan: string;
  disponible: boolean;
  datos?: Carrera;
}

export const CARRERAS: CarreraInfo[] = [
  // ── Ingeniería e Investigaciones Tecnológicas ─────────────────────────
  {
    id: 'ing-informatica',
    nombre: 'Ingeniería en Informática',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2026',
    disponible: true,
    datos: ingenieriaInformatica,
  },
  {
    id: 'ing-industrial',
    nombre: 'Ingeniería Industrial',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2024',
    disponible: false,
  },
  {
    id: 'ing-electronica',
    nombre: 'Ingeniería Electrónica',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2024',
    disponible: false,
  },
  {
    id: 'ing-civil',
    nombre: 'Ingeniería Civil',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2024',
    disponible: false,
  },

  // ── Ciencias Económicas ────────────────────────────────────────────────
  {
    id: 'contador-publico',
    nombre: 'Contador Público',
    departamento: 'Ciencias Económicas',
    plan: '2024',
    disponible: false,
  },
  {
    id: 'lic-administracion',
    nombre: 'Licenciatura en Administración',
    departamento: 'Ciencias Económicas',
    plan: '2024',
    disponible: false,
  },

  // ── Humanidades y Ciencias Sociales ───────────────────────────────────
  {
    id: 'lic-comunicacion',
    nombre: 'Licenciatura en Comunicación Social',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2024',
    disponible: false,
  },

  // ── Derecho y Ciencias Políticas ──────────────────────────────────────
  {
    id: 'abogacia',
    nombre: 'Abogacía',
    departamento: 'Derecho y Ciencias Políticas',
    plan: '2024',
    disponible: false,
  },
];

export const DEPARTAMENTOS = [...new Set(CARRERAS.map(c => c.departamento))];
