import { useState } from "react";
import classNames from "classnames";
import type { InputPasswordProps } from "./InputPassword.types";

const InputPassword = ({
  placeholder,
  label,
  name,
  id,
  disabled = false,
  error = false,
  errorMessage,
  value = "",
  styleClasses,
  classNameInput = "w-full",
  onChange,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames("flex flex-col", styleClasses)}>
      {/* Etiqueta */}
      <label
        htmlFor={name}
        className={classNames("text-sm font-medium mb-1", {
          "text-red-500": error, // Rojo para errores
          "text-blue-500": isFocused && !error, // Azul para enfoque
          "text-gray-700": value !== "" && !error, // Texto oscuro si hay valor
          "text-gray-500": value === "" && !isFocused && !error, // Texto gris claro para inactivos
          "text-gray-400": disabled, // Gris tenue para deshabilitado
        })}
      >
        {label}
      </label>

      <div className="relative">
        {showPassword ? (
          <i
            className={classNames(
              "absolute top-1/2 left-3 transform -translate-y-1/2 text-lg fas fa-unlock",
              {
                "text-gray-400": disabled, // Ícono deshabilitado
                "text-gray-500": !disabled && !error, // Ícono normal
                "text-red-500": error, // Ícono de error
              }
            )}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <i
            className={classNames(
              "absolute top-1/2 left-3 transform -translate-y-1/2 text-lg fas fa-lock",
              {
                "text-gray-400": disabled, // Ícono deshabilitado
                "text-gray-500": !disabled && !error, // Ícono normal
                "text-red-500": error, // Ícono de error
              }
            )}
            onClick={() => setShowPassword(true)}
          />
        )}
        {/* Ícono opcional */}
        {/* {icon && (
          <i
            className={classNames(
              "absolute top-1/2 left-3 transform -translate-y-1/2 text-lg",
              {
                "text-gray-400": disabled, // Ícono deshabilitado
                "text-gray-500": !disabled && !error, // Ícono normal
                "text-red-500": error, // Ícono de error
              },
              icon
            )}
          />
        )} */}

        {/* Campo de entrada */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={classNames(
            "border rounded-md px-4 py-3 text-sm outline-none transition-all w-full pl-10",
            classNameInput,
            {
              "border-red-500 text-red-500": error, // Bordes y texto rojo para error
              "border-blue-500 text-blue-500": isFocused && !error, // Bordes y texto azul para enfoque
              "border-gray-300 text-gray-700": value !== "" && !error, // Texto y bordes neutros si hay valor
              "border-gray-200 text-gray-500":
                value === "" && !isFocused && !disabled, // Gris claro para inactivo
              "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100":
                disabled, // Estado deshabilitado
            }
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      {/* Mensaje de error */}
      {error && errorMessage && (
        <p className="text-red-500 text-sm font-medium mt-2 flex items-center">
          <i className="fa-solid fa-circle-exclamation mr-2" />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
