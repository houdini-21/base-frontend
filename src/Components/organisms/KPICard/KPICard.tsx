import type { KPICardProps } from './KPICard.types';

const KPICard = ({
  title,
  primaryText,
  secondaryText,
  arrowDirection,
  withArrowIcon = false,
  classNameContainer = '',
}: KPICardProps) => {
  return (
    <div className={`${classNameContainer} px-2 shadow-lg rounded-md bg-white`}>
      {/* Title Section */}
      <div className='pt-1 pb-2 text-center'>
        <p className='text-blue-600 text-sm font-medium'>{title}</p>
      </div>

      {/* Divider */}
      <div className='border-t-2 border-gray-300' />

      {/* Content Section */}
      <div className='flex py-1 flex-row px-2 items-center'>
        {/* Primary Text */}
        <div className='w-1/3'>
          <p className='text-blue-600 text-2xl font-bold'>{primaryText}</p>
        </div>

        {/* Secondary Text and Arrow Icon */}
        {withArrowIcon ? (
          <div className='flex w-2/3 justify-end items-center'>
            {arrowDirection && arrowDirection === 'up' ? (
              <i className='fa-solid fa-arrow-up text-green-500 w-4 h-4' />
            ) : (
              <i className='fa-solid fa-arrow-down text-red-500 w-4 h-4' />
            )}
            <p
              className={`${
                arrowDirection === 'up' ? 'text-green-500' : 'text-red-500'
              } text-sm pl-2 font-semibold`}
            >
              {secondaryText}
            </p>
          </div>
        ) : (
          <div className='flex w-2/3 justify-end items-center'>
            <p className='text-blue-600 font-bold text-sm'>{`En ruta: ${secondaryText}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
