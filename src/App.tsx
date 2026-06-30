import { useState, useMemo } from 'react';
import type { EstadoMateria, MateriaProgreso, ProgresoPerfil } from './types';
import { Header } from './components/Header';
import { MapaView } from './components/MapaView';
import { TablaView } from './components/TablaView';
import { MateriaPanel } from './components/MateriaPanel';
import { useProgreso } from './hooks/useProgreso';
import { getEstadoEfectivo } from './utils/estados';
import { ingenieriaInformatica } from './data/ingInformatica';
import { ThemeProvider } from './context/ThemeContext';

function AppInner() {
  const [view, setView] = useState<'mapa' | 'tabla'>('mapa');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [simMode, setSimMode] = useState(false);
  const [simOverrides, setSimOverrides] = useState<ProgresoPerfil>({});

  const { progreso, setEstado, updateGrades, removeMateria } = useProgreso();
  const carrera = ingenieriaInformatica;

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
      if (!prev) setSelectedId(null); // close panel on sim enter
      else setSimOverrides({});       // clear sim state on exit
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

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
