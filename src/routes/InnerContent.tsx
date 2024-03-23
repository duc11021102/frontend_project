import NavBar from "../views/containers/Layout/NavBar";
import { Outlet } from "react-router-dom";
const InnerContent = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default InnerContent;
