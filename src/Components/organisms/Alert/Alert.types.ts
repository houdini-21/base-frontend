import type { CommentProp, TitleProp } from '@Interfaces/Global.types';

export interface AlertProps
  extends TitleProp,
    CommentProp {
  visible: boolean;
  iconColor: string;
  icon: string;
  onClose: () => void;
  onSave: () => void;
  onCancel?: () => void;
  btnTxtPrincipal?: string;
  isLoading?: boolean;
  btnColor?: string;
}
