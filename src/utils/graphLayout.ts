import { MarkerType, type Edge, type Node } from '@xyflow/react';
import type { EstadoMateria, Materia, MateriaNodeData } from '../types';
import type { ColHeaderData } from '../components/ColumnHeaderNode';
import { ESTADO_COLORS } from './estados';

const NODE_W = 240;
const NODE_H = 84;
const COL_STEP = 300;
const ROW_H = 104;
const TRANS_GAP = 70;
const HEADER_H = 44;
const HEADER_GAP = 10;

export function buildGraph(
  materias: Materia[],
  estadosEfectivos: Record<string, EstadoMateria>,
): { nodes: Node[]; edges: Edge[] } {
  const mainCols = new Map<number, Materia[]>();
  const transCols = new Map<number, Materia[]>();

  for (const m of materias) {
    if (m.tipo === 'electiva_opcion') continue;
    const ci = (m.anio - 1) * 2 + (m.cuatrimestre - 1);
    if (m.tipo === 'transversal') {
      if (!transCols.has(ci)) transCols.set(ci, []);
      transCols.get(ci)!.push(m);
    } else {
      if (!mainCols.has(ci)) mainCols.set(ci, []);
      mainCols.get(ci)!.push(m);
    }
  }

  const optimizedMain = optimizeLayout(mainCols, materias);
  const optimizedTrans = optimizeLayout(transCols, materias);

  let maxMainRows = 0;
  for (const mats of optimizedMain.values()) {
    maxMainRows = Math.max(maxMainRows, mats.length);
  }
  const TRANS_Y = maxMainRows * ROW_H + TRANS_GAP;

  const NODE_Y0 = HEADER_H + HEADER_GAP;

  let maxTransRows = 0;
  for (const mats of optimizedTrans.values()) {
    maxTransRows = Math.max(maxTransRows, mats.length);
  }

  const pos = new Map<string, { x: number; y: number }>();

  for (const [ci, mats] of optimizedMain) {
    const x = ci * COL_STEP;
    const offsetY = ((maxMainRows - mats.length) / 2) * ROW_H;
    mats.forEach((m, i) => pos.set(m.id, { x, y: NODE_Y0 + offsetY + i * ROW_H }));
  }
  for (const [ci, mats] of optimizedTrans) {
    const x = ci * COL_STEP;
    const offsetY = ((maxTransRows - mats.length) / 2) * ROW_H;
    mats.forEach((m, i) => pos.set(m.id, { x, y: NODE_Y0 + TRANS_Y + offsetY + i * ROW_H }));
  }

  // Column header nodes — one per cuatrimestre found in either section
  const allCIs = new Set([...optimizedMain.keys(), ...optimizedTrans.keys()]);
  const headerNodes: Node<ColHeaderData>[] = [...allCIs].sort((a, b) => a - b).map(ci => ({
    id: `col-header-${ci}`,
    type: 'col-header',
    className: 'col-header-wrapper',
    position: { x: ci * COL_STEP, y: 0 },
    data: { anio: Math.floor(ci / 2) + 1, cuatrimestre: (ci % 2) + 1 },
    selectable: false,
    focusable: false,
    draggable: false,
    width: NODE_W,
    height: HEADER_H,
  }));

  const nodes: Node[] = [
    ...headerNodes,
    ...materias
      .filter(m => m.tipo !== 'electiva_opcion')
      .map(m => ({
        id: m.id,
        type: 'materia',
        position: pos.get(m.id) ?? { x: 0, y: 0 },
        data: {
          codigo: m.codigo,
          nombre: m.nombre,
          estado: estadosEfectivos[m.id] ?? 'bloqueada',
          tipo: m.tipo,
        } as MateriaNodeData,
        width: NODE_W,
        height: NODE_H,
      })),
  ];

  const edges: Edge[] = [];
  for (const m of materias) {
    if (m.tipo === 'electiva_opcion') continue;
    for (const corrId of m.correlativas) {
      const corr = materias.find(x => x.id === corrId);
      if (!corr || corr.tipo === 'electiva_opcion') continue;
      const colors = ESTADO_COLORS[estadosEfectivos[corrId] ?? 'bloqueada'];
      edges.push({
        id: `e-${corrId}-${m.id}`,
        source: corrId,
        target: m.id,
        type: 'straight',
        style: { stroke: colors.border, strokeWidth: 2, opacity: 0.75 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: colors.border,
          width: 16,
          height: 16,
        },
      });
    }
  }

  return { nodes, edges };
}

// Sugiyama barycenter heuristic — minimises edge crossings between columns
function optimizeLayout(
  cols: Map<number, Materia[]>,
  allMaterias: Materia[],
): Map<number, Materia[]> {
  if (cols.size === 0) return cols;

  // successors[id] = list of materia ids that list id as a correlativa
  const successors = new Map<string, string[]>();
  for (const m of allMaterias) {
    if (m.tipo === 'electiva_opcion') continue;
    for (const corrId of m.correlativas) {
      if (!successors.has(corrId)) successors.set(corrId, []);
      successors.get(corrId)!.push(m.id);
    }
  }

  const result = new Map<number, Materia[]>();
  for (const [ci, mats] of cols) result.set(ci, [...mats]);

  const sortedCIs = [...result.keys()].sort((a, b) => a - b);

  for (let iter = 0; iter < 8; iter++) {
    // Forward pass — sort each column by average row of its predecessors
    for (const ci of sortedCIs) {
      const mats = result.get(ci)!;
      const rowOf = buildRowOf(result);
      mats.sort((a, b) => compareByBary(a.correlativas, b.correlativas, rowOf));
    }

    // Backward pass — sort each column by average row of its successors
    for (const ci of [...sortedCIs].reverse()) {
      const mats = result.get(ci)!;
      const rowOf = buildRowOf(result);
      mats.sort((a, b) =>
        compareByBary(
          successors.get(a.id) ?? [],
          successors.get(b.id) ?? [],
          rowOf,
        ),
      );
    }
  }

  return result;
}

function buildRowOf(cols: Map<number, Materia[]>): Map<string, number> {
  const rowOf = new Map<string, number>();
  for (const mats of cols.values()) {
    mats.forEach((m, ri) => rowOf.set(m.id, ri));
  }
  return rowOf;
}

function barycenter(ids: string[], rowOf: Map<string, number>): number {
  const rows = ids.map(id => rowOf.get(id)).filter((r): r is number => r !== undefined);
  if (rows.length === 0) return -1;
  return rows.reduce((s, r) => s + r, 0) / rows.length;
}

function compareByBary(
  idsA: string[],
  idsB: string[],
  rowOf: Map<string, number>,
): number {
  const avgA = barycenter(idsA, rowOf);
  const avgB = barycenter(idsB, rowOf);
  if (avgA < 0 && avgB < 0) return 0;
  if (avgA < 0) return 1;
  if (avgB < 0) return -1;
  return avgA - avgB;
}
