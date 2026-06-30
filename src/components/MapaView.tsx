import { useMemo, useCallback, useEffect, type MouseEvent } from 'react';
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
import { buildGraph } from '../utils/graphLayout';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

const nodeTypes = { materia: MateriaNode };

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
    () => computed.map(node => ({
      ...node,
      data: { ...node.data, simApproved: simMode && !!simOverrides[node.id] },
    })),
    [computed, simMode, simOverrides],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(computedWithSim);
  const [edges, setEdges, onEdgesChange] = useEdgesState(computedEdges);

  useEffect(() => {
    setNodes(prev =>
      prev.map(node => {
        const fresh = computedWithSim.find(n => n.id === node.id);
        return fresh ? { ...node, data: fresh.data } : node;
      }),
    );
  }, [computedWithSim, setNodes]);

  useEffect(() => {
    setEdges(computedEdges);
  }, [computedEdges, setEdges]);

  const handleNodeClick = useCallback(
    (_: MouseEvent, node: Node) => {
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
        fitView
        fitViewOptions={{ padding: 0.12 }}
        minZoom={0.12}
        maxZoom={2}
      >
        <Background
          variant={BackgroundVariant.Dots}
          color={dark ? '#1e293b' : '#cbd5e1'}
          gap={24}
          size={1.5}
        />
        <Controls />
        <MiniMap
          nodeColor={(n: Node) => {
            const estado = (n.data as { estado: EstadoMateria }).estado;
            return EC[estado]?.border ?? '#475569';
          }}
          style={{
            background: dark ? '#0f172a' : '#f8fafc',
            border: `1px solid ${dark ? '#334155' : '#e2e8f0'}`,
          }}
          maskColor={dark ? 'rgba(15,23,42,0.7)' : 'rgba(241,245,249,0.75)'}
        />
      </ReactFlow>

      {simMode && (
        <div className="sim-banner">
          <span className="sim-banner-title">Modo Simulación</span>
          <span className="sim-banner-hint">Hacé clic en una materia para aprobarla · clic de nuevo para deshacer</span>
        </div>
      )}

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
    </div>
  );
}
