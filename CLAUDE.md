# CLAUDE.md

Guía para trabajar en este repo. El objetivo es dar el contexto mínimo necesario para no tener que redescubrir la estructura en cada sesión.

## graphify

Este proyecto tiene un grafo de conocimiento en `graphify-out/` con god nodes, estructura de comunidades y relaciones cross-file.

Reglas:
- Para preguntas sobre el código, primero correr `graphify query "<pregunta>"` cuando exista `graphify-out/graph.json`. Usar `graphify path "<A>" "<B>"` para relaciones y `graphify explain "<concepto>"` para conceptos puntuales. Devuelven un subgrafo acotado, normalmente mucho más chico que GRAPH_REPORT.md o un grep crudo.
- Si existe `graphify-out/wiki/index.md`, usarlo para navegación amplia en vez de recorrer el código fuente directamente.
- Leer `graphify-out/GRAPH_REPORT.md` solo para una revisión de arquitectura amplia, o cuando query/path/explain no muestren suficiente contexto.
- Después de modificar código, correr `graphify update .` para mantener el grafo al día (solo AST, sin costo de API).

## Qué es

**UNLaM Organizer**: app web (SPA) para visualizar y trackear el progreso académico en las carreras de la UNLaM. Muestra el plan de estudios como un grafo de correlatividades (vista Mapa) o como tabla filtrable (vista Tabla), y persiste el avance del usuario en `localStorage`. No requiere backend propio: opcionalmente, el usuario puede loguearse con Google para sincronizar su progreso entre dispositivos guardándolo en un archivo oculto de su propio Google Drive (`appDataFolder`) — ver sección Auth / Sync.

## Stack y comandos

- **React 19 + TypeScript + Vite 8**, ruteo con `react-router-dom` v7, grafo con `@xyflow/react` (React Flow v12), íconos `lucide-react`, parsing de PDF con `pdfjs-dist` (carga diferida), export de imagen con `html-to-image`. PWA con `vite-plugin-pwa` (ver sección PWA).
- Deploy en **Vercel** (`vercel.json`). Analytics: `@vercel/speed-insights` + `@vercel/analytics`.
- Comandos:
  - `npm run dev` — servidor de desarrollo (Vite).
  - `npm run build` — `tsc -b && vite build` (typecheck + build de producción).
  - `npm run lint` — `oxlint` (no ESLint).
  - `npm run preview` — sirve el build.
- **Verificación tras cambios**: correr `npm run build` (o `npx tsc -b`) y `npm run lint`. Hay un par de warnings preexistentes de `react-refresh/only-export-components` en `ThemeContext.tsx` y `AuthContext.tsx` (exportan un hook además del provider); no son bugs, ignorarlos.

## Arquitectura

Flujo: `main.tsx` → `App.tsx` (rutas + `ThemeProvider` + `AuthProvider`) → páginas.

- **Rutas** (`App.tsx`): `/` → `LandingPage` (grilla de carreras por departamento); `/carrera/:id` → `CarreraPage`; cualquier otra → redirect a `/`.
- **`CarreraPage`** busca el `id` en `CARRERAS`; si no existe / no está disponible / no tiene `datos`, redirige a `/`. Si existe, renderiza `<AppInner carrera={...} />`.
- **`AppInner`** (`src/components/AppInner.tsx`) es el contenedor con el estado de UI (vista mapa/tabla, materia seleccionada, modo simulación, ocultar aprobadas, etc.) y orquesta Header + MapaView/TablaView + MateriaPanel. El progreso real vive en el hook `useProgreso`; la sesión de Google y el progreso en la nube viven en `AuthContext`.

### Estado y datos clave

- **`useProgreso(carreraId)`** (`src/hooks/useProgreso.ts`): fuente de verdad del progreso local. Persiste en `localStorage` bajo la clave **`unlam_progreso_v1_${carreraId}`**. Expone `progreso`, `setEstado`, `updateGrades`, `removeMateria`, `importProgreso`, `setElectiva`. El `progreso` solo guarda materias con estado explícito (`cursando`/`regularizada`/`aprobada`) o con una electiva elegida; el resto se deriva. Si hay sesión de Google activa, cada cambio también se sincroniza a Drive vía `AuthContext` (debounce de 1.5s).
- **`getEstadoEfectivo(materia, progreso)`** / **`getProgresoEfectivo(materia, progreso)`** (`src/utils/estados.ts`): calculan el estado/progreso mostrado de cada materia. Si hay progreso explícito lo usan; si no, es `disponible` cuando no tiene correlativas o todas están `regularizada`/`aprobada`, si no `bloqueada`. Para `electiva_slot`, resuelven el progreso de la materia concreta elegida (`electivaId`), no el del cupo. `AppInner` construye `estadosEfectivos: Record<id, EstadoMateria>` con esto y lo pasa a las vistas.
- **`getNombreMostrado(materia, progreso, materias)`**: nombre a mostrar de un `electiva_slot` — el de la materia concreta elegida, si ya se eligió una, si no el genérico ("Electiva I").
- **Modo simulación**: `simOverrides` (un `ProgresoPerfil` aparte) se mergea sobre `progreso` solo mientras `simMode` está activo (`activeProgreso`). No toca el progreso real ni `localStorage`/Drive. En sim se puede aprobar cualquier materia aunque no tenga las correlativas. Al entrar en sim se apaga "ocultar aprobadas".
- Otros helpers en `estados.ts`: `ESTADO_COLORS` / `ESTADO_COLORS_LIGHT` + `getEstadoColors(theme)`, `computeStats`, `computeMilestone` (progreso del título intermedio). **Regla recurrente**: los conteos/estadísticas se calculan sobre materias `trackable` = todas menos las de tipo `electiva_opcion`.

### Tipos (`src/types.ts`)

- `EstadoMateria`: `bloqueada | disponible | cursando | regularizada | aprobada`.
- `TipoMateria`: `obligatoria | optativa | electiva_slot | electiva_opcion | transversal`.
  - `electiva_slot` = el hueco "Electiva I/II/III" del plan. No trackea su propio estado/notas: tiene un campo `opciones` (ids de `electiva_opcion` entre las que elegir) y, en su progreso, un `electivaId` opcional apuntando a la elegida. El estado/notas reales viven en el progreso de esa materia concreta.
  - `electiva_opcion` = los cursos electivos concretos que se pueden elegir para un cupo; **se excluyen del grafo, de la tabla principal y de todos los conteos** (solo existen como datos para poblar el selector del cupo).
  - `transversal` = Inglés/Computación Transversal; van en su propia sección/filtro.
- `Materia`, `MateriaProgreso` (`estado` opcional + notas + `electivaId` opcional), `Carrera`, `TituloIntermedio`, `ProgresoPerfil = Record<string, MateriaProgreso>`, `MateriaNodeData` (datos que consume el nodo de React Flow).

### Datos de carreras (`src/data/`)

- **`carreras.ts`** exporta `CARRERAS: CarreraInfo[]` (id, nombre, departamento, plan, disponible, `datos`) y `DEPARTAMENTOS`. Es el registro central: para agregar una carrera se crea su archivo de datos y se lo importa acá.
- Cada archivo (`ingInformatica.ts`, `medicina.ts`, etc.) exporta una constante `Carrera` con el array `materias` (id = codigo normalmente, correlativas por id, tipo, año, cuatrimestre, horas) y opcionalmente `tituloIntermedio`, `cuatrimestreEstimado`, `anioEstimado`.
  - `cuatrimestreEstimado: true` → el cuatrimestre fue inferido (el plan oficial solo publica el año); la columna/filtro de cuatrimestre se ocultan.
  - `anioEstimado: true` → ni año ni cuatrimestre son oficiales; se ocultan ambas columnas.
  - Si una carrera tiene cupos de electiva con opciones concretas (como `ingInformatica.ts`), el `electiva_slot` lleva `opciones: string[]` con los ids de sus `electiva_opcion`.

### Vistas y componentes

- **`MapaView`** (`src/components/MapaView.tsx`): grafo con React Flow. El layout lo calcula `src/utils/graphLayout.ts` (`buildGraph` — columnas por año/cuatrimestre + heurística barycenter de Sugiyama para minimizar cruces de flechas). Nodos: `MateriaNode`, `ColumnHeaderNode`. Layout fijo (nodos no draggables). Exporta el grafo como imagen PNG (con leyenda de colores dibujada aparte en un canvas).
- **`TablaView`**: tabla filtrable (búsqueda, estado, año, transversales) + edición de estado/notas inline + footer con estadísticas. Los conteos del footer y la barra de progreso del Header se calculan sobre el total real, aunque haya filtros activos o esté prendido "ocultar aprobadas".
- **`Header`**: logo, barra de progreso, toggle Mapa/Tabla, y acciones (Exportar, Importar, Simular, Ocultar aprobadas, tema, login con Google). En mobile las acciones se colapsan en un menú ☰ (`.hdr-actions`). Botones solo-ícono usan la clase `icon-btn` con un `icon-btn-label` oculto en desktop que reaparece en el menú mobile.
- **`MateriaPanel`**: panel de detalle de una materia (se abre al seleccionarla; en mobile es bottom-sheet). Para un `electiva_slot` muestra un selector para elegir la materia concreta (bloqueando las que ya están elegidas en otro cupo) antes de habilitar el cambio de estado/notas. No se muestra en modo simulación.
- **`ImportModal`**: importación de progreso desde el PDF de historia académica.

### Auth / Sync (opcional)

- **`AuthContext`** (`src/context/AuthContext.tsx`, hook `useAuth()`): login con Google vía Google Identity Services (`src/lib/googleDrive.ts`, scope `drive.appdata` + perfil). Sin login, la app funciona igual que siempre con `localStorage`. Con login, el progreso se guarda en un archivo `progreso.json` dentro de la carpeta oculta `appDataFolder` del Drive del usuario, invisible entre sus archivos normales.
- El login es siempre manual (un click en "Iniciar sesión"): no hay restauración automática de sesión al cargar la página, para evitar popups de Google sin que el usuario los pida.
- Al loguearse por primera vez en un dispositivo, se fusiona lo que había en `localStorage` con lo que haya en la nube (la nube gana en conflictos).
- `AuthContext` también maneja el toast de reconexión y el resync automático a Drive al recuperar red — ver sección PWA.

### Import/Export

- **Export**: `MapaView.handleExportImage` genera una imagen `.png` del mapa de correlativas (vía `html-to-image`), con la referencia de colores debajo. Solo disponible en la vista Mapa.
- **Import**: `ImportModal` acepta el **PDF de historia académica** de Intraconsulta (Mi matrícula → Historia académica → Descargar).
  - `src/utils/historiaAcademica.ts`: parsea el PDF (pdfjs cargado con `import()` dinámico), reconoce materias aprobadas + notas, detecta la carrera y filtra materias de planes viejos.
  - Importar **reemplaza** todo el progreso de la carrera (`importProgreso`).

## PWA

La app es instalable (manifest + service worker vía `vite-plugin-pwa`, configurado en `vite.config.ts`, estrategia `generateSW`/Workbox).

- **El service worker solo existe en build de producción**, no en `npm run dev` (no se seteó `devOptions.enabled`, a propósito, para que el dev server nunca sirva contenido cacheado mientras se itera). Para probarlo localmente: `npm run build && npm run preview` y abrir `http://localhost:4173` — ahí Chrome muestra el ícono de instalar (⊕) en la barra de direcciones.
- `globPatterns` del precache solo agarra los assets del propio build (`js/css/html/svg/png/jpg/woff2`). Google Fonts, el script de GIS y las llamadas a Drive/Google APIs quedan **fuera a propósito**: siguen dependiendo de red siempre, para no arriesgarse a servir tokens o progreso desactualizado desde caché.
- Íconos en `public/pwa/` (`icon-192.png`, `icon-512.png`, `icon-512-maskable.png`) + `public/apple-touch-icon.png`, generados a partir de `public/logo.png`. `index.html` tiene el `<link rel="apple-touch-icon">` y `<meta name="theme-color">` a mano (iOS no lee esos campos del manifest).
- **Toast de conexión** (`AuthContext.tsx`): escucha `online`/`offline` del navegador y muestra un toast tipo snackbar (`.conn-toast` en `index.css`). Dos cuidados no obvios:
  - El evento `online` del navegador no garantiza internet real (falsos positivos al togglear Wi-Fi) — antes de anunciar "Conexión restablecida" se verifica con un pedido real a `https://www.gstatic.com/generate_204` (`hasRealConnectivity`, con timeout de 3s).
  - Togglear la red rápido puede disparar varios eventos seguidos; cada uno cancela (`AbortController`) el chequeo de conectividad anterior en curso (`connCheck` ref) para que no quede una promesa vieja pisando el toast con un estado desactualizado.
  - Si al reconectar hay sesión de Google activa, se dispara `pushToDrive()`: los cambios hechos offline ya están en `cloudProgreso` en memoria, pero el guardado a Drive mientras no había red falla en silencio y no se reintenta solo.

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

- Todo estado nuevo de UI suele vivir en `AppInner` y bajar por props a Header/MapaView/TablaView (no hay store global aparte de `useProgreso` + `AuthContext` + `ThemeContext`).
- Al filtrar/ocultar materias en las vistas, mantené los conteos del footer y la barra de progreso sobre el total real (calculados desde `estadosEfectivos` sobre todas las materias, no sobre las visibles).
- Recordá excluir `electiva_opcion` de conteos y del layout, y tratar `transversal` como sección aparte.
- Si agregás un `electiva_slot` con opciones concretas, usá el campo `opciones` en la data de la carrera y dejá que `getEstadoEfectivo`/`getNombreMostrado`/`getProgresoEfectivo` resuelvan el resto — no dupliques esa lógica en los componentes.
