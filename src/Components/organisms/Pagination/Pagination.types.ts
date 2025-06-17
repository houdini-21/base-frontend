import type { StylesProp } from '@Interfaces/Global.types';

export interface IPaginationProps extends StylesProp {
  setPage: (page: number) => void;
  pageCount: number;
  pagesToShowStart?: number;
  pagesToShowEnd?: number;
  initialPage?: number;
}
