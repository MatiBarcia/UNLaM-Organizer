import { useState, useCallback, type ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import type { EstadoMateria, Materia, MateriaProgreso, ProgresoPerfil } from '../types';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

interface TablaViewProps {
  materias: Materia[];
  progreso: ProgresoPerfil;
  estadosEfectivos: Record<string, EstadoMateria>;
  onSelectMateria: (id: string) => void;
  onSetEstado: (id: string, estado: MateriaProgreso['estado']) => void;
  onRemoveMateria: (id: string) => void;
  onUpdateGrades: (
    id: string,
    updates: Pick<MateriaProgreso, 'notaParcial1' | 'notaParcial2' | 'notaFinal'>,
  ) => void;
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
}

function MateriaRow({ materia, progreso, estado, onSetEstado, onRemove, onUpdateGrades, onSelect }: RowProps) {
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
    <tr className={`tabla-row estado-${estado}`}>
      <td className="td-code" style={{ color: c.text }}>{materia.codigo}</td>
      <td className="td-nombre">
        <button className="td-nombre-btn" onClick={onSelect}>{materia.nombre}</button>
        {materia.esAnual && <span className="row-badge-anual">Anual</span>}
      </td>
      <td className="td-center">{materia.anio}°</td>
      <td className="td-center">{materia.cuatrimestre}°</td>
      <td className="td-center">{materia.horasSemanales}</td>
      <td className="td-tipo">{TIPO_LABEL[materia.tipo] ?? materia.tipo}</td>
      <td className="td-estado">
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
      <td className="td-grade">
        {hasGrades ? (
          <input type="number" min="0" max="10" step="0.5" className="grade-input"
            value={p1} onChange={e => setP1(e.target.value)} onBlur={saveGrades} placeholder="—" />
        ) : <span className="grade-placeholder">—</span>}
      </td>
      <td className="td-grade">
        {hasGrades ? (
          <input type="number" min="0" max="10" step="0.5" className="grade-input"
            value={p2} onChange={e => setP2(e.target.value)} onBlur={saveGrades} placeholder="—" />
        ) : <span className="grade-placeholder">—</span>}
      </td>
      <td className="td-grade">
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
  onSelectMateria,
  onSetEstado,
  onRemoveMateria,
  onUpdateGrades,
}: TablaViewProps) {
  const { theme } = useTheme();
  const EC = getEstadoColors(theme);
  const [query, setQuery] = useState('');
  const [filterEstado, setFilterEstado] = useState<EstadoMateria | null>(null);
  const [filterAnio, setFilterAnio] = useState<number | null>(null);

  const toggleEstado = useCallback((e: EstadoMateria) => {
    setFilterEstado(prev => (prev === e ? null : e));
  }, []);

  const toggleAnio = useCallback((a: number) => {
    setFilterAnio(prev => (prev === a ? null : a));
  }, []);

  const filtered = materias.filter(m => {
    if (m.tipo === 'electiva_opcion') return false;
    if (query) {
      const q = query.toLowerCase();
      if (!m.nombre.toLowerCase().includes(q) && !m.codigo.includes(q)) return false;
    }
    if (filterEstado && estadosEfectivos[m.id] !== filterEstado) return false;
    if (filterAnio !== null && m.anio !== filterAnio) return false;
    return true;
  });

  const trackable = materias.filter(m => m.tipo !== 'electiva_opcion');
  const counts = {
    aprobadas: trackable.filter(m => estadosEfectivos[m.id] === 'aprobada').length,
    regularizadas: trackable.filter(m => estadosEfectivos[m.id] === 'regularizada').length,
    cursando: trackable.filter(m => estadosEfectivos[m.id] === 'cursando').length,
    disponibles: trackable.filter(m => estadosEfectivos[m.id] === 'disponible').length,
    bloqueadas: trackable.filter(m => estadosEfectivos[m.id] === 'bloqueada').length,
    total: trackable.length,
  };

  return (
    <div className="tabla-wrap">
      {/* Filters */}
      <div className="tabla-filters">
        <div className="tabla-search">
          <Search size={15} className="search-icon" />
          <input
            className="search-input"
            placeholder="Buscar materia o código..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="filter-group">
          {ALL_ESTADOS.map(e => {
            const col = EC[e];
            return (
              <button
                key={e}
                className={`filter-btn${filterEstado === e ? ' active' : ''}`}
                style={filterEstado === e ? { background: col.bg, borderColor: col.border, color: col.text } : undefined}
                onClick={() => toggleEstado(e)}
              >
                {col.label}
              </button>
            );
          })}
        </div>
        <div className="filter-group">
          {[1, 2, 3, 4, 5].map(a => (
            <button
              key={a}
              className={`filter-btn${filterAnio === a ? ' active' : ''}`}
              onClick={() => toggleAnio(a)}
            >
              {a}° Año
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="tabla-scroll">
        <table className="tabla">
          <thead>
            <tr>
              <th>Código</th>
              <th className="th-nombre">Asignatura</th>
              <th>Año</th>
              <th>C°</th>
              <th>Hs</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Parcial 1</th>
              <th>Parcial 2</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <MateriaRow
                key={m.id}
                materia={m}
                progreso={progreso[m.id]}
                estado={estadosEfectivos[m.id] ?? 'bloqueada'}
                onSetEstado={estado => onSetEstado(m.id, estado)}
                onRemove={() => onRemoveMateria(m.id)}
                onUpdateGrades={updates => onUpdateGrades(m.id, updates)}
                onSelect={() => onSelectMateria(m.id)}
              />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={10} className="td-empty">Sin resultados</td>
              </tr>
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
      </div>
    </div>
  );
}
