import type {
  DisabledProp,
  ErrorMessageProp,
  ErrorProp,
  IconProp,
  LabelProp,
  NameProp,
  OnChangeProp,
  PlaceholderProp,
  StylesProp,
} from "@Interfaces/Global.types";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectCustomProps
  extends PlaceholderProp,
    LabelProp,
    NameProp,
    OnChangeProp,
    ErrorProp,
    ErrorMessageProp,
    StylesProp,
    IconProp,
    DisabledProp {
  options: SelectOption[];
  value: string | number;
  defaultValue?: string | number;
}
