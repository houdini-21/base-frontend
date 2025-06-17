import type { TitleProp } from '@Interfaces/Global.types';

export interface KPICardProps extends TitleProp {
  primaryText: string;
  secondaryText: string;
  classNameContainer?: string;
  withArrowIcon?: boolean;
  arrowDirection?: 'up' | 'down';
}
