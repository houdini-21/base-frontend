import type {
  ChildrenJsxProp,
  StylesProp,
  PaddingProp,
} from '@Interfaces/Global.types';

export interface ShadowProps extends ChildrenJsxProp, StylesProp, PaddingProp {
  marginBottom?: string;
  background?: string;
}
