import { useState, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Landmark, Scale, Users, Cpu, HeartPulse, ArrowLeft, Sun, Moon } from 'lucide-react';
import { CARRERAS, DEPARTAMENTOS } from '../data/carreras';
import { useTheme } from '../context/ThemeContext';

// Cada departamento es una "ficha" de color propio, como las solapas de una
// carpeta de archivo — el color no decora, identifica la categoría.
const DEPTO_META: Record<string, { icon: React.ReactNode; color: string }> = {
  'Ingeniería e Investigaciones Tecnológicas': { icon: <Cpu size={20} />, color: '#3a8f97' },
  'Salud': { icon: <HeartPulse size={20} />, color: '#c15f45' },
  'Ciencias Económicas': { icon: <Landmark size={20} />, color: '#b58f3a' },
  'Humanidades y Ciencias Sociales': { icon: <Users size={20} />, color: '#9c4f68' },
  'Derecho y Ciencias Políticas': { icon: <Scale size={20} />, color: '#4a6fa0' },
};

function withDeptColor(color: string | undefined): CSSProperties {
  return { '--dept-color': color } as CSSProperties;
}

export function LandingPage() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [selectedDepto, setSelectedDepto] = useState<string | null>(null);
  const carrerasDelDepto = selectedDepto ? CARRERAS.filter(c => c.departamento === selectedDepto) : [];

  return (
    <div className="landing">
      <header className="landing-header">
        <span className="landing-brand-text">UNLaM</span>
        <img src="/logo.png" alt="UNLaM Organizer" className="landing-logo-img" />
        <button className="icon-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      <main className="landing-main">
        <div className="landing-hero">
          <h1 className="landing-title">Organizá tu carrera a tu gusto</h1>
          <p className="landing-subtitle">
            Visualizá tus correlativas, seguí tu progreso materia por materia y planificá cada
            cuatrimestre hasta recibirte.
          </p>
        </div>

        <div className="landing-content">
          {!selectedDepto ? (
            <div key="deptos" className="landing-step">
              <p className="landing-select-label">Elegí tu departamento</p>
              <div className="dept-tabs">
                {DEPARTAMENTOS.map((depto, i) => {
                  const meta = DEPTO_META[depto];
                  const count = CARRERAS.filter(c => c.departamento === depto).length;
                  return (
                    <button
                      key={depto}
                      className="dept-tab"
                      style={withDeptColor(meta?.color)}
                      onClick={() => setSelectedDepto(depto)}
                    >
                      <div className="dept-tab-top">
                        <span className="dept-tab-index">{String(i + 1).padStart(2, '0')}</span>
                        <span className="dept-tab-icon">{meta?.icon ?? <BookOpen size={20} />}</span>
                      </div>
                      <span className="dept-tab-name">{depto}</span>
                      <span className="dept-tab-count">{count} carrera{count === 1 ? '' : 's'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div key={selectedDepto} className="landing-step" style={withDeptColor(DEPTO_META[selectedDepto]?.color)}>
              <div className="landing-crumb">
                <button className="landing-back" onClick={() => setSelectedDepto(null)}>
                  <ArrowLeft size={15} /> Volver
                </button>
                <h2 className="landing-depto-title">{selectedDepto}</h2>
                <span className="landing-crumb-count">
                  {carrerasDelDepto.length} carrera{carrerasDelDepto.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="career-list">
                {carrerasDelDepto.map((carrera, i) => (
                  <button
                    key={carrera.id}
                    className={`career-row${carrera.disponible ? '' : ' career-row--disabled'}`}
                    style={{ animationDelay: `${i * 45}ms` }}
                    onClick={() => carrera.disponible && navigate(`/carrera/${carrera.id}`)}
                    disabled={!carrera.disponible}
                  >
                    <span className="career-index">{String(i + 1).padStart(2, '0')}</span>
                    <BookOpen size={16} className="career-icon" />
                    <span className="career-name">{carrera.nombre}</span>
                    <span className="career-leader" aria-hidden="true" />
                    <span className="career-plan">Plan {carrera.plan}</span>
                    {!carrera.disponible && <span className="career-badge">Próximamente</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="landing-footer">
        Hecho por <a href="https://www.linkedin.com/in/matias-barcia" target="_blank" rel="noopener noreferrer">Matias Barcia</a>
      </footer>
    </div>
  );
}
