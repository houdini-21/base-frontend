import type {
  DisabledProp,
  ErrorMessageProp,
  ErrorProp,
  IdProp,
  LabelProp,
  NameProp,
  PlaceholderProp,
  StylesProp,
} from "@Interfaces/Global.types";

export interface TextareaProps
  extends PlaceholderProp,
    LabelProp,
    NameProp,
    IdProp,
    DisabledProp,
    ErrorProp,
    ErrorMessageProp,
    StylesProp {
  value: string;
  classNameInput?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
