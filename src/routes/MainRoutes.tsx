import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import InnerContent from "./InnerContent";
import HomeViewPage from "../views/pages/Home/HomeViewPage";
import CollectionsViewPage from "../views/pages/Collections/CollectionsViewPage";
import ServicesViewPage from "../views/pages/Services/ServicesViewPage";
import CartViewPage from "../views/pages/Cart/CartViewPage";
import LoginViewPage from "../views/pages/Auth/LoginViewPage";
import PublicRoute from "./PublicRoute";
const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    {/* <Route path="/" element={<ProtectedRoutes />}> */}
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="home" />} />
      <Route path="home" element={<HomeViewPage />} />
      <Route path="collections" element={<CollectionsViewPage />} />
      <Route path="services" element={<ServicesViewPage />} />
      <Route path="cart" element={<ProtectedRoutes />}>
        <Route path="/cart" element={<CartViewPage />} />
      </Route>
      {/* </Route> */}
    </Route>
    <Route path="/login" element={<PublicRoute />}>
      <Route path="" element={<LoginViewPage />} />
    </Route>
    {/* 404 Route */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default MainRoutes;
