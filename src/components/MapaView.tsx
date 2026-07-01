import { useMemo, useCallback, useEffect, type MouseEvent } from 'react';
import { IconGitHub, IconInstagram, IconLinkedIn, IconX } from './SocialIcons';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { EstadoMateria, Materia, ProgresoPerfil } from '../types';
import { MateriaNode } from './MateriaNode';
import { ColumnHeaderNode } from './ColumnHeaderNode';
import { buildGraph } from '../utils/graphLayout';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

const nodeTypes = { materia: MateriaNode, 'col-header': ColumnHeaderNode };

interface MapaViewProps {
  materias: Materia[];
  estadosEfectivos: Record<string, EstadoMateria>;
  onSelectMateria: (id: string | null) => void;
  simMode: boolean;
  simOverrides: ProgresoPerfil;
  onSimClick: (id: string) => void;
}

export function MapaView({ materias, estadosEfectivos, onSelectMateria, simMode, simOverrides, onSimClick }: MapaViewProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const EC = getEstadoColors(theme);

  const { nodes: computed, edges: computedEdges } = useMemo(
    () => buildGraph(materias, estadosEfectivos),
    [materias, estadosEfectivos],
  );

  const computedWithSim = useMemo(
    () => computed.map(node => {
      if (node.type !== 'materia') return node;
      return { ...node, data: { ...node.data, simApproved: simMode && !!simOverrides[node.id] } };
    }),
    [computed, simMode, simOverrides],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(computedWithSim);
  const [edges, setEdges, onEdgesChange] = useEdgesState(computedEdges);

  useEffect(() => {
    setNodes(computedWithSim);
  }, [computedWithSim, setNodes]);

  useEffect(() => {
    setEdges(computedEdges);
  }, [computedEdges, setEdges]);

  const handleNodeClick = useCallback(
    (_: MouseEvent, node: Node) => {
      if (node.type !== 'materia') return;
      if (simMode) onSimClick(node.id);
      else onSelectMateria(node.id);
    },
    [simMode, onSimClick, onSelectMateria],
  );

  const handlePaneClick = useCallback(
    () => { if (!simMode) onSelectMateria(null); },
    [simMode, onSelectMateria],
  );

  return (
    <div className="mapa-wrap">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        nodesDraggable={false}
        nodesConnectable={false}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        minZoom={0.08}
        maxZoom={2}
      >
        <Background
          variant={BackgroundVariant.Dots}
          color={dark ? '#242424' : '#cbd5e1'}
          gap={24}
          size={1.5}
        />
        <Controls />
        <MiniMap
          nodeColor={(n: Node) => {
            const estado = (n.data as { estado: EstadoMateria }).estado;
            return EC[estado]?.border ?? '#424242';
          }}
          style={{
            background: dark ? '#101010' : '#f8fafc',
            border: `1px solid ${dark ? '#2c2c2c' : '#e2e8f0'}`,
          }}
          maskColor={dark ? 'rgba(16,16,16,0.7)' : 'rgba(241,245,249,0.75)'}
        />
      </ReactFlow>

      {simMode && (
        <div className="sim-banner">
          <span className="sim-banner-title">Modo Simulación</span>
          <span className="sim-banner-hint">Hacé clic en una materia para aprobarla · clic de nuevo para deshacer</span>
        </div>
      )}

      <div className="mapa-bottom-bar">
        <div className="mapa-legend">
          {(Object.entries(EC) as [EstadoMateria, typeof EC[EstadoMateria]][]).map(
            ([estado, c]) => (
              <div key={estado} className="legend-item">
                <div className="legend-dot" style={{ background: c.border }} />
                <span style={{ color: c.text }}>{c.label}</span>
              </div>
            ),
          )}
        </div>

        <div className="mapa-social">
          <a href="https://instagram.com/matibarcia_" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram @matibarcia_">
            <IconInstagram />
          </a>
          <a href="https://twitter.com/matibarcia_" target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter @matibarcia_">
            <IconX />
          </a>
          <a href="https://www.linkedin.com/in/matias-barcia" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href="https://github.com/MatiBarcia" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
            <IconGitHub />
          </a>
        </div>
      </div>
    </div>
  );
}
