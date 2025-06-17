import { useState } from 'react';
import classNames from 'classnames';
import type { TextareaProps } from './Textarea.types';

const Textarea = ({
  placeholder,
  label,
  name,
  id,
  disabled = false,
  error = false,
  errorMessage,
  value,
  styleClasses,
  classNameInput,
  onChange,
}: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={classNames('flex flex-col', styleClasses)}>
      <label
        htmlFor={name}
        className={classNames('text-sm font-normal mb-1', {
          'text-red-500': error, // Error label
          'text-black': isFocused || (value !== '' && !error), // Active label
          'text-gray-400': value === '' && !isFocused && !error, // Placeholder label
          'text-gray-500': disabled, // Disabled label
        })}
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={classNames(
          'border px-4 py-2 rounded-md text-sm outline-none h-36',
          classNameInput,
          {
            'border-red-500': error, // Error border
            'border-black text-black': value !== '' && !error, // Active input
            'text-gray-400 border-gray-300': value === '' && !isFocused && !disabled, // Placeholder input
            'border-blue-500': isFocused && !error, // Focused input
            'text-gray-500 bg-gray-100 cursor-not-allowed': disabled, // Disabled input
          },
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && (
        <p className='text-red-500 text-sm font-bold mt-2 flex items-center'>
          <i className='fa-sharp fa-solid fa-circle-exclamation mr-2' />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Textarea;
