import axios from "axios";
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
    // if (accessToken) {
    //   console.log("ACCESS TOKEN:::", accessToken);
    //   localStorage.setItem("accessToken", accessToken);
    // }
    return accessToken;
  } catch (error) {
    console.log(error);
    // Xử lý lỗi làm mới token
    throw error;
  }
}
