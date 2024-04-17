import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import InnerContent from "./InnerContent";
import HomeViewPage from "../views/pages/Home/HomeViewPage";
import CollectionsViewPage from "../views/pages/Collections/CollectionsViewPage";
import ServicesViewPage from "../views/pages/Services/ServicesViewPage";
import CartViewPage from "../views/pages/Cart/CartViewPage";
import LoginViewPage from "../views/pages/Auth/LoginViewPage";
import ProfileViewPage from "../views/pages/Profile/ProfileViewPage";
import PublicRoute from "./PublicRoute";
import DashboardViewPage from "../views/pages/Dashboard/DashboardViewPage";
import RegisViewPage from "../views/pages/Auth/RegisViewPage";
const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<HomeViewPage />} />
        <Route path="collections" element={<CollectionsViewPage />} />
        <Route path="services" element={<ServicesViewPage />} />
        <Route path="cart" element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartViewPage />} />
        </Route>
        <Route path="profile" element={<ProtectedRoutes />}>
          <Route path="/profile" element={<ProfileViewPage />} />
        </Route>
        <Route
          path="dashboard"
          element={<ProtectedRoutes roleRequired="ADMIN" />}
        >
          <Route path="/dashboard" element={<DashboardViewPage />} />
        </Route>
      </Route>
    </Route>
    <Route path="/login" element={<PublicRoute />}>
      <Route path="" element={<LoginViewPage />} />
    </Route>
    <Route path="/register" element={<PublicRoute />}>
      <Route path="" element={<RegisViewPage />} />
    </Route>
    {/* 404 Route */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default MainRoutes;
