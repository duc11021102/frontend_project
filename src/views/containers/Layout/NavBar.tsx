import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import soccer from "../../assets/soccer.png";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navLinkClass = ({ isActive }: any) => {
    return isActive
      ? "flex items-center gap-1 h-16 block py-2 px-3 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 "
      : "flex items-center gap-1 h-16 block py-2 px-3 text-gray-900 rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 ";
  };
  return (
    <nav className="bg-white border-gray-200 font-body fixed w-full shadow-2xl ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-16">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className="w-10 h-10" src={soccer}></img>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col h-16 items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collections"
                id="dropdownNavbarLink"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                data-dropdown-toggle="dropdownNavbar"
                className={navLinkClass}
              >
                Sản phẩm
                <IoIosArrowDown />
              </NavLink>
              <div
                id="dropdownNavbar"
                className={`z-10 ${!isOpen ? `hidden` : ``} absolute font-normal bg-white divide-y divide-gray-100 rounded-sm shadow-2xl w-44`}
              >
                <ul
                  className=" text-sm text-gray-700 border-t border-green-500 "
                  aria-labelledby="dropdownLargeButton"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <li>
                    <NavLink
                      to="/collections/fan"
                      className="block px-4 py-4 hover:bg-gray-100 border-b"
                    >
                      Áo bóng đá bản fan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/player"
                      className="block px-4 py-4 hover:bg-gray-100 border-b"
                    >
                      Áo bóng đá bản Player
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/classic"
                      className="block px-4 py-4 hover:bg-gray-100 border-b"
                    >
                      Áo bóng đá bản classic
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Dịch vụ
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={navLinkClass}>
                Giỏ hàng
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <span className="sr-only">Search icon</span>
              <IoIosSearch className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Tìm kiếm sản phẩm..."
            ></input>
          </div>
          <NavLink
            to="/cart"
            className="flex h-16 justify-center items-center cursor-pointer"
          >
            <div className="relative h-16 flex items-center">
              <div className=" absolute top-2 left-4">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  3
                </p>
              </div>
              <BsCart3 className="text-2xl" />
            </div>
          </NavLink>
          <NavLink
            to="/login"
            className="flex h-16 justify-center items-center cursor-pointer"
          >
            <div className="relative h-16 flex items-center">
              <BsPerson className="text-3xl" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
