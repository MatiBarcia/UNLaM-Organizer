# UNLaM Organizer

Herramienta para visualizar y trackear el progreso académico en las carreras de la Universidad Nacional de La Matanza (UNLaM).

---

## ¿Qué es?

UNLaM Organizer es una aplicación web que te permite ver el plan de estudios completo como un grafo de correlatividades y registrar tu avance materia por materia. Está pensada para que de un vistazo puedas saber qué materias tenés disponibles para cursar, cuáles te faltan regularizar, y qué camino te queda por delante hasta recibirse.

---

## Funcionalidades

### Vista Mapa
Muestra todas las materias como nodos conectados por flechas que indican las correlatividades. El color de cada nodo refleja su estado actual:

| Color | Estado |
|-------|--------|
| Gris | Bloqueada (falta regularizar alguna correlativa) |
| Azul | Disponible para cursar |
| Amarillo | Cursando |
| Verde claro | Regularizada |
| Verde | Aprobada |

Las materias están organizadas en columnas por año y cuatrimestre, con encabezados que identifican cada período. El layout es fijo: no se puede romper la estructura arrastrando nodos.

### Vista Tabla
Lista todas las materias en formato tabla con filtros por:
- **Estado** (bloqueada, disponible, cursando, regularizada, aprobada)
- **Año** (dinámico según la carrera, de 1° hasta el último año del plan)
- **Transversales** (Inglés y Computación Transversal, en su propio filtro separado)

Los filtros son combinables: se puede marcar más de una opción a la vez (por ejemplo, "1° Año" + "2° Año" para ver las materias de ambos juntas, o varios estados en simultáneo). Cada fila tiene un indicador de color por año en el borde izquierdo para facilitar la lectura. Desde la tabla podés cambiar el estado de cada materia y registrar las notas de parciales y final. En las carreras donde el año o el cuatrimestre de las materias fue estimado (ver sección de carreras disponibles), esas columnas y su filtro no se muestran.

### Modo Simulación
Permite simular un escenario académico marcando materias como aprobadas temporalmente, para visualizar qué otras materias se desbloquearían — incluso materias sin sus correlativas cumplidas, para poder explorar libremente distintos caminos hipotéticos. Al salir del modo simulación todo vuelve a su estado real.

### Barra de progreso
El encabezado muestra cuántas materias aprobaste sobre el total de la carrera (obligatorias + electivas), el porcentaje de avance, y las materias en curso o regularizadas.

### Tema claro / oscuro
Soporte completo de tema oscuro (por defecto) y claro, con colores optimizados para cada uno.

### Exportar mapa / Importar progreso
"Exportar" descarga una imagen (`.png`) del mapa de correlativas tal como está en ese momento, con la referencia de colores incluida debajo del grafo. Solo está disponible en la vista Mapa.

"Importar" reconoce automáticamente el progreso desde el PDF de **historia académica** descargado desde Intraconsulta (Mi matrícula → Historia académica → Descargar). Al tocar "Importar" se muestra un instructivo con los pasos para descargarlo y un selector de archivo. La app reconoce las materias aprobadas y sus notas, verifica que el documento corresponda a la carrera que estás viendo (para no mezclar datos de otra carrera), e ignora los registros de un plan de estudios anterior que ya no correspondan al plan actual. Antes de aplicar los cambios se muestra un resumen de cuántas materias se reconocieron y cuántas se van a ignorar; la importación reemplaza todo el progreso actual de la carrera.

### Sincronización con Google (opcional)
Sin iniciar sesión, el progreso se guarda solo en este navegador (`localStorage`), como siempre. Tocando "Iniciar sesión" en el header podés loguearte con Google para sincronizar el progreso entre dispositivos: se guarda en un archivo dentro de la carpeta oculta `appData` de tu Google Drive (invisible entre tus archivos normales, solo esta app puede leerla). Al loguearte por primera vez se fusiona lo que tenías guardado localmente con lo que haya en la nube.

### Versión mobile
La app es completamente usable desde el celular:

- **Header compacto**: en pantallas chicas, las acciones (Exportar, Importar, Simular, tema) se agrupan detrás de un botón de menú (☰); el toggle Mapa/Tabla y la barra de progreso quedan siempre visibles.
- **Vista Mapa**: al entrar se hace zoom automático sobre las dos columnas del primer año (en vez de mostrar todo el plan diminuto), y se puede seguir explorando con pan/pinch-zoom táctil. La referencia de colores queda oculta por defecto y se muestra tocando el ícono ⓘ.
- **Vista Tabla**: las materias se muestran como tarjetas compactas (código · nombre · estado) en vez de una tabla ancha. Los filtros de estado y año quedan colapsados detrás de un botón "Filtros" con contador de filtros activos, para no ocupar espacio de forma permanente. Al girar el celular a horizontal (o en PC) se ve la tabla completa con todas las columnas.
- **Panel de detalle**: al tocar una materia se abre como una hoja deslizable desde abajo (bottom sheet) con fondo oscurecido, en vez de tapar toda la pantalla.

---

## Carreras disponibles

### Ingeniería e Investigaciones Tecnológicas

| Carrera | Plan |
|---------|------|
| Ingeniería en Informática | 2026 |
| Arquitectura | 2015 |
| Ingeniería Mecánica | 2015 |
| Ingeniería Civil | 2025 |
| Ingeniería Industrial | 2024 |
| Ingeniería Electrónica | 2023 |
| Ingeniería en Energías Renovables | 2024 |
| Licenciatura en Gestión de Tecnología | 2011 |

### Salud

| Carrera | Plan |
|---------|------|
| Medicina | 2023 |
| Licenciatura en Enfermería | 2016 |
| Licenciatura en Kinesiología y Fisiatría | 2011 |
| Licenciatura en Nutrición | 2011 |
| Tecnicatura Universitaria en Anatomía Patológica | 2022 |

### Ciencias Económicas

| Carrera | Plan |
|---------|------|
| Contador Público | 2018 |
| Licenciatura en Administración | 2018 |
| Licenciatura en Economía | 2023 |
| Licenciatura en Comercio Internacional | 2018 |

### Derecho y Ciencias Políticas

| Carrera | Plan |
|---------|------|
| Abogacía | 2018 |
| Procurador | 2010 |
| Licenciatura en Ciencia Política | 2005 |
| Tecnicatura Universitaria en Gestión Pública | 2010 |

### Humanidades y Ciencias Sociales

| Carrera | Plan |
|---------|------|
| Licenciatura en Comunicación Social | 2009 |
| Licenciatura en Relaciones Públicas | 2009 |
| Licenciatura en Relaciones Laborales | 2008 |
| Licenciatura en Trabajo Social | 2009 |
| Profesorado y Licenciatura en Educación Física | 2000 |
| Técnico Universitario en Ceremonial y Protocolo | 2007 |

### Artes y Medios de Comunicación

| Carrera | Plan |
|---------|------|
| Tecnicatura Universitaria en Animación y Arte Digital | 2020 |
| Licenciatura en Animación Digital (ciclo de complementación) | 2024 |
| Tecnicatura Universitaria en Artes Audiovisuales | 2019 |
| Tecnicatura Universitaria en Artes Escénicas | 2019 |
| Tecnicatura Universitaria en Desarrollo de Videojuegos | 2024 |
| Tecnicatura Universitaria en Diseño Gráfico y Digital | 2023 |
| Tecnicatura Universitaria en Guion Audiovisual | 2021 |
| Locutor Nacional | 2010 |
| Tecnicatura Universitaria en Periodismo Deportivo Integral | 2020 |
| Tecnicatura Universitaria en Publicidad y Comunicación Estratégica | 2025 |
| Tecnicatura Universitaria en Producción Musical | 2025 |
| Tecnicatura Universitaria en Producción de Contenidos para la Comunicación | 2024 |

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| [React 19](https://react.dev/) | UI y manejo de estado |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Vite 8](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [@xyflow/react](https://reactflow.dev/) | Grafo de correlatividades interactivo |
| [Lucide React](https://lucide.dev/) | Íconos de la interfaz |
| [pdfjs-dist](https://mozilla.github.io/pdf.js/) | Lectura del PDF de historia académica para el importador |
| [html-to-image](https://github.com/bubkoo/html-to-image) | Exportar el mapa de correlativas como imagen |
| [Google Identity Services](https://developers.google.com/identity/oauth2/web) + [Drive API](https://developers.google.com/drive/api) | Login con Google y sincronización del progreso (opcional) |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) + [Analytics](https://vercel.com/docs/analytics) | Métricas de performance y visitas en producción |
| CSS Custom Properties | Sistema de temas (dark/light) sin frameworks externos |
