import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";
//protected Route STATE
type ProtectedRouteType = {
  roleRequired?: "ADMIN" | "USER";
};
// CHUA DANG NHAP THI VAO CART SE CHUYEN SANG TRANG LOGIN
// DANG NHAP ROI MA KHONG = ROLEREQUIRED THI CHUYEN SANG TRANG HOME
const ProtectedRoutes = ({ roleRequired }: ProtectedRouteType) => {
  const { auth, role } = checkAuth();
  const roleStr = role === 1 ? "ADMIN" : role === 2 ? "USER" : "NULL";
  //if the role required is there or not
  if (roleRequired) {
    return auth ? (
      roleRequired === roleStr ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
