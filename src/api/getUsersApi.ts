import axios, { AxiosError } from "axios";

export async function getUsersApi() {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      console.log(errorMessage);
      throw new AxiosError(errorMessage);
    }
  }
}
