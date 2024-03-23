export interface IPayloadGetUserBySession {
  sessionToken: string;
}
export interface IResultGetUserBySession {
  is_success: boolean;
  data: {
    _id: string;
    email: string;
    username: string;
    role: number;
    __v: number;
  };
}
