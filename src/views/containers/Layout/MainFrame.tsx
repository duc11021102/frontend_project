import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const MainFrame = () => {
  return (
    <main className="">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default MainFrame;
