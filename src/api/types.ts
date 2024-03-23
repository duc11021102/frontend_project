export type HttpResponse<T> = {
  errorCode: number;
  errorMsg: string;
  result: T;
};
