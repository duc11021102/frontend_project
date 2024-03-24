import NavBar from "../views/containers/Layout/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const InnerContent = () => {
  const navigate = useNavigate();
  //REMOVE LOCAL STORAGE AND REDIRECT TO LOGIN WHEN NOT FOUND COOKIES
  useEffect(() => {
    const cookieExists = document.cookie.includes("XAVIA-AUTH");
    if (!cookieExists) {
      localStorage.removeItem("USER");
      navigate("/home");
    }
  }, [navigate]);
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default InnerContent;
