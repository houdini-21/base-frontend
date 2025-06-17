import classNames from 'classnames';
import type { ProgressTextProps } from './ProgressText.types';

const ProgressText = ({ progress, arrowDirection, styleClasses }: ProgressTextProps) => {
  const color = arrowDirection === 'up' ? 'bg-green' : 'bg-red';
  return (
    <div
      className={classNames(
        'flex px-2 shadow-lg rounded-md flex-row justify-between items-center py-1',
        color,
        styleClasses,
      )}
    >
      {arrowDirection && arrowDirection === 'up' ? (
        <i className='fa-solid fa-arrow-up text-white w-6 h-6 flex justify-center items-center' />
      ) : (
        <i className='fa-solid fa-arrow-down text-white w-6 h-6 flex justify-center items-center' />
      )}
      <p className='text-base text-center text-white font-extrabold w-20'>{`${progress}%`}</p>
    </div>
  );
};

export default ProgressText;
