import axios from "axios";
import debug from "debug";

const requestLogger = debug("request");

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.method && config.url) {
      requestLogger(config.method.toUpperCase() + " " + config.url);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
