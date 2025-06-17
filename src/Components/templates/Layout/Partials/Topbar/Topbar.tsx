import { useState } from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import type { TopbarProps } from "../../Layout.types";
import { useUserInfoStore } from "@Store/UserInfoStore";
import { useNavigate } from "react-router-dom";

const Topbar = ({ expandSidebar, children, setExpandSidebar }: TopbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const removeUserInfo = useUserInfoStore((state) => state.removeUserInfo);

  const closeSession = () => {
    localStorage.clear();
    removeUserInfo();

    navigate("/");
  };

  return (
    <div
      className={classNames(
        "flex sm:h-full flex-col transition-all ease-in duration-300",
        {
          "w-full md:w-10/12 lg:w-11/12 xl:w-11/12": expandSidebar,
          "w-full": !expandSidebar,
        }
      )}
    >
      <nav className="bg-white border-gray-200 w-full h-16 z-10">
        <div className="w-full flex items-center justify-between mx-auto p-4">
          <span className="self-center text-14font font-semibold whitespace-nowrap text-blue2 flex">
            <div
              className="flex items-center mr-5 lg:hidden"
              onClick={() => setExpandSidebar(!expandSidebar)}
            >
              <i className="fa-solid fa-bars text-blue2 text-18font" />
            </div>
            Dashboard
          </span>
          <div className="flex items-center md:order-2 relative">
            <div className="flex flex-row">
              <div className="flex flex-col items-end mr-5">
                <span className="text-14font text-blue2 font-semibold text-gray-500">
                  {userInfo.nombre} {userInfo.apellido}
                </span>
                <span className="text-10font text-gray3 font-semibold">
                  {userInfo.rol.name}
                </span>
              </div>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 h-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-10 h-10 overflow-hidden bg-blue4 rounded-full flex justify-center items-center">
                  <i className="text-blue text-16font fa-regular fa-user" />
                </div>
              </button>
            </div>
            <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
              <div
                className={classNames(
                  "z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 right-0 w-[115px]",
                  {
                    hidden: !isMenuOpen,
                  }
                )}
              >
                <ul className="text-center">
                  <li
                    className="block px-4 py-2 text-sm text-black hover:bg-gray4 rounded-lg cursor-pointer"
                    onClick={closeSession}
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Topbar;
