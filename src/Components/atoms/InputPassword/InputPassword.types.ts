import type { 
  DisabledProp,
  ErrorMessageProp,
  ErrorProp,
  IdProp,
  LabelProp,
  NameProp,
  PlaceholderProp,
  StylesProp,
  ValueProp
} from '@Interfaces/Global.types';

export interface InputPasswordProps
  extends NameProp,
    StylesProp,
    DisabledProp,
    PlaceholderProp,
    LabelProp,
    IdProp,
    ErrorProp,
    ErrorMessageProp,
    ValueProp {
  classNameInput?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
