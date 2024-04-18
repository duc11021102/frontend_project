import { AxiosError } from "axios";
import axios from "axios";
export async function getFollowingApi() {
  try {
    const { data } = await axios.get("/git/users/duc11021102/following", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN_GITHUB}`,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      throw new AxiosError(errorMessage);
    }
  }
}
