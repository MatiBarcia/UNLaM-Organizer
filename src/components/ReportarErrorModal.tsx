import { useState, type FormEvent } from 'react';
import { X, AlertTriangle, CheckCircle2, Send, LoaderCircle } from 'lucide-react';
import type { Carrera } from '../types';
import { enviarReporte } from '../lib/web3forms';

interface ReportarErrorModalProps {
  carrera: Carrera;
  onClose: () => void;
}

type Stage =
  | { kind: 'form' }
  | { kind: 'sending' }
  | { kind: 'ok' }
  | { kind: 'error'; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ReportarErrorModal({ carrera, onClose }: ReportarErrorModalProps) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  // Honeypot: un bot que complete todos los campos del form delata el envío.
  const [botcheck, setBotcheck] = useState('');
  const [stage, setStage] = useState<Stage>({ kind: 'form' });
  const [touched, setTouched] = useState(false);

  const errorNombre = nombre.trim().length < 2 ? 'Escribí tu nombre.' : null;
  const errorEmail = !EMAIL_RE.test(email.trim()) ? 'Escribí un correo válido.' : null;
  const errorMensaje = mensaje.trim().length < 10 ? 'Contanos un poco más sobre el error (mínimo 10 caracteres).' : null;
  const valido = !errorNombre && !errorEmail && !errorMensaje;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valido || stage.kind === 'sending') return;
    // Si el honeypot vino completo, cortamos sin avisar que lo detectamos.
    if (botcheck) {
      setStage({ kind: 'ok' });
      return;
    }

    setStage({ kind: 'sending' });
    const result = await enviarReporte(
      { nombre: nombre.trim(), email: email.trim(), mensaje: mensaje.trim() },
      carrera,
    );
    setStage(result.ok ? { kind: 'ok' } : { kind: 'error', message: result.error });
  }

  const enviando = stage.kind === 'sending';

  return (
    <>
      <div className="import-modal-backdrop" onClick={onClose} />
      <div className="import-modal" role="dialog" aria-modal="true" aria-labelledby="reporte-modal-title">
        <div className="import-modal-header">
          <h2 id="reporte-modal-title">Informar un error</h2>
          <button className="import-modal-close" onClick={onClose} title="Cerrar">
            <X size={18} />
          </button>
        </div>

        <div className="import-modal-body">
          {stage.kind === 'ok' ? (
            <div className="import-modal-message import-modal-message--ok">
              <CheckCircle2 size={18} />
              <p>¡Gracias! Tu reporte se envió y lo vamos a revisar.</p>
              <div className="import-modal-actions">
                <button className="io-btn io-btn--primary" onClick={onClose}>Cerrar</button>
              </div>
            </div>
          ) : (
            <form className="reporte-form" onSubmit={handleSubmit} noValidate>
              <p className="import-modal-hint">
                ¿Encontraste una correlativa mal cargada, una materia que falta o un dato incorrecto?
                Contanos y lo corregimos.
              </p>

              <div className="reporte-carrera">
                <span className="reporte-carrera-label">Reportando sobre</span>
                <span className="reporte-carrera-value">{carrera.nombre} · Plan {carrera.plan}</span>
              </div>

              <label className="reporte-field">
                <span>Nombre</span>
                <input
                  type="text"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  maxLength={80}
                  disabled={enviando}
                />
                {touched && errorNombre && <span className="reporte-field-error">{errorNombre}</span>}
              </label>

              <label className="reporte-field">
                <span>Correo</span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  maxLength={120}
                  disabled={enviando}
                />
                {touched && errorEmail && <span className="reporte-field-error">{errorEmail}</span>}
              </label>

              <label className="reporte-field">
                <span>Mensaje</span>
                <textarea
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  placeholder="Ej: Análisis Matemático II figura sin la correlativa de Álgebra I."
                  rows={5}
                  maxLength={2000}
                  disabled={enviando}
                />
                {touched && errorMensaje && <span className="reporte-field-error">{errorMensaje}</span>}
              </label>

              <input
                type="checkbox"
                name="botcheck"
                className="reporte-botcheck"
                tabIndex={-1}
                autoComplete="off"
                checked={botcheck !== ''}
                onChange={e => setBotcheck(e.target.checked ? 'on' : '')}
              />

              {stage.kind === 'error' && (
                <div className="import-modal-message import-modal-message--error">
                  <AlertTriangle size={18} />
                  <p>{stage.message}</p>
                </div>
              )}

              <div className="import-modal-actions">
                <button type="button" className="io-btn" onClick={onClose} disabled={enviando}>Cancelar</button>
                <button type="submit" className="io-btn io-btn--primary" disabled={enviando || (touched && !valido)}>
                  {enviando ? <LoaderCircle size={15} className="reporte-spinner" /> : <Send size={15} />}
                  {enviando ? 'Enviando…' : 'Enviar reporte'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
