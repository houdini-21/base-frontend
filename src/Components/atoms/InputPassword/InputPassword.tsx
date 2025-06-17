import { useState } from 'react';
import classNames from 'classnames';
import type { InputPasswordProps } from './InputPassword.types';

const InputPassword = ({
  placeholder,
  label,
  name,
  id,
  disabled = false,
  error = false,
  errorMessage,
  value = '',
  styleClasses,
  classNameInput = 'w-full',
  onChange,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames('flex flex-col', styleClasses)}>
      {/* Etiqueta */}
      <label
        htmlFor={name}
        className={classNames('text-sm font-medium mb-1', {
          'text-red-500': error, // Rojo para errores
          'text-blue-500': isFocused && !error, // Azul para enfoque
          'text-gray-700': value !== '' && !error, // Texto oscuro si hay valor
          'text-gray-500': value === '' && !isFocused && !error, // Texto gris claro para inactivos
          'text-gray-400': disabled, // Gris tenue para deshabilitado
        })}
      >
        {label}
      </label>

      <div className="relative">
        {/* Campo de entrada */}
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={classNames(
            'border rounded-md px-4 py-3 text-sm outline-none transition-all',
            classNameInput,
            {
              'border-red-500 text-red-500': error, // Rojo para errores
              'border-blue-500 text-blue-500': isFocused && !error, // Azul para enfoque
              'border-gray-300 text-gray-700': value !== '' && !error, // Borde y texto neutros para valor existente
              'border-gray-200 text-gray-500': value === '' && !isFocused && !disabled, // Inactivo sin valor
              'border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100': disabled, // Estado deshabilitado
            },
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Botón para mostrar/ocultar contraseña */}
        <button
          type="button"
          className={classNames(
            'absolute top-1/2 transform -translate-y-1/2 right-3 text-lg transition-all',
            {
              'text-gray-500': value === '' && !isFocused && !error, // Gris para inactivo
              'text-blue-500': value !== '' && !error, // Azul para enfoque
              'text-gray-400 cursor-not-allowed': disabled, // Gris tenue para deshabilitado
            },
          )}
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled} // Deshabilita el botón si el input está deshabilitado
        >
          {showPassword ? (
            <i className="fa-sharp fa-regular fa-eye-slash" />
          ) : (
            <i className="fa-regular fa-eye" />
          )}
        </button>
      </div>

      {/* Mensaje de error */}
      {error && errorMessage && (
        <p className="text-red-500 text-sm font-medium mt-2 flex items-center">
          <i className="fa-sharp fa-solid fa-circle-exclamation mr-2" />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
