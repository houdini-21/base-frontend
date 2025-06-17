import type { ChildrenJsxProp, StylesProp } from '@Interfaces/Global.types';
import type { Aligns, SizesFonts, Weight } from '@Interfaces/StylesFonts.types';

export interface PProps extends ChildrenJsxProp, StylesProp {
  align?: Aligns;
  fontSize?: SizesFonts;
  type?: Weight;
  color?: string;
}
