import { useState } from 'react';
import { X, Upload, AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { Carrera, ProgresoPerfil } from '../types';
import { validateImport } from '../utils/validateImport';
import { procesarHistoriaAcademica, type MateriaReconocida, type MateriaIgnorada } from '../utils/historiaAcademica';

interface ImportModalProps {
  carrera: Carrera;
  onClose: () => void;
  onImport: (progreso: ProgresoPerfil) => void;
}

type Stage =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'confirm-json'; progreso: ProgresoPerfil; count: number }
  | { kind: 'confirm-pdf'; progreso: ProgresoPerfil; reconocidas: MateriaReconocida[]; ignoradas: MateriaIgnorada[] };

export function ImportModal({ carrera, onClose, onImport }: ImportModalProps) {
  const [stage, setStage] = useState<Stage>({ kind: 'idle' });

  async function handleFile(file: File) {
    const esJson = file.name.toLowerCase().endsWith('.json') || file.type === 'application/json';
    const esPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';

    if (esJson) {
      setStage({ kind: 'loading' });
      try {
        const raw = JSON.parse(await file.text()) as unknown;
        const result = validateImport(raw, carrera.id);
        if (!result.ok) {
          setStage({ kind: 'error', message: result.error });
          return;
        }
        setStage({ kind: 'confirm-json', progreso: result.progreso, count: Object.keys(result.progreso).length });
      } catch {
        setStage({ kind: 'error', message: 'El archivo no es un JSON válido.' });
      }
      return;
    }

    if (esPdf) {
      setStage({ kind: 'loading' });
      const result = await procesarHistoriaAcademica(file, carrera);
      if (!result.ok) {
        setStage({ kind: 'error', message: result.error });
        return;
      }
      setStage({ kind: 'confirm-pdf', progreso: result.progreso, reconocidas: result.reconocidas, ignoradas: result.ignoradas });
      return;
    }

    setStage({ kind: 'error', message: 'Formato no soportado. Subí un PDF de tu historia académica o un .json exportado desde esta app.' });
  }

  function handleConfirm() {
    if (stage.kind === 'confirm-json' || stage.kind === 'confirm-pdf') {
      onImport(stage.progreso);
      onClose();
    }
  }

  return (
    <>
      <div className="import-modal-backdrop" onClick={onClose} />
      <div className="import-modal" role="dialog" aria-modal="true" aria-labelledby="import-modal-title">
        <div className="import-modal-header">
          <h2 id="import-modal-title">Importar progreso</h2>
          <button className="import-modal-close" onClick={onClose} title="Cerrar">
            <X size={18} />
          </button>
        </div>

        <div className="import-modal-body">
          {stage.kind === 'idle' && (
            <>
              <div className="import-modal-steps">
                <p className="import-modal-steps-title">Cómo descargar tu historia académica</p>
                <ol>
                  <li>Entrá a <a href="https://alumno2.unlam.edu.ar/" target="_blank" rel="noopener noreferrer"><strong>Intraconsulta</strong></a>.</li>
                  <li>Andá a <strong>Mi matrícula</strong>.</li>
                  <li>Abrí <strong>Historia académica</strong>.</li>
                  <li>Tocá <strong>Descargar</strong> para obtener el PDF.</li>
                </ol>
                <p className="import-modal-hint">
                  Subí ese PDF acá y reconocemos automáticamente las materias aprobadas y sus notas.
                  También podés subir un <code>.json</code> exportado antes desde esta app.
                </p>
              </div>
              <label className="import-modal-dropzone">
                <Upload size={22} />
                <span>Hacé clic para elegir el archivo (.pdf o .json)</span>
                <input
                  type="file"
                  accept=".pdf,.json"
                  style={{ display: 'none' }}
                  onChange={e => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                    e.target.value = '';
                  }}
                />
              </label>
            </>
          )}

          {stage.kind === 'loading' && (
            <div className="import-modal-loading">Leyendo el archivo…</div>
          )}

          {stage.kind === 'error' && (
            <div className="import-modal-message import-modal-message--error">
              <AlertTriangle size={18} />
              <p>{stage.message}</p>
              <button className="io-btn" onClick={() => setStage({ kind: 'idle' })}>Volver a intentar</button>
            </div>
          )}

          {stage.kind === 'confirm-json' && (
            <div className="import-modal-message import-modal-message--ok">
              <CheckCircle2 size={18} />
              <p>Se encontr{stage.count === 1 ? 'ó' : 'aron'} <strong>{stage.count}</strong> {stage.count === 1 ? 'materia' : 'materias'} con progreso guardado en el archivo.</p>
              <p className="import-modal-warning">Esto reemplazará todo tu progreso actual en esta carrera.</p>
              <div className="import-modal-actions">
                <button className="io-btn" onClick={onClose}>Cancelar</button>
                <button className="io-btn io-btn--primary" onClick={handleConfirm}>Importar y reemplazar</button>
              </div>
            </div>
          )}

          {stage.kind === 'confirm-pdf' && (
            <div className="import-modal-message import-modal-message--ok">
              <CheckCircle2 size={18} />
              <p>Se reconocieron <strong>{stage.reconocidas.length}</strong> materias aprobadas de tu plan actual.</p>
              {stage.ignoradas.length > 0 && (
                <details className="import-modal-details">
                  <summary>{stage.ignoradas.length} registros no corresponden a este plan y se van a ignorar</summary>
                  <ul>
                    {stage.ignoradas.map((m, i) => (
                      <li key={i}>{m.codigo} — {m.nombre}</li>
                    ))}
                  </ul>
                </details>
              )}
              <p className="import-modal-warning">Esto reemplazará todo tu progreso actual en esta carrera.</p>
              <div className="import-modal-actions">
                <button className="io-btn" onClick={onClose}>Cancelar</button>
                <button className="io-btn io-btn--primary" onClick={handleConfirm}>Importar y reemplazar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
