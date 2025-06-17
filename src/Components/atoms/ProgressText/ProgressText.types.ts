import type { StylesProp } from '@Interfaces/Global.types';

export interface ProgressTextProps extends StylesProp {
  progress: string;
  arrowDirection: 'up' | 'down';
}
