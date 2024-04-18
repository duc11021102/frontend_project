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

export interface IUserFollower {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
}

export interface IUserFollowing {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
}
