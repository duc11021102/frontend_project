import { IFormLogin } from "../interface/auth";
import axios, { AxiosError } from "axios";

export async function loginApi(formData: IFormLogin) {
  try {
    console.log("LOADING LOGIN::");
    const { data } = await axios.post("/api/auth/login", formData);
    localStorage.setItem("USER", JSON.stringify(data.data));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      console.log(errorMessage);
      throw new AxiosError(errorMessage);
    }
  }
}
