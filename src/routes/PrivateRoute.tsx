import { Navigate } from "react-router-dom";
interface Props {
  children?: React.JSX.Element;
}
const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuth = true;
  const ele = isAuth ? <>{children}</> : <Navigate to="/login"></Navigate>;
  return ele;
};

export default PrivateRoute;
