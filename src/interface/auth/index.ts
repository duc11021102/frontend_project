export interface IFormLogin {
  email: string;
  password: string;
}

export interface IFormRegister {
  email: string;
  password: string;
  username: string;
}

export interface IFormRegisterValidate {
  email: string;
  username: string;
  password: string;
  rePassword: string;
}
