export const baseUrlApi = (url: string) => {
  if (process.env.NODE_ENV === "development") {
    return `http://0.0.0.0:8849/wechat/${url}`;
  }
  if (process.env.NODE_ENV === "stage") {
    return `https://lp-cn-nba-portal-stage.merklechina.com/wechat/${url}`;
  } else {
    return `https://lp-cn-nba-portal-stage.merklechina.com/wechat/${url}`;
  }
};
