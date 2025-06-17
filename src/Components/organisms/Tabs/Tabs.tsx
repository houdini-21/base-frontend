import classNames from "classnames";
import type { ITabsProps } from "./Tabs.types";

const Tabs = ({ activeTab, setActiveTab, tabs }: ITabsProps) => {
  return (
    <div className="max-w-2xl">
      <div className="border-b border-gray-300 mb-4">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li className="mr-2" key={tab.id}>
              <button
                className={classNames(
                  "inline-block rounded-t-lg py-2 px-4 text-base font-medium text-center border-b-2",
                  {
                    "text-blue-600 border-blue-600": activeTab === tab.id, // Active tab styles
                    "text-gray-500 border-transparent hover:text-blue-600 hover:border-gray-300":
                      activeTab !== tab.id, // Inactive tab styles
                  }
                )}
                type="button"
                role="tab"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
