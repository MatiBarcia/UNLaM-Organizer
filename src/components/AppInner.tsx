import { useState, useMemo, useRef } from 'react';
import type { Carrera, EstadoMateria, MateriaProgreso, ProgresoPerfil } from '../types';
import { Header } from './Header';
import { MapaView } from './MapaView';
import { TablaView } from './TablaView';
import { MateriaPanel } from './MateriaPanel';
import { useProgreso } from '../hooks/useProgreso';
import { getEstadoEfectivo } from '../utils/estados';

interface AppInnerProps {
  carrera: Carrera;
}

export function AppInner({ carrera }: AppInnerProps) {
  const [view, setView] = useState<'mapa' | 'tabla'>('mapa');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [simMode, setSimMode] = useState(false);
  const [simOverrides, setSimOverrides] = useState<ProgresoPerfil>({});

  const { progreso, setEstado, updateGrades, removeMateria, importProgreso } = useProgreso(carrera.id);

  const activeProgreso = useMemo<ProgresoPerfil>(
    () => (simMode ? { ...progreso, ...simOverrides } : progreso),
    [simMode, progreso, simOverrides],
  );

  const estadosEfectivos = useMemo<Record<string, EstadoMateria>>(() => {
    const result: Record<string, EstadoMateria> = {};
    for (const m of carrera.materias) {
      result[m.id] = getEstadoEfectivo(m, activeProgreso);
    }
    return result;
  }, [carrera.materias, activeProgreso]);

  const milestoneIds = useMemo(
    () => new Set(carrera.tituloIntermedio?.materiaIds ?? []),
    [carrera.tituloIntermedio],
  );

  const selectedMateria = selectedId
    ? (carrera.materias.find(m => m.id === selectedId) ?? null)
    : null;

  // El botón "Exportar" del header vive fuera del árbol de MapaView, así que se
  // comunica con él a través de este ref en vez de levantar el estado del grafo.
  const mapaExportRef = useRef<(() => void) | null>(null);

  function handleExport() {
    mapaExportRef.current?.();
  }

  function handleToggleSim() {
    setSimMode(prev => {
      if (!prev) setSelectedId(null);
      else setSimOverrides({});
      return !prev;
    });
  }

  function handleSimClick(id: string) {
    setSimOverrides(prev => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else if (!progreso[id] || progreso[id]!.estado !== 'aprobada') {
        next[id] = { estado: 'aprobada', notaParcial1: null, notaParcial2: null, notaFinal: null };
      }
      return next;
    });
  }

  return (
    <div className="app">
      <Header
        carrera={carrera}
        estadosEfectivos={estadosEfectivos}
        view={view}
        onViewChange={setView}
        simMode={simMode}
        onToggleSim={handleToggleSim}
        onExport={handleExport}
        onImportProgreso={importProgreso}
      />

      <div className="app-body">
        <div className="app-main">
          {view === 'mapa' ? (
            <MapaView
              materias={carrera.materias}
              estadosEfectivos={estadosEfectivos}
              milestoneIds={milestoneIds}
              onSelectMateria={setSelectedId}
              simMode={simMode}
              simOverrides={simOverrides}
              onSimClick={handleSimClick}
              exportRef={mapaExportRef}
              fileName={`correlativas-${carrera.id}.png`}
            />
          ) : (
            <TablaView
              materias={carrera.materias}
              progreso={progreso}
              estadosEfectivos={estadosEfectivos}
              milestoneIds={milestoneIds}
              onSelectMateria={setSelectedId}
              onSetEstado={setEstado}
              onRemoveMateria={removeMateria}
              onUpdateGrades={updateGrades}
              showCuatrimestre={!carrera.cuatrimestreEstimado}
              showAnio={!carrera.anioEstimado}
            />
          )}
        </div>

        {selectedMateria && !simMode && (
          <>
            <div className="panel-backdrop" onClick={() => setSelectedId(null)} />
            <MateriaPanel
              materia={selectedMateria}
              progreso={progreso[selectedMateria.id]}
              estadoEfectivo={estadosEfectivos[selectedMateria.id] ?? 'bloqueada'}
              todasMaterias={carrera.materias}
              estadosEfectivos={estadosEfectivos}
              tituloIntermedio={milestoneIds.has(selectedMateria.id) ? carrera.tituloIntermedio : undefined}
              onClose={() => setSelectedId(null)}
              onSetEstado={(estado: MateriaProgreso['estado']) => setEstado(selectedMateria.id, estado)}
              onRemove={() => { removeMateria(selectedMateria.id); }}
              onUpdateGrades={updates => updateGrades(selectedMateria.id, updates)}
            />
          </>
        )}
      </div>
    </div>
  );
}
