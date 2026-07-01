# UNLaM Organizer

Herramienta para visualizar y trackear el progreso académico en las carreras de la Universidad Nacional de La Matanza (UNLaM).

---

## ¿Qué es?

UNLaM Organizer es una aplicación web que te permite ver el plan de estudios completo como un grafo de correlatividades y registrar tu avance materia por materia. Está pensada para que de un vistazo puedas saber qué materias tenés disponibles para cursar, cuáles te faltan regularizar, y qué camino te queda por delante hasta recibirse.

## Carreras disponibles

| Carrera | Plan |
|---------|------|
| Ingeniería en Informática | 2026 |
| Arquitectura | 2015 |
| Ingeniería Mecánica | 2015 |
| Ingeniería Civil | 2025 |
| Ingeniería Industrial | 2024 |
| Ingeniería Electrónica | 2023 |

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

Cada fila tiene un indicador de color por año en el borde izquierdo para facilitar la lectura. Desde la tabla podés cambiar el estado de cada materia y registrar las notas de parciales y final.

### Modo Simulación
Permite simular un escenario académico marcando materias como aprobadas temporalmente, para visualizar qué otras materias se desbloquearían. Al salir del modo simulación todo vuelve a su estado real.

### Barra de progreso
El encabezado muestra cuántas materias aprobaste sobre el total de la carrera (obligatorias + electivas), el porcentaje de avance, y las materias en curso o regularizadas.

### Tema claro / oscuro
Soporte completo de tema oscuro (por defecto) y claro, con colores optimizados para cada uno.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| [React 19](https://react.dev/) | UI y manejo de estado |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Vite 8](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [@xyflow/react](https://reactflow.dev/) | Grafo de correlatividades interactivo |
| [Lucide React](https://lucide.dev/) | Íconos de la interfaz |
| CSS Custom Properties | Sistema de temas (dark/light) sin frameworks externos |

---

## Correr el proyecto localmente

```bash
npm install
npm run dev
```
