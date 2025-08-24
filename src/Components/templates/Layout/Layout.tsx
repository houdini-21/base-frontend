import { useState } from 'react';
import { Sidebar, Topbar } from './Partials';
import type { ILayoutProps } from './Layout.types';

const Layout = ({ children, itemsNav = [] }: ILayoutProps) => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  return (
    <div className='w-full h-screen flex flex-row'>
      <Sidebar
        expandSidebar={expandSidebar}
        setExpandSidebar={setExpandSidebar}
        itemsNav={itemsNav}
      />
      <Topbar expandSidebar={expandSidebar} setExpandSidebar={setExpandSidebar}>
        <div className='w-full flex-wrap h-screen bg-gray-100 overflow-y-auto'>{children}</div>
      </Topbar>
    </div>
  );
};
export default Layout;

