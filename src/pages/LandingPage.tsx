import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { CARRERAS, DEPARTAMENTOS } from '../data/carreras';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="landing">
      <header className="landing-header">
        <img src="/logo.png" alt="UNLaM Organizer" className="landing-logo-img" />
        <button className="icon-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      <main className="landing-main">
        <div className="landing-hero">
          <img src="/logo.png" alt="UNLaM Organizer" className="landing-hero-logo" />
          <h1 className="landing-title">Organizador de Materias</h1>
          <p className="landing-subtitle">
            Visualizá tu plan de estudios, seguí tu progreso y planificá el camino a recibirse.
          </p>
        </div>

        <div className="landing-content">
          <p className="landing-select-label">Seleccioná tu carrera</p>

          {DEPARTAMENTOS.map(depto => {
            const carreras = CARRERAS.filter(c => c.departamento === depto);
            return (
              <section key={depto} className="landing-depto">
                <h2 className="landing-depto-title">{depto}</h2>
                <div className="landing-cards">
                  {carreras.map(carrera => (
                    <button
                      key={carrera.id}
                      className={`landing-card${carrera.disponible ? '' : ' landing-card--disabled'}`}
                      onClick={() => carrera.disponible && navigate(`/carrera/${carrera.id}`)}
                      disabled={!carrera.disponible}
                    >
                      <div className="lc-icon">
                        <BookOpen size={20} />
                      </div>
                      <div className="lc-info">
                        <span className="lc-nombre">{carrera.nombre}</span>
                        <span className="lc-plan">Plan {carrera.plan}</span>
                      </div>
                      {!carrera.disponible && (
                        <span className="lc-badge">Próximamente</span>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="landing-footer">
        Hecho por <a href="https://github.com/MatiBarcia" target="_blank" rel="noopener noreferrer">Matias Barcia</a>
      </footer>
    </div>
  );
}
