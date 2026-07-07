import { useState, type ReactNode } from 'react';
import { X, Lock, CheckCircle2, BookOpen, GraduationCap, Award } from 'lucide-react';
import type { EstadoMateria, Materia, MateriaProgreso, TituloIntermedio } from '../types';
import { getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

interface MateriaPanelProps {
  materia: Materia;
  progreso: MateriaProgreso | undefined;
  estadoEfectivo: EstadoMateria;
  todasMaterias: Materia[];
  estadosEfectivos: Record<string, EstadoMateria>;
  /** Definido si esta materia cuenta para el título intermedio de la carrera */
  tituloIntermedio?: TituloIntermedio;
  onClose: () => void;
  onSetEstado: (estado: MateriaProgreso['estado']) => void;
  onRemove: () => void;
  onUpdateGrades: (updates: Pick<MateriaProgreso, 'notaParcial1' | 'notaParcial2' | 'notaFinal'>) => void;
}

const TIPO_LABELS: Record<string, string> = {
  obligatoria:   'Obligatoria',
  optativa:      'Optativa',
  electiva_slot: 'Electiva',
  transversal:   'Transversal',
};

const ESTADO_ICON: Record<EstadoMateria, ReactNode> = {
  bloqueada:    <Lock size={13} />,
  disponible:   <BookOpen size={13} />,
  cursando:     <BookOpen size={13} />,
  regularizada: <CheckCircle2 size={13} />,
  aprobada:     <GraduationCap size={13} />,
};

export function MateriaPanel({
  materia,
  progreso,
  estadoEfectivo,
  todasMaterias,
  estadosEfectivos,
  tituloIntermedio,
  onClose,
  onSetEstado,
  onRemove,
  onUpdateGrades,
}: MateriaPanelProps) {
  const { theme } = useTheme();
  const EC = getEstadoColors(theme);
  const c = EC[estadoEfectivo];
  const editable = progreso !== undefined;

  const [p1, setP1] = useState<string>(progreso?.notaParcial1?.toString() ?? '');
  const [p2, setP2] = useState<string>(progreso?.notaParcial2?.toString() ?? '');
  const [fin, setFin] = useState<string>(progreso?.notaFinal?.toString() ?? '');

  function saveGrades() {
    onUpdateGrades({
      notaParcial1: p1 === '' ? null : Number(p1),
      notaParcial2: p2 === '' ? null : Number(p2),
      notaFinal:    fin === '' ? null : Number(fin),
    });
  }

  const correqs = materia.correlativas
    .map(id => todasMaterias.find(m => m.id === id))
    .filter((m): m is Materia => m !== undefined);

  const desbloquea = todasMaterias.filter(m =>
    m.correlativas.includes(materia.id) && m.tipo !== 'electiva_opcion',
  );

  const acciones: { label: string; estado: MateriaProgreso['estado'] }[] = [
    { label: 'Cursando',     estado: 'cursando'     },
    { label: 'Regularizada', estado: 'regularizada' },
    { label: 'Aprobada',     estado: 'aprobada'     },
  ];

  return (
    <aside className="panel">
      {/* Header */}
      <div className="panel-header" style={{ borderBottomColor: c.border }}>
        <div>
          <div className="panel-codigo" style={{ color: c.text }}>{materia.codigo}</div>
          <div className="panel-nombre">{materia.nombre}</div>
        </div>
        <button className="panel-close" onClick={onClose}><X size={18} /></button>
      </div>

      {/* Meta */}
      <div className="panel-meta">
        <span>{materia.anio}° Año · {materia.cuatrimestre}° C</span>
        <span>{materia.horasSemanales} hs/sem</span>
        <span>{TIPO_LABELS[materia.tipo] ?? materia.tipo}</span>
        {materia.esAnual && <span className="panel-badge-anual">Anual</span>}
      </div>

      {/* Título intermedio */}
      {tituloIntermedio && (
        <div className="panel-titint" title={tituloIntermedio.descripcion}>
          <Award size={15} className="panel-titint-icon" />
          <div className="panel-titint-text">
            <span className="panel-titint-label">Cuenta para el título intermedio</span>
            <span className="panel-titint-name">{tituloIntermedio.nombre}</span>
          </div>
        </div>
      )}

      {/* Estado actual */}
      <div className="panel-estado-pill" style={{ background: c.bg, borderColor: c.border, color: c.text }}>
        <span className="panel-estado-icon">{ESTADO_ICON[estadoEfectivo]}</span>
        {c.label}
      </div>

      {/* Acciones de estado */}
      <div className="panel-section">
        <div className="panel-section-title">Cambiar estado</div>
        <div className="panel-actions">
          {acciones.map(a => (
            <button
              key={a.estado}
              className={`panel-action-btn${progreso?.estado === a.estado ? ' active' : ''}`}
              style={progreso?.estado === a.estado
                ? { background: EC[a.estado].bg, borderColor: EC[a.estado].border, color: EC[a.estado].text }
                : undefined}
              onClick={() => onSetEstado(a.estado)}
            >
              {a.label}
            </button>
          ))}
          {progreso && (
            <button className="panel-action-btn panel-action-remove" onClick={onRemove}>
              Quitar
            </button>
          )}
        </div>
      </div>

      {/* Notas */}
      {editable && (
        <div className="panel-section">
          <div className="panel-section-title">Notas</div>
          <div className="panel-grades">
            <label className="panel-grade-field">
              <span>Parcial 1</span>
              <input
                type="number" min="0" max="10" step="0.5"
                value={p1}
                onChange={e => setP1(e.target.value)}
                onBlur={saveGrades}
                placeholder="—"
              />
            </label>
            <label className="panel-grade-field">
              <span>Parcial 2</span>
              <input
                type="number" min="0" max="10" step="0.5"
                value={p2}
                onChange={e => setP2(e.target.value)}
                onBlur={saveGrades}
                placeholder="—"
              />
            </label>
            <label className="panel-grade-field">
              <span>Final</span>
              <input
                type="number" min="0" max="10" step="0.5"
                value={fin}
                onChange={e => setFin(e.target.value)}
                onBlur={saveGrades}
                placeholder="—"
              />
            </label>
          </div>
        </div>
      )}

      {/* Correlativas requeridas */}
      {correqs.length > 0 && (
        <div className="panel-section">
          <div className="panel-section-title">Requiere</div>
          <div className="panel-corr-list">
            {correqs.map(m => {
              const ec = EC[estadosEfectivos[m.id] ?? 'bloqueada'];
              return (
                <div key={m.id} className="panel-corr-item" style={{ borderColor: ec.border }}>
                  <span className="panel-corr-code" style={{ color: ec.text }}>{m.codigo}</span>
                  <span className="panel-corr-nombre">{m.nombre}</span>
                  <span className="panel-corr-estado" style={{ color: ec.border }}>{ec.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Desbloquea */}
      {desbloquea.length > 0 && (
        <div className="panel-section">
          <div className="panel-section-title">Desbloquea ({desbloquea.length})</div>
          <div className="panel-corr-list">
            {desbloquea.map(m => {
              const ec = EC[estadosEfectivos[m.id] ?? 'bloqueada'];
              return (
                <div key={m.id} className="panel-corr-item" style={{ borderColor: ec.border }}>
                  <span className="panel-corr-code" style={{ color: ec.text }}>{m.codigo}</span>
                  <span className="panel-corr-nombre">{m.nombre}</span>
                  <span className="panel-corr-estado" style={{ color: ec.border }}>{ec.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
