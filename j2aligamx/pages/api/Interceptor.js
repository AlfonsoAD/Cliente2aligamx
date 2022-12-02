import FetchInterceptor from "fetch-intercept";
import { petitionRefreshToken } from "./petitionsUser";
//Interceptor
export const unregister = FetchInterceptor.register({
  request: function (url, config) {
    return [url, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    const refreshTk = localStorage.getItem("refreshToken");
    if (refreshTk) {
      response.status == 401
        ? petitionRefreshToken(refreshTk)
        : console.log("ok");
    }
    console.log(response.request.url);
    return response;
  },

  responseError: function (error) {
    return Promise.reject(error);
  },
});
