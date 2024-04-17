import axios from "axios";
import { getAccessTokenApi } from "../getAccessToken";
import Cookies from "js-cookie";
import { toastError } from "../../views/containers/UI/Toast";
// import debug from "debug";
// const requestLogger = debug("request");

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      console.log("Response status : 200");
    }
    return response;
  },
  async (error) => {
    console.log(error.response.status);
    if (error.response && error.response.status === 401) {
      console.log("LOGGGGGGGGGGGGGGG");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("USER");
      Cookies.remove("XAVIA-AUTH");
      Cookies.remove("refreshToken");
      toastError("Login session has expired, please log in again.");
      window.location.href = "/login";
    } else if (error.response && error.response.status === 403) {
      console.log("REFRESH TOKEN");
      try {
        const accessToken = await getAccessTokenApi();
        localStorage.setItem("accessToken", accessToken);
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        axiosInstance(originalRequest);
      } catch (refreshError) {
        throw new Error("Failed to refresh access token");
      }
    } else {
      return Promise.reject(error);
    }
  },
);

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   (error) => {
//     console.log("401", error.response.status);
//     if (error.response && error.response.status === 401) {
//       console.log("LOGGGGGGGGGGGGGGG");
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("USER");
//       Cookies.remove("XAVIA-AUTH");
//       Cookies.remove("refreshToken");
//       toastError("Login session has expired, please log in again.");
//       window.location.href = "/login";
//     } else {
//       return Promise.reject(error);
//     }
//   },
// );

export default axiosInstance;
