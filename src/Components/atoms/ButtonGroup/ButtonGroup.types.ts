import type { DisabledProp, OnChangeProp, StylesProp } from '@Interfaces/Global.types';

export interface ItemsProps {
  label: string;
  value: string | number | boolean;
}

export interface ButtonGroupCustomProps extends StylesProp, DisabledProp, OnChangeProp {
  items: ItemsProps[];
  value: string | number | boolean;
}
