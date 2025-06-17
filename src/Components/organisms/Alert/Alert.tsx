import OutsideClickHandler from "react-outside-click-handler";
import type { Icon } from "@Components/atoms/Icon";
import type { Button } from "@Components/atoms";
import type { AlertProps } from "./Alert.types";

const Alert = ({
  onClose,
  onCancel = () => null,
  onSave,
  icon,
  visible,
  title,
  comment,
  iconColor,
  isLoading,
  btnTxtPrincipal,
  btnColor,
}: AlertProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className="bg-white rounded-lg w-[320px] md:w-[529px] shadow-lg">
          <div className="flex items-center justify-end p-4">
            <button type="button" onClick={onClose} className="p-2">
              <i className="fa-solid fa-xmark text-gray2 text-xl" />
            </button>
          </div>
          <div className="text-center px-8 pb-4">
            <Icon name={icon} color={iconColor} />
            <p className="text-2xl font-semibold text-gray-600 mt-4">{title}</p>
            <p className="text-gray-600 mt-2">{comment}</p>
          </div>
          <div className="flex justify-between px-8 py-4">
            <Button
              variant="secondary"
              isSubmit
              isLoading={isLoading}
              disabled={isLoading}
              onClick={onCancel}
            >
              Cancelar
            </Button>
            <Button
              variant={btnColor || "primary"}
              isSubmit
              isLoading={isLoading}
              disabled={isLoading}
              onClick={onSave}
              styleClasses="ml-2"
            >
              {btnTxtPrincipal || "Aceptar"}
            </Button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Alert;
