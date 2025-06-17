import type { JSX } from 'react';
import type { ChildrenJsxProp } from '@Interfaces/Global.types';

interface ContainerProps extends ChildrenJsxProp {
  page: string;
  customJsx?: JSX.Element;
}

const Container = ({ children, page, customJsx }: ContainerProps): JSX.Element => {
  return (
    <div className='w-full h-full px-5 sm:px-15 md:px-15 lg:px-20 py-5 relative'>
      <div className='flex items-center mb-5'>
        <h1 className='text-blue2 font-semibold mb-0'>{page}</h1>
        {customJsx && customJsx}
      </div>
      {children}
    </div>
  );
};

export default Container;
