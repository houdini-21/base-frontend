import type { NameProp } from '@Interfaces/Global.types';

export interface ITab extends NameProp {
  id: string | number;
}

export interface ITabsProps {
  activeTab: string | number;
  setActiveTab: (tab: string | number) => void;
  tabs: ITab[];
}
