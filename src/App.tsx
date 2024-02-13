import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import LoginViewPage from "./views/pages/Auth/LoginViewPage";
import MainFrame from "./views/containers/Layout/MainFrame";
import HomeViewPage from "./views/pages/Home/HomeViewPage";
import CollectionsViewPage from "./views/pages/Collections/CollectionsViewPage";
import ServicesViewPage from "./views/pages/Services/ServicesViewPage";
import CartViewPage from "./views/pages/Cart/CartViewPage";
function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginViewPage />}></Route>
      <Route path="/" element={<MainFrame />}>
        <Route path="/" element={<HomeViewPage />} />
        <Route path="home" element={<HomeViewPage />} />
        <Route path="collections" element={<CollectionsViewPage />} />
        <Route path="services" element={<ServicesViewPage />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <CartViewPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}

export default App;
