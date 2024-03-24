import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

// IF YOU ARE ALREADY LOGGED IN, YOUR ACCESS TO /LOGIN WILL BE RETURNED TO /HOME
const PublicRoute = () => {
  const { auth } = checkAuth();
  return auth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
