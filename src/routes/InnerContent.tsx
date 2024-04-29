import NavBar from "../views/containers/Layout/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Message } from "../views/containers/UI/Message";
import ScrollToTop from "../views/containers/UI/ScrollToTop";
const InnerContent = () => {
  const navigate = useNavigate();
  //REMOVE LOCAL STORAGE AND REDIRECT TO LOGIN WHEN NOT FOUND COOKIES
  useEffect(() => {
    const cookieExists = document.cookie.includes("XAVIA-AUTH");
    if (!cookieExists) {
      localStorage.removeItem("USER");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Message />
      <ScrollToTop />
    </div>
  );
};

export default InnerContent;
