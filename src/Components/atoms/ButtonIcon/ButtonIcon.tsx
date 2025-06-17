import { Link } from 'react-router-dom';
import classNames from 'classnames';
import type { ButtonIconProps } from './ButtonIcon.types';

const Button = ({
  styleClasses = '',
  variant = 'primary',
  isSubmit = false,
  onClick,
  disabled = false,
  children,
  path,
}: ButtonIconProps) => {
  return path ? (
    <Link
      to={path}
      className={classNames(
        'px-4 py-2 rounded-xl transition-colors duration-300 text-sm font-semibold h-10 text-center',
        styleClasses,
        {
          'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary', // Botón primario
          'border border-blue-500 text-blue-500 hover:bg-blue-100': variant === 'secondary', // Botón secundario
          'bg-red-500 hover:bg-red-600 text-white': variant === 'danger', // Botón de peligro
          'opacity-50 cursor-not-allowed': disabled, // Estado deshabilitado
        },
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={classNames(
        'px-4 py-2 rounded-xl transition-colors duration-300 text-sm font-semibold h-10',
        styleClasses,
        {
          'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary', // Botón primario
          'border border-blue-500 text-blue-500 hover:bg-blue-100': variant === 'secondary', // Botón secundario
          'bg-red-500 hover:bg-red-600 text-white': variant === 'danger', // Botón de peligro
          'opacity-50 cursor-not-allowed': disabled, // Estado deshabilitado
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
