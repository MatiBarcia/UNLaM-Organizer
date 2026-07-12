import { useMemo, useCallback, useEffect, useRef, useState, type MouseEvent, type RefObject } from 'react';
import { Info } from 'lucide-react';
import { toPng } from 'html-to-image';
import { IconGitHub, IconInstagram, IconLinkedIn, IconX } from './SocialIcons';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  getNodesBounds,
  getViewportForBounds,
  type Node,
  type ReactFlowInstance,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { EstadoMateria, Materia, ProgresoPerfil } from '../types';
import { MateriaNode } from './MateriaNode';
import { ColumnHeaderNode } from './ColumnHeaderNode';
import { buildGraph } from '../utils/graphLayout';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

const nodeTypes = { materia: MateriaNode, 'col-header': ColumnHeaderNode };

const EXPORT_PADDING = 60;
const EXPORT_LEGEND_HEIGHT = 56;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

interface MapaViewProps {
  materias: Materia[];
  estadosEfectivos: Record<string, EstadoMateria>;
  milestoneIds?: Set<string>;
  onSelectMateria: (id: string | null) => void;
  simMode: boolean;
  simOverrides: ProgresoPerfil;
  onSimClick: (id: string) => void;
  fileName?: string;
  /** El botón "Exportar" del header dispara la exportación llamando a exportRef.current(). */
  exportRef?: RefObject<(() => void) | null>;
}

export function MapaView({ materias, estadosEfectivos, milestoneIds, onSelectMateria, simMode, simOverrides, onSimClick, fileName, exportRef }: MapaViewProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const EC = getEstadoColors(theme);
  const [legendOpen, setLegendOpen] = useState(false);
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  const { nodes: computed, edges: computedEdges } = useMemo(
    () => buildGraph(materias, estadosEfectivos, milestoneIds),
    [materias, estadosEfectivos, milestoneIds],
  );

  // Bounds of the first two years (four columns), independent of estado (so it doesn't
  // recompute on every progress change). Wide enough to still read as a graph (branching
  // across years, not just a flat list) while staying reasonably legible on a phone screen.
  const firstYearsBounds = useMemo(() => {
    const { nodes: layoutNodes } = buildGraph(materias, {});
    const xs = [...new Set(layoutNodes.map(n => n.position.x))].sort((a, b) => a - b);
    const firstFew = new Set(xs.slice(0, 3));
    let minX = Infinity;
    let maxX = -Infinity;
    let maxBottom = 0;
    for (const n of layoutNodes) {
      if (!firstFew.has(n.position.x)) continue;
      const w = (n.width as number) ?? 0;
      const h = (n.height as number) ?? 0;
      minX = Math.min(minX, n.position.x);
      maxX = Math.max(maxX, n.position.x + w);
      maxBottom = Math.max(maxBottom, n.position.y + h);
    }
    return isFinite(minX) ? { x: minX, y: 0, width: maxX - minX, height: maxBottom } : null;
  }, [materias]);

  const handleInit = useCallback((instance: ReactFlowInstance) => {
    if (isMobile && firstYearsBounds) {
      instance.fitBounds(firstYearsBounds, { padding: 0.06 });
    }
  }, [isMobile, firstYearsBounds]);

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

  const wrapRef = useRef<HTMLDivElement>(null);

  const handleExportImage = useCallback(async () => {
    const viewportEl = wrapRef.current?.querySelector<HTMLElement>('.react-flow__viewport');
    if (!viewportEl || nodes.length === 0) return;

    const bounds = getNodesBounds(nodes);
    const width = bounds.width + EXPORT_PADDING * 2;
    const height = bounds.height + EXPORT_PADDING * 2;
    const viewport = getViewportForBounds(bounds, width, height, 0.1, 2, `${EXPORT_PADDING}px`);
    const bg = dark ? '#101010' : '#f1f5f9';

    const graphDataUrl = await toPng(viewportEl, {
      width,
      height,
      // El grafo no usa las tipografías de Google Fonts (esas son de la home/header),
      // así que evitamos que intente embeberlas — solo generaría un warning por CORS.
      skipFonts: true,
      backgroundColor: bg,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    });

    // Le pegamos una franja con la referencia de colores debajo del grafo, dibujada
    // aparte en un canvas (evita re-render y no depende de que html-to-image capture
    // texto DOM con estilos externos).
    const graphImg = await loadImage(graphDataUrl);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height + EXPORT_LEGEND_HEIGHT;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(graphImg, 0, 0);

    ctx.strokeStyle = dark ? '#2c2c2c' : '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    ctx.stroke();

    const entries = Object.entries(EC) as [EstadoMateria, (typeof EC)[EstadoMateria]][];
    const dotRadius = 6;
    const gap = 10;
    const itemGap = 28;
    ctx.font = '600 14px system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    const itemWidths = entries.map(([, c]) => dotRadius * 2 + gap + ctx.measureText(c.label).width);
    const totalWidth = itemWidths.reduce((a, b) => a + b, 0) + itemGap * (entries.length - 1);

    let x = (width - totalWidth) / 2;
    const y = height + EXPORT_LEGEND_HEIGHT / 2;
    entries.forEach(([, c], i) => {
      ctx.fillStyle = c.border;
      ctx.beginPath();
      ctx.arc(x + dotRadius, y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = dark ? '#efefef' : '#0f172a';
      ctx.fillText(c.label, x + dotRadius * 2 + gap, y + 1);
      x += itemWidths[i] + itemGap;
    });

    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = fileName ?? 'correlativas.png';
    a.click();
  }, [nodes, dark, fileName, EC]);

  useEffect(() => {
    if (!exportRef) return;
    exportRef.current = handleExportImage;
    return () => { exportRef.current = null; };
  }, [exportRef, handleExportImage]);

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
    <div className="mapa-wrap" ref={wrapRef}>
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
        fitView={!isMobile}
        fitViewOptions={{ padding: 0.12 }}
        onInit={handleInit}
        minZoom={0.08}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
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
        <button
          className="legend-toggle-btn"
          onClick={() => setLegendOpen(o => !o)}
          title={legendOpen ? 'Ocultar leyenda' : 'Mostrar leyenda'}
        >
          <Info size={16} />
        </button>
        <div className={`mapa-legend${legendOpen ? ' mapa-legend--open' : ''}`}>
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
