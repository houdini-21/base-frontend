import type { ShadowProps } from './BoxShadow.types';

const BoxShadow = ({
  children,
  background = 'white-500',
  padding = '4',
  marginBottom = '5',
  styleClasses = '',
}: ShadowProps) => {
  return (
    <div
      className={`bg-${background} mb-${marginBottom} shadow-lg rounded-lg w-full p-${padding} ${styleClasses}`}
    >
      {children}
    </div>
  );
};

export default BoxShadow;
