import { useState, useCallback, type ChangeEvent } from 'react';
import { Search, SlidersHorizontal, Award } from 'lucide-react';
import type { EstadoMateria, Materia, MateriaProgreso, ProgresoPerfil } from '../types';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

interface TablaViewProps {
  materias: Materia[];
  progreso: ProgresoPerfil;
  estadosEfectivos: Record<string, EstadoMateria>;
  milestoneIds?: Set<string>;
  onSelectMateria: (id: string) => void;
  onSetEstado: (id: string, estado: MateriaProgreso['estado']) => void;
  onRemoveMateria: (id: string) => void;
  onUpdateGrades: (
    id: string,
    updates: Pick<MateriaProgreso, 'notaParcial1' | 'notaParcial2' | 'notaFinal'>,
  ) => void;
  /** false cuando el cuatrimestre de la carrera fue estimado (el plan oficial solo publica el año) */
  showCuatrimestre?: boolean;
  /** false cuando el año de la carrera también fue estimado (el plan oficial no publica ni año ni cuatrimestre) */
  showAnio?: boolean;
}

const ALL_ESTADOS: EstadoMateria[] = ['bloqueada', 'disponible', 'cursando', 'regularizada', 'aprobada'];
const TIPO_LABEL: Record<string, string> = {
  obligatoria: 'Oblig.',
  optativa: 'Opta.',
  electiva_slot: 'Electiva',
  electiva_opcion: 'Opc.',
  transversal: 'Trans.',
};

interface RowProps {
  materia: Materia;
  progreso: MateriaProgreso | undefined;
  estado: EstadoMateria;
  onSetEstado: (estado: MateriaProgreso['estado']) => void;
  onRemove: () => void;
  onUpdateGrades: (updates: Pick<MateriaProgreso, 'notaParcial1' | 'notaParcial2' | 'notaFinal'>) => void;
  onSelect: () => void;
  showCuatrimestre: boolean;
  showAnio: boolean;
  esTituloIntermedio: boolean;
}

function MateriaRow({ materia, progreso, estado, onSetEstado, onRemove, onUpdateGrades, onSelect, showCuatrimestre, showAnio, esTituloIntermedio }: RowProps) {
  const { theme } = useTheme();
  const EC = getEstadoColors(theme);
  const c = EC[estado];
  const [p1, setP1] = useState(progreso?.notaParcial1?.toString() ?? '');
  const [p2, setP2] = useState(progreso?.notaParcial2?.toString() ?? '');
  const [fin, setFin] = useState(progreso?.notaFinal?.toString() ?? '');

  function saveGrades() {
    onUpdateGrades({
      notaParcial1: p1 === '' ? null : Number(p1),
      notaParcial2: p2 === '' ? null : Number(p2),
      notaFinal:    fin === '' ? null : Number(fin),
    });
  }

  const hasGrades = progreso !== undefined;

  function handleEstadoChange(e: ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    if (val === '') onRemove();
    else onSetEstado(val as MateriaProgreso['estado']);
  }

  return (
    <tr className={`tabla-row estado-${estado} anio-${materia.anio}`}>
      <td className="td-code" style={{ color: c.text }}>{materia.codigo}</td>
      <td className="td-nombre">
        <button className="td-nombre-btn" onClick={onSelect}>{materia.nombre}</button>
        {materia.esAnual && <span className="row-badge-anual">Anual</span>}
        {esTituloIntermedio && (
          <span className="row-badge-titint" title="Cuenta para el Título Intermedio">
            <Award size={11} /> T. Int.
          </span>
        )}
      </td>
      {showAnio && <td className="td-center" data-label="Año">{materia.anio}°</td>}
      {showCuatrimestre && <td className="td-center td-secondary" data-label="C°">{materia.cuatrimestre}°</td>}
      <td className="td-center td-secondary" data-label="Hs">{materia.horasSemanales}</td>
      <td className="td-tipo td-secondary" data-label="Tipo">{TIPO_LABEL[materia.tipo] ?? materia.tipo}</td>
      <td className="td-estado" data-label="Estado">
        <select
          className="estado-select"
          value={progreso?.estado ?? ''}
          onChange={handleEstadoChange}
          style={{ borderColor: c.border, color: c.text, background: c.bg }}
        >
          <option value="">{estado === 'bloqueada' ? 'Bloqueada' : 'Disponible'}</option>
          <option value="cursando">Cursando</option>
          <option value="regularizada">Regularizada</option>
          <option value="aprobada">Aprobada</option>
        </select>
      </td>
      <td className="td-grade td-secondary" data-label="Parcial 1">
        {hasGrades ? (
          <input type="number" min="0" max="10" step="0.5" className="grade-input"
            value={p1} onChange={e => setP1(e.target.value)} onBlur={saveGrades} placeholder="—" />
        ) : <span className="grade-placeholder">—</span>}
      </td>
      <td className="td-grade td-secondary" data-label="Parcial 2">
        {hasGrades ? (
          <input type="number" min="0" max="10" step="0.5" className="grade-input"
            value={p2} onChange={e => setP2(e.target.value)} onBlur={saveGrades} placeholder="—" />
        ) : <span className="grade-placeholder">—</span>}
      </td>
      <td className="td-grade" data-label="Final">
        {hasGrades ? (
          <input type="number" min="0" max="10" step="0.5" className="grade-input"
            value={fin} onChange={e => setFin(e.target.value)} onBlur={saveGrades} placeholder="—" />
        ) : <span className="grade-placeholder">—</span>}
      </td>
    </tr>
  );
}

export function TablaView({
  materias,
  progreso,
  estadosEfectivos,
  milestoneIds,
  onSelectMateria,
  onSetEstado,
  onRemoveMateria,
  onUpdateGrades,
  showCuatrimestre = true,
  showAnio = true,
}: TablaViewProps) {
  const colSpan = 10 - (showCuatrimestre ? 0 : 1) - (showAnio ? 0 : 1);
  const { theme } = useTheme();
  const EC = getEstadoColors(theme);
  const [query, setQuery] = useState('');
  const [filterEstados, setFilterEstados] = useState<EstadoMateria[]>([]);
  const [filterAnios, setFilterAnios] = useState<(number | 'transversal')[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeFilterCount = filterEstados.length + filterAnios.length;

  const years = [...new Set(
    materias.filter(m => m.tipo !== 'transversal' && m.tipo !== 'electiva_opcion').map(m => m.anio)
  )].sort((a, b) => a - b);

  const toggleEstado = useCallback((e: EstadoMateria) => {
    setFilterEstados(prev => (prev.includes(e) ? prev.filter(x => x !== e) : [...prev, e]));
  }, []);

  const toggleAnio = useCallback((a: number | 'transversal') => {
    setFilterAnios(prev => (prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]));
  }, []);

  const matchesQuery = (m: Materia) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return m.nombre.toLowerCase().includes(q) || m.codigo.includes(q);
  };

  const yearFilters = filterAnios.filter((a): a is number => typeof a === 'number');
  const transversalSelected = filterAnios.includes('transversal');
  const showMain = filterAnios.length === 0 || yearFilters.length > 0;
  const showTransversals = filterAnios.length === 0 || transversalSelected;

  const filteredMain = showMain ? materias.filter(m => {
    if (m.tipo === 'electiva_opcion' || m.tipo === 'transversal') return false;
    if (yearFilters.length > 0 && !yearFilters.includes(m.anio)) return false;
    if (!matchesQuery(m)) return false;
    if (filterEstados.length > 0 && !filterEstados.includes(estadosEfectivos[m.id])) return false;
    return true;
  }) : [];

  const filteredTransversals = showTransversals ? materias.filter(m => {
    if (m.tipo !== 'transversal') return false;
    if (!matchesQuery(m)) return false;
    if (filterEstados.length > 0 && !filterEstados.includes(estadosEfectivos[m.id])) return false;
    return true;
  }) : [];

  const trackable = materias.filter(m => m.tipo !== 'electiva_opcion');
  const counts = {
    aprobadas: trackable.filter(m => estadosEfectivos[m.id] === 'aprobada').length,
    regularizadas: trackable.filter(m => estadosEfectivos[m.id] === 'regularizada').length,
    cursando: trackable.filter(m => estadosEfectivos[m.id] === 'cursando').length,
    disponibles: trackable.filter(m => estadosEfectivos[m.id] === 'disponible').length,
    bloqueadas: trackable.filter(m => estadosEfectivos[m.id] === 'bloqueada').length,
    total: trackable.length,
  };

  const finalGrades = trackable
    .map(m => progreso[m.id]?.notaFinal)
    .filter((n): n is number => n !== null && n !== undefined);
  const promFinal = finalGrades.length > 0
    ? (finalGrades.reduce((a, b) => a + b, 0) / finalGrades.length)
    : null;

  return (
    <div className="tabla-wrap">
      {/* Filters */}
      <div className="tabla-filters">
        <div className="tabla-filters-row">
          <div className="tabla-search">
            <Search size={15} className="search-icon" />
            <input
              className="search-input"
              placeholder="Buscar materia o código..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button
            className={`tabla-filter-toggle${filtersOpen ? ' active' : ''}`}
            onClick={() => setFiltersOpen(o => !o)}
          >
            <SlidersHorizontal size={14} />
            Filtros
            {activeFilterCount > 0 && <span className="tabla-filter-badge">{activeFilterCount}</span>}
          </button>
        </div>

        <div className={`tabla-filter-groups${filtersOpen ? ' tabla-filter-groups--open' : ''}`}>
          <div className="filter-group">
            {ALL_ESTADOS.map(e => {
              const col = EC[e];
              const active = filterEstados.includes(e);
              return (
                <button
                  key={e}
                  className={`filter-btn${active ? ' active' : ''}`}
                  style={active ? { background: col.bg, borderColor: col.border, color: col.text } : undefined}
                  onClick={() => toggleEstado(e)}
                >
                  {col.label}
                </button>
              );
            })}
          </div>
          <div className="filter-group">
            {showAnio && years.map(a => (
              <button
                key={a}
                className={`filter-btn${filterAnios.includes(a) ? ' active' : ''}`}
                onClick={() => toggleAnio(a)}
              >
                {a}° Año
              </button>
            ))}
            <button
              className={`filter-btn${transversalSelected ? ' active' : ''}`}
              onClick={() => toggleAnio('transversal')}
            >
              Transversales
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="tabla-scroll">
        <table className="tabla">
          <thead>
            <tr>
              <th>Código</th>
              <th className="th-nombre">Asignatura</th>
              {showAnio && <th>Año</th>}
              {showCuatrimestre && <th>C°</th>}
              <th>Hs</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Parcial 1</th>
              <th>Parcial 2</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            {filteredMain.map(m => (
              <MateriaRow
                key={m.id}
                materia={m}
                progreso={progreso[m.id]}
                estado={estadosEfectivos[m.id] ?? 'bloqueada'}
                onSetEstado={estado => onSetEstado(m.id, estado)}
                onRemove={() => onRemoveMateria(m.id)}
                onUpdateGrades={updates => onUpdateGrades(m.id, updates)}
                onSelect={() => onSelectMateria(m.id)}
                showCuatrimestre={showCuatrimestre}
                showAnio={showAnio}
                esTituloIntermedio={milestoneIds?.has(m.id) ?? false}
              />
            ))}
            {filteredMain.length === 0 && filteredTransversals.length === 0 && (
              <tr>
                <td colSpan={colSpan} className="td-empty">Sin resultados</td>
              </tr>
            )}
            {filteredTransversals.length > 0 && (
              <>
                {filteredMain.length > 0 && (
                  <tr className="tabla-section-sep">
                    <td colSpan={colSpan}>Transversales</td>
                  </tr>
                )}
                {filteredTransversals.map(m => (
                  <MateriaRow
                    key={m.id}
                    materia={m}
                    progreso={progreso[m.id]}
                    estado={estadosEfectivos[m.id] ?? 'bloqueada'}
                    onSetEstado={estado => onSetEstado(m.id, estado)}
                    onRemove={() => onRemoveMateria(m.id)}
                    onUpdateGrades={updates => onUpdateGrades(m.id, updates)}
                    onSelect={() => onSelectMateria(m.id)}
                    showCuatrimestre={showCuatrimestre}
                    showAnio={showAnio}
                    esTituloIntermedio={milestoneIds?.has(m.id) ?? false}
                  />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer stats */}
      <div className="tabla-footer">
        <div className="footer-stat">
          <span className="fs-label">Total</span>
          <span className="fs-val">{counts.total}</span>
        </div>
        {(
          [
            ['Aprobadas',     counts.aprobadas,     EC.aprobada],
            ['Regularizadas', counts.regularizadas, EC.regularizada],
            ['Cursando',      counts.cursando,      EC.cursando],
            ['Disponibles',   counts.disponibles,   EC.disponible],
            ['Bloqueadas',    counts.bloqueadas,    EC.bloqueada],
          ] as [string, number, typeof EC[EstadoMateria]][]
        ).map(([label, val, col]) => (
          <div key={label} className="footer-stat" style={{ borderColor: col.border }}>
            <span className="fs-label" style={{ color: col.text }}>{label}</span>
            <span className="fs-val" style={{ color: col.border }}>{val}</span>
          </div>
        ))}
        <div className="footer-stat footer-prom">
          <span className="fs-label">Prom. Final</span>
          <span className="fs-val">{promFinal !== null ? promFinal.toFixed(2) : '—'}</span>
        </div>
      </div>
    </div>
  );
}
