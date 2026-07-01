import type { NodeProps, Node } from '@xyflow/react';

export interface ColHeaderData extends Record<string, unknown> {
  anio: number;
  cuatrimestre: number;
}

export type ColHeaderNodeType = Node<ColHeaderData, 'col-header'>;

export function ColumnHeaderNode({ data }: NodeProps<ColHeaderNodeType>) {
  return (
    <div className="col-header-node">
      <span className="col-header-year">{data.anio}° Año</span>
      <span className="col-header-c">C{data.cuatrimestre}</span>
    </div>
  );
}
