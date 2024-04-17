import { IFormRegister } from "../interface/auth";
import axios, { AxiosError } from "axios";
import { toastError } from "../views/containers/UI/Toast";
export async function registerApi(formData: IFormRegister) {
  try {
    console.log("LOADING LOGIN::");
    const { data } = await axios.post("/api/auth/register", formData);
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
