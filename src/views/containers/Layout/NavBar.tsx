import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsCart3, BsPerson } from "react-icons/bs";
import soccer from "../../assets/soccer.png";
import { checkAuth } from "../../../utils/checkAuth";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../../api/logoutApi";
import { toastSuccess } from "../UI/Toast";
import { useTranslation } from "react-i18next";
import flagvn from "../../assets/flag-vn.svg";
import flagen from "../../assets/flag-en.svg";
interface IActive {
  isActive: boolean;
}

const NavBar = () => {
  //STORE
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const navigate = useNavigate();
  const [lang, setLang] = useState("vn");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  //QUERY
  const { mutate } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      const logoutSuccess = t("toast.logoutsuccess");
      localStorage.removeItem("USER");
      navigate("/home");
      setIsOpenInfo(false);
      toastSuccess(logoutSuccess);
    },
  });
  //CHECK AUTH
  const { user, role, auth } = checkAuth();
  // SET LANG
  const changLanguageHandler = (value: string) => {
    if (value === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else if (value === "vn") {
      i18n.changeLanguage("vn");
      localStorage.setItem("language", "vn");
    }
  };
  // GET LANG
  useEffect(() => {
    const currentLang = i18n.language;
    if (currentLang === "vn") {
      setLang("vn");
    } else if (currentLang === "en") {
      setLang("en");
    }
  }, [i18n.language]);
  const navLinkClass = ({ isActive }: IActive) => {
    return isActive
      ? "flex items-center gap-1 h-16 block py-2 px-3 text-green-500 bg-green-500 rounded md:bg-transparent md:p-0  "
      : "flex items-center gap-1 h-16 block py-2 px-3 text-gray-900  rounded md:bg-transparent md:p-0 hover:text-green-500";
  };

  return (
    <nav className="bg-white border-gray-200 font-body fixed w-full shadow-2xl px-10 lg:px-24 z-10">
      <div className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img className="w-10 h-10" src={soccer}></img>
        </a>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col h-16 items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink to="/home" className={navLinkClass}>
                {t("navbar.home")}
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
                {t("navbar.collections")}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
                      {t("navbar.versionFan")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/player"
                      className="block px-4 py-4 hover:bg-gray-100 border-b"
                    >
                      {t("navbar.versionPlayer")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/classic"
                      className="block px-4 py-4 hover:bg-gray-100 border-b"
                    >
                      {t("navbar.versionClassic")}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                {t("navbar.services")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={navLinkClass}>
                {t("navbar.cart")}
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
              placeholder={t("navbar.search")}
            ></input>
          </div>
          <NavLink
            to="/cart"
            className="flex h-16 justify-center items-center cursor-pointer"
          >
            <div className="relative h-16 flex items-center">
              <div className=" absolute top-2 left-4">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  0
                </p>
              </div>
              <BsCart3 className="text-2xl" />
            </div>
          </NavLink>

          <div className="relative h-16 flex flex-col items-center">
            <div
              onMouseEnter={() => setIsOpenInfo(true)}
              onMouseLeave={() => setIsOpenInfo(false)}
              className="h-full flex justify-center items-center"
            >
              <BsPerson className="text-3xl" />
            </div>

            {isOpenInfo && (
              <div
                onMouseEnter={() => setIsOpenInfo(true)}
                onMouseLeave={() => setIsOpenInfo(false)}
                id="dropdownAvatar"
                className="z-10 absolute mt-16 bg-white border-t border-green-500  shadow-2xl w-44 "
              >
                {auth && (
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user?.username}</div>
                    <div className="font-medium truncate">{user?.email}</div>
                  </div>
                )}
                {auth && (
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    {role === 1 && (
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {t("navbar.dashboard")}
                        </a>
                      </li>
                    )}
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("navbar.account")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("navbar.asset")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("navbar.orders")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("navbar.concerns")}
                      </a>
                    </li>
                  </ul>
                )}
                {auth && (
                  <div className="py-2">
                    <button
                      onClick={() => mutate()}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t("navbar.logout")}
                    </button>
                  </div>
                )}
                {!auth && (
                  <div className="py-2 w-full flex justify-center items-center">
                    <button
                      onClick={() => navigate("/login")}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t("navbar.login")}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative hidden h-16 lg:flex flex-col items-center">
            <div
              onMouseEnter={() => setIsOpenLang(true)}
              onMouseLeave={() => setIsOpenLang(false)}
              className="h-full cursor-pointer flex justify-center items-center"
            >
              <img className="w-7" src={lang === "vn" ? flagvn : flagen} />
            </div>

            {isOpenLang && (
              <div
                onMouseEnter={() => setIsOpenLang(true)}
                onMouseLeave={() => setIsOpenLang(false)}
                id="dropdownAvatar"
                className="z-10 absolute mt-16 bg-white border-t border-green-500  shadow-2xl w-44 "
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li
                    onClick={() => changLanguageHandler("vn")}
                    className="flex w-full cursor-pointer justify-between items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <img className="w-7" src={flagvn} />
                    <p>{t("lang.vn")}</p>
                  </li>
                  <li
                    onClick={() => changLanguageHandler("en")}
                    className="flex w-full cursor-pointer justify-between items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <img className="w-7" src={flagen} />
                    <p>{t("lang.en")}</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
