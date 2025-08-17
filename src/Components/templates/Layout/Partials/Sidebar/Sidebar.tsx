import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import logoWhite from "@assets/img/logo-white.svg";
import logoSmallWhite from "@assets/img/logo-small-white.svg";
import { P } from "@Components/atoms";
import type { SidebarProps } from "../../Layout.types";

const Sidebar = ({
  expandSidebar,
  setExpandSidebar,
  itemsNav,
}: SidebarProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<{
    [key: number]: boolean;
  }>({});

  return (
    <>
      <aside
        className={classNames(
          "bg-gray-900 transform transition-all ease-in duration-300 z-30",
          {
            "w-[270px] fixed h-full lg:relative": expandSidebar,
            "lg:w-[75px] w-0": !expandSidebar,
          }
        )}
      >
        <div
          className="w-full h-16 bg-gray-900 flex items-center justify-center cursor-pointer"
          onClick={() => setExpandSidebar(!expandSidebar)}
        >
          {expandSidebar ? (
            <img
              src={logoWhite}
              alt="logo"
              className="w-auto h-[35px] transform transition ease-in duration-300 hover:scale-90"
            />
          ) : (
            <img
              src={logoSmallWhite}
              alt="logo"
              className="w-auto h-[35px] transform transition-all ease-in duration-300 hover:scale-110"
            />
          )}
        </div>
        <div className="w-full py-5 pt-8 duration-300 static">
          {itemsNav.map((item, index) => (
            <>
              <div
                key={index}
                className="flex flex-col cursor-pointer text-sm items-center px-5"
              >
                <div
                  className={classNames(
                    "flex flex-col gap-x-4 py-3 my-2 w-full relative text-gray-200 rounded-md justify-center items-center",
                    {
                      "hover:bg-gray-700 hover:text-white duration-300 h-9":
                        !expandSidebar,
                    }
                  )}
                >
                  <div className={classNames("h-4", { hidden: expandSidebar })} onClick={() => {
                    setExpandSidebar(true);
                  }}>
                    <i
                      className={classNames(
                        "text-lg text-gray-200 w-5 h-5 text-center lg:block",
                        item.icon
                      )}
                    />
                  </div>
                  <P
                    color="white"
                    fontSize="sm"
                    type="bold"
                    styleClasses={classNames("text-left w-full", {
                      hidden: !expandSidebar,
                    })}
                  >
                    {item.text}
                  </P>
                  <div
                    className={classNames(
                      "w-full flex flex-col justify-start items-start",
                      { hidden: !expandSidebar }
                    )}
                  >
                    {item.modules &&
                      item.modules.map((module) =>
                        module.children ? (
                          <>
                            <div
                              className="flex gap-x-4 px-3 py-4 w-full mt-3 relative items-center h-9 hover:bg-gray-700 hover:text-white text-gray-200 duration-300 rounded-md"
                              onClick={() => {
                                setExpandSidebar(true);
                                setIsSubMenuOpen({
                                  ...isSubMenuOpen,
                                  [module.id]: !isSubMenuOpen[module.id],
                                });
                              }}
                            >
                              <div className="w-8 h-4">
                                <i
                                  className={classNames(
                                    "text-lg w-5 h-5 text-center lg:block text-gray-200",
                                    module.icon,
                                    { hidden: !expandSidebar }
                                  )}
                                />
                              </div>
                              <span
                                className={classNames(
                                  "text-sm origin-left whitespace-pre",
                                  {
                                    "opacity-0 translate-x-28 overflow-hidden":
                                      !expandSidebar,
                                  }
                                )}
                              >
                                {module.text}
                              </span>
                              <i
                                className={classNames(
                                  "text-lg fa-solid fa-chevron-down absolute right-3 transition",
                                  {
                                    "opacity-0 translate-x-28 overflow-hidden":
                                      !expandSidebar,
                                    "rotate-180": isSubMenuOpen[module.id],
                                  }
                                )}
                              />
                            </div>
                            <ul
                              className={classNames(
                                "self-start w-full overflow-hidden transition h-0",
                                {
                                  "h-auto":
                                    isSubMenuOpen[module.id] && expandSidebar,
                                }
                              )}
                            >
                              {module.children.map((subItem) => (
                                <li className="w-full" key={subItem.id}>
                                  <Link
                                    to={`/${subItem.path}`}
                                    className="flex items-center w-full p-2 text-gray-200 transition rounded-lg my-3 pl-16 text-sm group hover:bg-gray-700 hover:text-white"
                                  >
                                    <i className="fa-solid fa-circle text-[5px] mr-2" />
                                    {subItem.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            key={module.id}
                            to={`/${module.path}`}
                            className="flex gap-x-4 px-3 py-4 w-full mt-3 relative items-center h-9 hover:bg-gray-700 hover:text-white text-gray-200 rounded-md duration-300"
                          >
                            <div className="w-8 h-4">
                              <i
                                className={classNames(
                                  "text-lg w-5 h-5 text-center lg:block",
                                  module.icon,
                                  { hidden: !expandSidebar }
                                )}
                              />
                            </div>
                            <span
                              className={classNames(
                                "text-sm origin-left w-[130px] whitespace-normal",
                                {
                                  "opacity-0 translate-x-28 overflow-hidden":
                                    !expandSidebar,
                                }
                              )}
                            >
                              {module.text}
                            </span>
                          </Link>
                        )
                      )}
                  </div>
                </div>
              </div>
              {itemsNav.length - 1 !== index && (
                <div
                  className={classNames("w-full h-px bg-gray-500 my-2", {
                    hidden: !expandSidebar,
                  })}
                />
              )}
            </>
          ))}
        </div>
      </aside>

      <div
        className={classNames(
          "w-screen h-screen bg-gray-900 bg-opacity-60 overflow-y-auto absolute z-20 lg:hidden",
          {
            hidden: !expandSidebar,
          }
        )}
      />
    </>
  );
};

export default Sidebar;
