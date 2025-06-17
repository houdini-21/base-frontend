import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import type { ButtonModalProps, ModalProps } from "./Modal.types";

export const Button = ({ type, title, onClick }: ButtonModalProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "flex justify-center items-center border-2 rounded-xl h-9 w-full cursor-pointer hover:opacity-80 transition-opacity duration-300",
        {
          "bg-blue-600 border-blue-600 text-white": type === "primary", // Primary button
          "bg-white border-blue-600 text-blue-600": type === "secondary", // Secondary button
        }
      )}
    >
      <p className="font-bold text-sm">{title}</p>
    </button>
  );
};

const Modal = ({
  visible,
  title,
  onSave,
  onClose,
  onCancel = () => null,
  children,
  showButton = true,
}: ModalProps) => {
  if (visible) {
    return (
      <div className="bg-black/50 flex fixed inset-0 z-50 justify-center items-center overflow-y-auto">
        <OutsideClickHandler onOutsideClick={onClose}>
          <div className="bg-white rounded-lg w-[320px] md:w-[529px] shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-14 border-b border-gray-300">
              <p className="font-bold text-blue-600 text-sm">{title}</p>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <i className="fa-solid fa-xmark text-gray-500 text-lg" />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 pt-6">{children}</div>

            {/* Footer */}
            {showButton ? (
              <div className="flex justify-between px-8 py-6 w-full gap-4">
                <div className="w-1/2 flex justify-end">
                  <Button type="secondary" title="Cancelar" onClick={onCancel} />
                </div>
                <div className="w-1/2 flex justify-end">
                  <Button type="primary" title="Guardar" onClick={onSave} />
                </div>
              </div>
            ) : (
              <div className="flex justify-end px-8 py-6 w-full">
                <Button type="secondary" title="Cancelar" onClick={onCancel} />
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    );
  }
  return null;
};

export default Modal;
