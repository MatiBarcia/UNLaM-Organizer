import { useState, useMemo } from 'react';
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

  const { progreso, setEstado, updateGrades, removeMateria } = useProgreso(carrera.id);

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

  const selectedMateria = selectedId
    ? (carrera.materias.find(m => m.id === selectedId) ?? null)
    : null;

  function handleToggleSim() {
    setSimMode(prev => {
      if (!prev) setSelectedId(null);
      else setSimOverrides({});
      return !prev;
    });
  }

  function handleSimClick(id: string) {
    if (estadosEfectivos[id] === 'bloqueada') return;
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
      />

      <div className="app-body">
        <div className="app-main">
          {view === 'mapa' ? (
            <MapaView
              materias={carrera.materias}
              estadosEfectivos={estadosEfectivos}
              onSelectMateria={setSelectedId}
              simMode={simMode}
              simOverrides={simOverrides}
              onSimClick={handleSimClick}
            />
          ) : (
            <TablaView
              materias={carrera.materias}
              progreso={progreso}
              estadosEfectivos={estadosEfectivos}
              onSelectMateria={setSelectedId}
              onSetEstado={setEstado}
              onRemoveMateria={removeMateria}
              onUpdateGrades={updateGrades}
            />
          )}
        </div>

        {selectedMateria && !simMode && (
          <MateriaPanel
            materia={selectedMateria}
            progreso={progreso[selectedMateria.id]}
            estadoEfectivo={estadosEfectivos[selectedMateria.id] ?? 'bloqueada'}
            todasMaterias={carrera.materias}
            estadosEfectivos={estadosEfectivos}
            onClose={() => setSelectedId(null)}
            onSetEstado={(estado: MateriaProgreso['estado']) => setEstado(selectedMateria.id, estado)}
            onRemove={() => { removeMateria(selectedMateria.id); }}
            onUpdateGrades={updates => updateGrades(selectedMateria.id, updates)}
          />
        )}
      </div>
    </div>
  );
}
