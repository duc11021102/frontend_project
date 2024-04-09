import { IFormLogin } from "../interface/auth";
import { AxiosError } from "axios";
import { toastError } from "../views/containers/UI/Toast";
import { getAccessTokenApi } from "./getAccessToken";
import axios from "axios";
export async function loginApi(formData: IFormLogin) {
  try {
    console.log("LOADING LOGIN::");
    const { data } = await axios.post("/api/auth/login", formData);
    localStorage.setItem("USER", JSON.stringify(data.data));
    const accessToken = await getAccessTokenApi();
    if (accessToken) {
      console.log("ACCESS TOKEN:::", accessToken);
      localStorage.setItem("accessToken", accessToken);
    }
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
