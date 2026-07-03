import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import { Award } from 'lucide-react';
import type { MateriaNodeData } from '../types';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

type MateriaNodeType = Node<MateriaNodeData, 'materia'>;

const TIPO_BADGE: Partial<Record<string, string>> = {
  optativa:      'OPT',
  electiva_slot: 'ELT',
  transversal:   'TRV',
};

export function MateriaNode({ data, selected }: NodeProps<MateriaNodeType>) {
  const { theme } = useTheme();
  const EC = getEstadoColors(theme);
  const c = EC[data.estado];
  const badge = TIPO_BADGE[data.tipo];

  return (
    <div
      className={`materia-node${data.simApproved ? ' sim-approved' : ''}`}
      style={{
        borderColor: c.border,
        background: c.bg,
        outline: selected ? `2px solid ${c.border}` : 'none',
        outlineOffset: 2,
      }}
    >
      <Handle type="target" position={Position.Left} style={{ opacity: 0, width: 4, height: 4, minWidth: 0, minHeight: 0, pointerEvents: 'none' }} />

      <div className="mn-accent" style={{ background: c.border }} />

      {data.simApproved && <div className="mn-sim-badge">SIM</div>}

      {data.tituloIntermedio && (
        <div
          className="mn-titint-badge"
          title="Cuenta para el Título Intermedio"
        >
          <Award size={11} />
        </div>
      )}

      {badge && (
        <div className="mn-header">
          <span className="mn-badge" style={{ borderColor: c.border, color: c.border }}>{badge}</span>
        </div>
      )}
      <div className="mn-nombre" style={{ color: c.text }}>{data.nombre}</div>

      <Handle type="source" position={Position.Right} style={{ opacity: 0, width: 4, height: 4, minWidth: 0, minHeight: 0, pointerEvents: 'none' }} />
    </div>
  );
}
