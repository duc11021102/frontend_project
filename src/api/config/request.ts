import axios from "axios";
import { getAccessTokenApi } from "../getAccessToken";
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

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403) {
      try {
        const accessToken = await getAccessTokenApi();
        localStorage.setItem("accessToken", accessToken);
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // window.location.href = "/login";
        throw new Error("Failed to refresh access token");
      }
    }
    return Promise.reject(error);
  },
);
