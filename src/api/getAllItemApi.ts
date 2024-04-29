import axios, { AxiosError } from "axios";

export async function getAllItemApi() {
  try {
    const { data } = await axios.get("/api/items");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      throw new AxiosError(errorMessage);
    }
  }
}
