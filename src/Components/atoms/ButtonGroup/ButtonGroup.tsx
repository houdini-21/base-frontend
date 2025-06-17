import classNames from 'classnames';
import type { ButtonGroupCustomProps } from './ButtonGroup.types';

const ButtonGroup = ({
  styleClasses,
  items,
  value,
  onChange,
  disabled = false,
}: ButtonGroupCustomProps) => {
  return (
    <div className="flex flex-row bg-gray-100 rounded-full p-1">
      {items.map((item, index) => (
        <button
          className={classNames(
            'font-bold py-2 px-4 rounded-full transition text-sm',
            styleClasses,
            {
              'bg-blue-500 text-white': value === item.value, // Botón seleccionado
              'text-blue-500 hover:bg-blue-100': value !== item.value && !disabled, // Botón no seleccionado
              'opacity-50 cursor-not-allowed text-gray-400': disabled, // Botón deshabilitado
            }
          )}
          type="button"
          key={index}
          onClick={() => onChange(item.value)}
          disabled={disabled}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
