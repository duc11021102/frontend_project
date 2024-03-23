import axios, { AxiosError } from "axios";
import {
  IPayloadGetUserBySession,
  IResultGetUserBySession,
} from "../interface/user";

export async function getUserByCookie(sessionToken: IPayloadGetUserBySession) {
  try {
    const { data } = await axios.get<IResultGetUserBySession>("/user", {
      data: sessionToken,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      const errorMessage = error.response?.data.error.message;
      console.log(errorMessage);
      throw new AxiosError(errorMessage);
    }
  }
}
