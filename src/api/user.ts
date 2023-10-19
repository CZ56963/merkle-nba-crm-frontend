import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  errorMessage: string;
  errorCode: number;
  data: {
    /** 用户名 */
    name: string;
    /** 用户ID */
    accountId: number;
    /** email */
    email: string;
    /** 语言 */
    language: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    phone: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    pbNos: Array<pbNo>;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
  };
  headers: any;
};

export type pbNo = {
  alias: string;
  authorizerAppid: string;
  headImg: string;
  id: number;
  nickName: string;
  principalName: string;
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>(
    "post",
    baseUrlApi("user/login"),
    { data },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
