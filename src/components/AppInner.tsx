import { useState, useMemo, useRef } from 'react';
import type { Carrera, EstadoMateria, Materia, MateriaProgreso, ProgresoPerfil } from '../types';
import { Header } from './Header';
import { MapaView } from './MapaView';
import { TablaView } from './TablaView';
import { MateriaPanel } from './MateriaPanel';
import { useProgreso } from '../hooks/useProgreso';
import { getEstadoEfectivo, getNombreMostrado } from '../utils/estados';

interface AppInnerProps {
  carrera: Carrera;
}

export function AppInner({ carrera }: AppInnerProps) {
  const [view, setView] = useState<'mapa' | 'tabla'>('mapa');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [simMode, setSimMode] = useState(false);
  const [simOverrides, setSimOverrides] = useState<ProgresoPerfil>({});
  const [hideApproved, setHideApproved] = useState(false);
  // Materias que se aprobaron mientras "ocultar aprobadas" ya estaba activo: se
  // exceptúan del ocultamiento para que no desaparezcan de golpe apenas se marcan.
  const [mantenerVisibles, setMantenerVisibles] = useState<Set<string>>(new Set());

  const { progreso, setEstado, updateGrades, removeMateria, importProgreso, setElectiva } = useProgreso(carrera.id);

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

  // Ids a ocultar del Mapa/Tabla: aprobadas, salvo las recién aprobadas mientras el
  // filtro ya estaba activo (esas se quedan a la vista hasta que se apague y prenda).
  const hiddenIds = useMemo(() => {
    if (!hideApproved) return new Set<string>();
    const ids = new Set<string>();
    for (const m of carrera.materias) {
      if (estadosEfectivos[m.id] === 'aprobada' && !mantenerVisibles.has(m.id)) ids.add(m.id);
    }
    return ids;
  }, [hideApproved, carrera.materias, estadosEfectivos, mantenerVisibles]);

  const selectedMateria = selectedId
    ? (carrera.materias.find(m => m.id === selectedId) ?? null)
    : null;

  // Un electiva_slot (Electiva I/II/III) no trackea su propio estado/notas: apunta a
  // la materia concreta (electiva_opcion) elegida, y el estado/notas reales viven en
  // el progreso de esa materia. Ver setElectiva en useProgreso.
  const isElectivaSlot = selectedMateria?.tipo === 'electiva_slot';
  const electivaId = isElectivaSlot ? progreso[selectedMateria.id]?.electivaId : undefined;
  const targetId = electivaId ?? selectedMateria?.id;
  const panelProgreso = isElectivaSlot
    ? (electivaId ? progreso[electivaId] : undefined)
    : (selectedMateria ? progreso[selectedMateria.id] : undefined);
  const opcionesElectiva = isElectivaSlot
    ? (selectedMateria?.opciones ?? []).map(id => carrera.materias.find(m => m.id === id)).filter((m): m is Materia => m !== undefined)
    : undefined;
  // Una misma materia concreta no puede cubrir dos cupos a la vez: se bloquea en el
  // selector si ya está elegida en otro cupo de electiva.
  const opcionesTomadas = isElectivaSlot
    ? new Set(
        carrera.materias
          .filter(m => m.tipo === 'electiva_slot' && m.id !== selectedMateria?.id)
          .map(m => progreso[m.id]?.electivaId)
          .filter((id): id is string => id !== undefined),
      )
    : undefined;
  // El panel y el nodo del mapa muestran el nombre de la materia concreta elegida (si
  // ya se eligió una) en vez del nombre genérico del cupo.
  const materiaPanel = selectedMateria
    ? { ...selectedMateria, nombre: getNombreMostrado(selectedMateria, progreso, carrera.materias) }
    : null;

  // El botón "Exportar" del header vive fuera del árbol de MapaView, así que se
  // comunica con él a través de este ref en vez de levantar el estado del grafo.
  const mapaExportRef = useRef<(() => void) | null>(null);

  function handleExport() {
    mapaExportRef.current?.();
  }

  function handleToggleHideApproved() {
    setHideApproved(prev => {
      if (!prev) setMantenerVisibles(new Set()); // arranca ocultando todo lo ya aprobado, sin excepciones
      return !prev;
    });
  }

  // displayId: la materia tal como se ve en el Mapa/Tabla (el cupo de electiva, si
  // corresponde) — es la que se exceptúa del ocultamiento. targetId: donde vive de
  // verdad el progreso (la electiva concreta elegida, si corresponde).
  function handleSetEstado(displayId: string, targetId: string, estado: MateriaProgreso['estado']) {
    setEstado(targetId, estado);
    if (hideApproved && estado === 'aprobada') {
      setMantenerVisibles(prev => (prev.has(displayId) ? prev : new Set(prev).add(displayId)));
    }
  }

  function handleToggleSim() {
    setSimMode(prev => {
      if (!prev) {
        setSelectedId(null);
        setHideApproved(false); // el modo simulación arranca mostrando todo
      } else {
        setSimOverrides({});
      }
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
        hideApproved={hideApproved}
        onToggleHideApproved={handleToggleHideApproved}
        onExport={handleExport}
        onImportProgreso={importProgreso}
      />

      <div className="app-body">
        <div className="app-main">
          {view === 'mapa' ? (
            <MapaView
              carrera={carrera}
              materias={carrera.materias}
              progreso={activeProgreso}
              estadosEfectivos={estadosEfectivos}
              milestoneIds={milestoneIds}
              onSelectMateria={setSelectedId}
              simMode={simMode}
              simOverrides={simOverrides}
              onSimClick={handleSimClick}
              hiddenIds={hiddenIds}
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
              onSetEstado={(id, estado) => handleSetEstado(id, id, estado)}
              onRemoveMateria={removeMateria}
              onUpdateGrades={updateGrades}
              showCuatrimestre={!carrera.cuatrimestreEstimado}
              showAnio={!carrera.anioEstimado}
              hiddenIds={hiddenIds}
            />
          )}
        </div>

        {selectedMateria && !simMode && (
          <>
            <div className="panel-backdrop" onClick={() => setSelectedId(null)} />
            <MateriaPanel
              key={selectedMateria.id}
              materia={materiaPanel!}
              progreso={panelProgreso}
              estadoEfectivo={estadosEfectivos[selectedMateria.id] ?? 'bloqueada'}
              todasMaterias={carrera.materias}
              estadosEfectivos={estadosEfectivos}
              tituloIntermedio={milestoneIds.has(selectedMateria.id) ? carrera.tituloIntermedio : undefined}
              opcionesElectiva={opcionesElectiva}
              opcionesTomadas={opcionesTomadas}
              electivaId={electivaId}
              onSetElectiva={opcionId => setElectiva(selectedMateria.id, opcionId)}
              onClose={() => setSelectedId(null)}
              onSetEstado={(estado: MateriaProgreso['estado']) => targetId && handleSetEstado(selectedMateria.id, targetId, estado)}
              onRemove={() => { if (targetId) removeMateria(targetId); }}
              onUpdateGrades={updates => targetId && updateGrades(targetId, updates)}
            />
          </>
        )}
      </div>
    </div>
  );
}
