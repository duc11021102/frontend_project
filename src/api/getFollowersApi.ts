import { AxiosError } from "axios";
import axios from "axios";
export async function getFollowersApi() {
  try {
    const { data } = await axios.get("/git/users/duc11021102/followers");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      throw new AxiosError(errorMessage);
    }
  }
}
