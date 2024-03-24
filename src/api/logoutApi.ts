import axios, { AxiosError } from "axios";
import { toastError } from "../views/containers/UI/Toast";
export async function logoutApi() {
  try {
    const { data } = await axios.post("/api/auth/logout");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      toastError(errorMessage);
      console.log(errorMessage);
      throw new AxiosError(errorMessage);
    }
  }
}
