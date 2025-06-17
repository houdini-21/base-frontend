import type { 
  ChildrenJsxProp,
  DisabledProp,
  IsLoadingProp,
  IsSubmitProp,
  OnClickProp,
  StylesProp
} from '@Interfaces/Global.types';

export interface ButtonProps
  extends ChildrenJsxProp,
    StylesProp,
    IsSubmitProp,
    OnClickProp,
    DisabledProp,
    IsLoadingProp {
  variant?: "primary" | "secondary" | "danger" | "custom";
  startIcon?: string;
  endIcon?: string;
  path?: string;
}
