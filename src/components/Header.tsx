import { useRef, useState } from 'react';
import { Sun, Moon, FlaskConical, Download, Upload, Menu, Award, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Carrera, EstadoMateria } from '../types';
import { computeStats, computeMilestone, getEstadoColors } from '../utils/estados';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  carrera: Carrera;
  estadosEfectivos: Record<string, EstadoMateria>;
  view: 'mapa' | 'tabla';
  onViewChange: (v: 'mapa' | 'tabla') => void;
  simMode: boolean;
  onToggleSim: () => void;
  onExport: () => void;
  onImportFile: (file: File) => void;
}

export function Header({ carrera, estadosEfectivos, view, onViewChange, simMode, onToggleSim, onExport, onImportFile }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const EC = getEstadoColors(theme);
  const s = computeStats(carrera.materias, estadosEfectivos);
  const pct = s.total > 0 ? Math.round((s.aprobadas / s.total) * 100) : 0;

  const titInt = carrera.tituloIntermedio;
  const milestone = titInt ? computeMilestone(titInt.materiaIds, estadosEfectivos) : null;
  const milestoneTitle = titInt && milestone
    ? `Título intermedio — ${titInt.nombre}\n${milestone.aprobadas}/${milestone.total} materias aprobadas${milestone.completo ? ' · ¡Completo!' : ''}`
    : undefined;

  function runAndClose(fn: () => void) {
    fn();
    setMenuOpen(false);
  }

  return (
    <header className="app-header">
      <div className="hdr-left">
        <button className="hdr-logo-btn" onClick={() => navigate('/')} title="Volver al inicio">
          <img src="/logo.png" alt="UNLaM Organizer" className="hdr-logo-img" />
        </button>
        <div className="hdr-career-info">
          <span className="hdr-career-name">{carrera.nombre}</span>
          <span className="hdr-career-plan">Plan {carrera.plan}</span>
        </div>
      </div>

      <div className="hdr-center">
        <div className="hdr-progress-text">
          <span className="hdr-prog-count">{s.aprobadas}</span>
          <span className="hdr-prog-total"> / {s.total} materias aprobadas</span>
          <span className="hdr-prog-pct">({pct}%)</span>
        </div>
        <div className="hdr-progress-bar">
          <div className="hdr-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="hdr-pills">
          {s.cursando > 0 && (
            <span className="hdr-pill" style={{ background: EC.cursando.bg, color: EC.cursando.text, borderColor: EC.cursando.border }}>
              {s.cursando} cursando
            </span>
          )}
          {s.regularizadas > 0 && (
            <span className="hdr-pill" style={{ background: EC.regularizada.bg, color: EC.regularizada.text, borderColor: EC.regularizada.border }}>
              {s.regularizadas} regularizadas
            </span>
          )}
          <span className="hdr-pill" style={{ background: EC.disponible.bg, color: EC.disponible.text, borderColor: EC.disponible.border }}>
            {s.disponibles} disponibles
          </span>
          {milestone && (
            <span className="hdr-pill hdr-pill--titint" title={milestoneTitle}>
              {milestone.completo ? <Check size={11} /> : <Award size={11} />}
              Título intermedio {milestone.aprobadas}/{milestone.total}
            </span>
          )}
        </div>
      </div>

      <div className="hdr-right">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={e => {
            const f = e.target.files?.[0];
            if (f) onImportFile(f);
            e.target.value = '';
          }}
        />

        <div className="view-toggle">
          <button
            className={`view-btn${view === 'mapa' ? ' active' : ''}`}
            onClick={() => runAndClose(() => onViewChange('mapa'))}
          >
            Mapa
          </button>
          <button
            className={`view-btn${view === 'tabla' ? ' active' : ''}`}
            onClick={() => runAndClose(() => onViewChange('tabla'))}
          >
            Tabla
          </button>
        </div>

        {menuOpen && <div className="hdr-menu-backdrop" onClick={() => setMenuOpen(false)} />}

        <div className={`hdr-actions${menuOpen ? ' hdr-actions--open' : ''}`}>
          <button className="io-btn" onClick={() => runAndClose(onExport)} title="Exportar progreso a JSON">
            <Download size={15} />
            Exportar
          </button>
          <button className="io-btn" onClick={() => runAndClose(() => fileInputRef.current?.click())} title="Importar progreso desde JSON">
            <Upload size={15} />
            Importar
          </button>
          <button
            className={`sim-btn${simMode ? ' sim-btn--active' : ''}`}
            onClick={() => runAndClose(onToggleSim)}
            title={simMode ? 'Salir del modo simulación' : 'Simular avance académico'}
          >
            <FlaskConical size={15} />
            {simMode ? 'Salir simulación' : 'Simular'}
          </button>
          <button className="icon-btn" onClick={() => runAndClose(toggleTheme)} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            <span className="icon-btn-label">{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
          </button>
        </div>

        <button className="hdr-hamburger-btn" onClick={() => setMenuOpen(o => !o)} title="Más opciones">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
