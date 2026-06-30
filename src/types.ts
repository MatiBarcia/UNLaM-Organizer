export type EstadoMateria =
  | 'bloqueada'
  | 'disponible'
  | 'cursando'
  | 'regularizada'
  | 'aprobada';

export type TipoMateria =
  | 'obligatoria'
  | 'optativa'
  | 'electiva_slot'
  | 'electiva_opcion'
  | 'transversal';

export interface Materia {
  id: string;
  codigo: string;
  nombre: string;
  anio: number;
  cuatrimestre: number;
  horasSemanales: number;
  correlativas: string[];
  tipo: TipoMateria;
  esAnual?: boolean;
}

export interface MateriaProgreso {
  estado: 'cursando' | 'regularizada' | 'aprobada';
  notaParcial1: number | null;
  notaParcial2: number | null;
  notaFinal: number | null;
}

export interface Carrera {
  id: string;
  nombre: string;
  plan: string;
  materias: Materia[];
}

export type ProgresoPerfil = Record<string, MateriaProgreso>;

export interface MateriaNodeData extends Record<string, unknown> {
  codigo: string;
  nombre: string;
  estado: EstadoMateria;
  tipo: TipoMateria;
  simApproved?: boolean;
}
