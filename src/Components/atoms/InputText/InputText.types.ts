import type {
  DisabledProp,
  ErrorMessageProp,
  ErrorProp,
  IdProp,
  LabelProp,
  NameProp,
  PlaceholderProp,
  StylesProp,
  ValueProp,
} from '@Interfaces/Global.types';

export interface InputTextProps
  extends PlaceholderProp,
    LabelProp,
    NameProp,
    IdProp,
    DisabledProp,
    ErrorProp,
    ErrorMessageProp,
    ValueProp,
    StylesProp {
  type?: string;
  icon?: string;
  classNameInput?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
