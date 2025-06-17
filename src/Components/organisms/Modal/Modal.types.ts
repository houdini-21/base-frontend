import type { ChildrenJsxProp, OnClickProp, TitleProp, VisibleProp } from '@Interfaces/Global.types';

export interface ModalProps extends TitleProp, VisibleProp, ChildrenJsxProp {
  onClose: () => void;
  onSave: () => void;
  onCancel?: () => void;
  showButton?: boolean;
}

export interface ButtonModalProps extends TitleProp, OnClickProp {
  type: 'primary' | 'secondary';
}
