import { useState, useMemo } from 'react';
import type { Carrera, EstadoMateria, MateriaProgreso, ProgresoPerfil } from '../types';
import { Header } from './Header';
import { MapaView } from './MapaView';
import { TablaView } from './TablaView';
import { MateriaPanel } from './MateriaPanel';
import { useProgreso } from '../hooks/useProgreso';
import { getEstadoEfectivo } from '../utils/estados';
import { validateImport } from '../utils/validateImport';

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

  const selectedMateria = selectedId
    ? (carrera.materias.find(m => m.id === selectedId) ?? null)
    : null;

  function handleExport() {
    const data = {
      version: '1',
      carreraId: carrera.id,
      carreraNombre: carrera.nombre,
      plan: carrera.plan,
      exportedAt: new Date().toISOString(),
      progreso,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `unlam-progreso-${carrera.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportFile(file: File) {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const raw = JSON.parse(e.target!.result as string) as unknown;
        const result = validateImport(raw, carrera.id);
        if (!result.ok) {
          alert(`Error al importar: ${result.error}`);
          return;
        }
        if (!window.confirm('¿Importar este progreso? Esto reemplazará tu progreso actual en esta carrera.')) return;
        importProgreso(result.progreso);
      } catch {
        alert('El archivo no es un JSON válido.');
      }
    };
    reader.readAsText(file);
  }

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
        onExport={handleExport}
        onImportFile={handleImportFile}
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
              showCuatrimestre={!carrera.cuatrimestreEstimado}
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
