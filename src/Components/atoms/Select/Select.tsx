import Select, { components } from "react-select";
import classNames from "classnames";
import "./Select.css";
import type { SelectCustomProps } from "./Select.types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Control = ({ children, icon, ...props }: any) => (
  <components.Control {...props}>
    {icon && <i className={classNames("text-sm ml-2", icon)} />}
    {children}
  </components.Control>
);

const SelectCustom = ({
  options,
  placeholder,
  label,
  value,
  name,
  styleClasses,
  onChange,
  error,
  icon,
  errorMessage,
  disabled = false,
  defaultValue,
}: SelectCustomProps) => {
  const selectedValue = options.find(
    (opt) => String(opt.value) === String(value)
  );
  return (
    <div>
      {label && (
        <p
          className={classNames("font-normal text-sm mb-1", {
            "text-red-500": error, // Rojo para errores
            "text-gray-400": disabled, // Gris claro para deshabilitado
            "text-gray-700": !disabled && !error, // Negro/gris oscuro para estado normal
          })}
        >
          {label}
        </p>
      )}

      <Select
        options={options}
        placeholder={placeholder}
        value={defaultValue || selectedValue}
        name={name}
        isSearchable
        isClearable
        defaultValue={defaultValue}
        classNamePrefix="selectCustom"
        className={classNames("rounded-md transition-all", styleClasses, {
          "selectCustom__control--error": error, // Clase para el estado de error
          "opacity-50 pointer-events-none": disabled, // Reducir opacidad si está deshabilitado
        })}
        onChange={onChange}
        components={{ Control: (props) => <Control {...props} icon={icon} /> }}
        isDisabled={disabled}
      />

      {error && (
        <span className="text-red-500 text-sm mt-1 block">{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectCustom;
