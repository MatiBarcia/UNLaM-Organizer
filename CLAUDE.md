# CLAUDE.md

Guía para trabajar en este repo. El objetivo es dar el contexto mínimo necesario para no tener que redescubrir la estructura en cada sesión.

## Qué es

**UNLaM Organizer**: app web (SPA) para visualizar y trackear el progreso académico en las carreras de la UNLaM. Muestra el plan de estudios como un grafo de correlatividades (vista Mapa) o como tabla filtrable (vista Tabla), y persiste el avance del usuario en `localStorage`. Sin backend: todo corre en el cliente.

## Stack y comandos

- **React 19 + TypeScript + Vite 8**, ruteo con `react-router-dom` v7, grafo con `@xyflow/react` (React Flow v12), íconos `lucide-react`, parsing de PDF con `pdfjs-dist` (carga diferida).
- Deploy en **Vercel** (`vercel.json`). Analytics: `@vercel/speed-insights`.
- Comandos:
  - `npm run dev` — servidor de desarrollo (Vite).
  - `npm run build` — `tsc -b && vite build` (typecheck + build de producción).
  - `npm run lint` — `oxlint` (no ESLint).
  - `npm run preview` — sirve el build.
- **Verificación tras cambios**: correr `npx tsc -b` y `npm run lint`. Hay un warning preexistente en `src/context/ThemeContext.tsx` (react-refresh only-export-components) que no es tuyo, ignoralo.

## Arquitectura

Flujo: `main.tsx` → `App.tsx` (rutas + `ThemeProvider`) → páginas.

- **Rutas** (`App.tsx`): `/` → `LandingPage` (grilla de carreras por departamento); `/carrera/:id` → `CarreraPage`; cualquier otra → redirect a `/`.
- **`CarreraPage`** busca el `id` en `CARRERAS`; si no existe / no está disponible / no tiene `datos`, redirige a `/`. Si existe, renderiza `<AppInner carrera={...} />`.
- **`AppInner`** (`src/components/AppInner.tsx`) es el contenedor con el estado de UI (vista mapa/tabla, materia seleccionada, modo simulación, etc.) y orquesta Header + MapaView/TablaView + MateriaPanel. El progreso real vive en el hook `useProgreso`.

### Estado y datos clave

- **`useProgreso(carreraId)`** (`src/hooks/useProgreso.ts`): fuente de verdad del progreso. Persiste en `localStorage` bajo la clave **`unlam_progreso_v1_${carreraId}`**. Expone `progreso`, `setEstado`, `updateGrades`, `removeMateria`, `importProgreso`. El `progreso` solo guarda materias con estado explícito (`cursando`/`regularizada`/`aprobada`); el resto se deriva.
- **`getEstadoEfectivo(materia, progreso)`** (`src/utils/estados.ts`): calcula el estado mostrado de cada materia. Si hay progreso explícito lo usa; si no, es `disponible` cuando no tiene correlativas o todas están `regularizada`/`aprobada`, si no `bloqueada`. `AppInner` construye `estadosEfectivos: Record<id, EstadoMateria>` con esto y lo pasa a las vistas.
- **Modo simulación**: `simOverrides` (un `ProgresoPerfil` aparte) se mergea sobre `progreso` solo mientras `simMode` está activo (`activeProgreso`). No toca el progreso real ni `localStorage`. En sim se puede aprobar cualquier materia aunque no tenga las correlativas.
- Otros helpers en `estados.ts`: `ESTADO_COLORS` / `ESTADO_COLORS_LIGHT` + `getEstadoColors(theme)`, `computeStats`, `computeMilestone` (progreso del título intermedio). **Regla recurrente**: los conteos/estadísticas se calculan sobre materias `trackable` = todas menos las de tipo `electiva_opcion`.

### Tipos (`src/types.ts`)

- `EstadoMateria`: `bloqueada | disponible | cursando | regularizada | aprobada`.
- `TipoMateria`: `obligatoria | optativa | electiva_slot | electiva_opcion | transversal`.
  - `electiva_slot` = el hueco "Electiva I/II/III" del plan. `electiva_opcion` = los cursos electivos concretos que se pueden elegir; **se excluyen del grafo, de la tabla principal y de todos los conteos**.
  - `transversal` = Inglés/Computación Transversal; van en su propia sección/filtro.
- `Materia`, `MateriaProgreso` (estado + notas), `Carrera`, `TituloIntermedio`, `ProgresoPerfil = Record<string, MateriaProgreso>`, `MateriaNodeData` (datos que consume el nodo de React Flow).

### Datos de carreras (`src/data/`)

- **`carreras.ts`** exporta `CARRERAS: CarreraInfo[]` (id, nombre, departamento, plan, disponible, `datos`) y `DEPARTAMENTOS`. Es el registro central: para agregar una carrera se crea su archivo de datos y se lo importa acá.
- Cada archivo (`ingInformatica.ts`, `medicina.ts`, etc.) exporta una constante `Carrera` con el array `materias` (id = codigo normalmente, correlativas por id, tipo, año, cuatrimestre, horas) y opcionalmente `tituloIntermedio`, `cuatrimestreEstimado`, `anioEstimado`.
  - `cuatrimestreEstimado: true` → el cuatrimestre fue inferido (el plan oficial solo publica el año); la columna/filtro de cuatrimestre se ocultan.
  - `anioEstimado: true` → ni año ni cuatrimestre son oficiales; se ocultan ambas columnas.

### Vistas y componentes

- **`MapaView`** (`src/components/MapaView.tsx`): grafo con React Flow. El layout lo calcula `src/utils/graphLayout.ts` (`buildGraph` — columnas por año/cuatrimestre + heurística barycenter de Sugiyama para minimizar cruces de flechas). Nodos: `MateriaNode`, `ColumnHeaderNode`. Layout fijo (nodos no draggables).
- **`TablaView`**: tabla filtrable (búsqueda, estado, año, transversales) + edición de estado/notas inline + footer con estadísticas. Los conteos del footer y la barra de progreso del Header se calculan sobre el total real, aunque haya filtros activos.
- **`Header`**: logo, barra de progreso, toggle Mapa/Tabla, y acciones (Exportar, Importar, Simular, Ocultar aprobadas, tema). En mobile las acciones se colapsan en un menú ☰ (`.hdr-actions`). Botones solo-ícono usan la clase `icon-btn` con un `icon-btn-label` oculto en desktop que reaparece en el menú mobile.
- **`MateriaPanel`**: panel de detalle de una materia (se abre al seleccionarla; en mobile es bottom-sheet). No se muestra en modo simulación.
- **`ImportModal`**: importación de progreso vía JSON o PDF de historia académica.

### Import/Export

- **Export**: `AppInner.handleExport` descarga un JSON `{ version, carreraId, carreraNombre, plan, exportedAt, progreso }`.
- **Import**: `ImportModal` acepta el `.json` exportado o el **PDF de historia académica** de Intraconsulta.
  - `src/utils/historiaAcademica.ts`: parsea el PDF (pdfjs cargado con `import()` dinámico), reconoce materias aprobadas + notas, detecta la carrera y filtra materias de planes viejos.
  - `src/utils/validateImport.ts`: valida el JSON importado.
  - Importar **reemplaza** todo el progreso de la carrera (`importProgreso`).

## Estilos

- CSS plano global en **`src/index.css`** (la mayor parte de la app) y `src/App.css`. No hay CSS Modules ni Tailwind.
- Variables CSS de tema en `:root` (oscuro por defecto) y en el selector de tema claro: `--bg`, `--bg-1`, `--bg-2`, `--brd`, `--brd-2`, `--txt`, `--txt-2`, `--txt-3`, `--accent`, etc. Usar estas variables en vez de hardcodear colores.
- Tema en `src/context/ThemeContext.tsx` (`useTheme()` → `{ theme, toggleTheme }`), oscuro por default.
- Bloque responsive al final de `index.css` bajo `@media (max-width: 768px)`.

## Convenciones

- **Idioma**: código, nombres de dominio, comentarios y mensajes de commit en **español** (nombres de materias/carreras y términos como `aprobada`, `correlativas`, `cuatrimestre`). Seguir ese estilo.
- **Commits**: formato tipo Conventional Commits en español (`feat:`, `fix:`, `style:`, `docs:`, ...).
- **Git / PRs**: la contribución es vía fork → PR contra la branch `main` del repositorio upstream. Trabajar en una branch por feature (`feat/...`, `fix/...`, `docs/...`), no directo sobre `main`.
- No hay tests ni framework de testing configurado. La verificación es typecheck + lint + prueba manual en el navegador (`npm run dev`).

## Notas al agregar features

- Todo estado nuevo de UI suele vivir en `AppInner` y bajar por props a Header/MapaView/TablaView (no hay store global aparte de `useProgreso` + `ThemeContext`).
- Al filtrar/ocultar materias en las vistas, mantené los conteos del footer y la barra de progreso sobre el total real (calculados desde `estadosEfectivos` sobre todas las materias, no sobre las visibles).
- Recordá excluir `electiva_opcion` de conteos y del layout, y tratar `transversal` como sección aparte.
