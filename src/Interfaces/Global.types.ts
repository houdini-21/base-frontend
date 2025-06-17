export interface NameProp {
  name: string;
}
export interface TitleProp {
  title: string;
}
export interface TextProp {
  text?: string;
}
export interface ResponsePrincipal {
  error?: number;
  message?: string;
  data?: unknown;
  result?: unknown;
  errorCode?: number;
}
export interface IconProp {
  icon?: string;
}
export interface CommentProp {
  comment: string;
}
export interface ChildrenJsxProp {
  children?: React.ReactNode | React.ReactNode[];
}
export interface StylesProp {
  styleClasses?: string;
}
export interface PaddingProp {
  padding?: string;
}
export interface VariantProp {
  variant?: "primary" | "secondary" | "danger" | "custom";
}
export interface IsSubmitProp {
  isSubmit?: boolean;
}
export interface OnClickProp {
  onClick?: () => void;
}
export interface OnChangeProp {
  onChange: (value: string | number | boolean) => void;
}
export interface DisabledProp {
  disabled?: boolean;
}
export interface VisibleProp {
  visible?: boolean;
}
export interface IsSelectedProp {
  isSelected?: boolean;
}
export interface IsLoadingProp {
  isLoading?: boolean;
}
export interface PlaceholderProp {
  placeholder: string;
}
export interface LabelProp {
  label?: string;
}
export interface IdProp {
  id?: string;
}
export interface ErrorProp {
  error?: boolean;
}
export interface ErrorMessageProp {
  errorMessage?: string;
}
export interface ValueProp {
  value: string;
}
