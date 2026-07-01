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
  /** true si el cuatrimestre de cada materia fue inferido (el plan oficial solo publica el año) */
  cuatrimestreEstimado?: boolean;
  /** true si el año de cada materia también fue inferido (el plan oficial no publica ni año ni cuatrimestre) */
  anioEstimado?: boolean;
}

export type ProgresoPerfil = Record<string, MateriaProgreso>;

export interface MateriaNodeData extends Record<string, unknown> {
  codigo: string;
  nombre: string;
  estado: EstadoMateria;
  tipo: TipoMateria;
  simApproved?: boolean;
}
