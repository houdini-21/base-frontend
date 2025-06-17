export interface INavbarItem {
  id: number;
  icon: string;
  text: string;
  modules?: Array<{
    id: number;
    text: string;
    path?: string;
    icon?: string;
    children?: Array<{
      id: number;
      text: string;
      path: string;
    }>;
  }>;
}

export interface ILayoutProps {
  children: React.ReactNode;
  itemsNav: INavbarItem[];
}

export interface TopbarProps {
  expandSidebar: boolean;
  children: React.ReactNode;
  setExpandSidebar: (expandSidebar: boolean) => void;
}

export interface SidebarProps {
  expandSidebar: boolean;
  setExpandSidebar: (expandSidebar: boolean) => void;
  itemsNav: INavbarItem[];
}
