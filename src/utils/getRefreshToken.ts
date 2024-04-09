import Cookies from "js-cookie";
const getRefreshToken = () => {
  const value = Cookies.get("refreshToken");
  if (value) {
    return value;
  }
  return null;
};
export default getRefreshToken;
