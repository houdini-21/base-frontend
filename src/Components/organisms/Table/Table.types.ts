import type { StylesProp } from '@Interfaces/Global.types';

export interface TableColumn {
  key: string;
  name: string;
  width?: number;
  sortable?: boolean;
}

export interface TableRow {
  [key: string]: string | number | boolean;
}

export interface ITableProps extends StylesProp {
  rows: TableRow[];
  columns: TableColumn[];
  rowHeight?: number;
  headerRowHeight?: number;
  loading?: boolean;
}
