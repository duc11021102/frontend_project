import axios, { AxiosError } from "axios";
import getRefreshToken from "../utils/getRefreshToken";
export async function getAccessTokenApi() {
  const refreshToken = getRefreshToken();
  try {
    const response = await axios.post(
      "/api/auth/refreshToken",
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    const { accessToken } = await response.data;
    return accessToken;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Status", error.response?.status);
      const errorMessage = error.response?.data.error.message;
      throw new AxiosError(errorMessage);
    }
  }
}
