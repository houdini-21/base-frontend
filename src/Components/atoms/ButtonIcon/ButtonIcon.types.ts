import type { ChildrenJsxProp, DisabledProp, IconProp, StylesProp } from '@Interfaces/Global.types';

export interface ButtonIconProps extends IconProp, ChildrenJsxProp, StylesProp, DisabledProp {
  variant?: 'primary' | 'secondary' | 'danger' | 'custom';
  isSubmit?: boolean;
  onClick?: () => void;
  path?: string;
}
