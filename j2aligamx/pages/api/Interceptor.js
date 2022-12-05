import FetchInterceptor from "fetch-intercept";
import { petitionRefreshToken } from "./petitionsUser";
import jwtDecode from "jwt-decode";

//Interceptor
export const unregister = FetchInterceptor.register({
  request: function (url, config) {
    return [url, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    // let token = window.localStorage.getItem("accessToken");
    // let decode = jwtDecode(token);
    // let date = Date.now();

    // if (response.status == 401 || decode.exp <= ) {
    //   try {
    //     const refreshTk = localStorage.getItem("refreshToken");
    //     const res = petitionRefreshToken(refreshTk).catch((err) =>
    //       console.log(err)
    //     );

    // if (
    //   response.request.url != "https://api-ligamx.onrender.com/refresh" &&
    //   response.request.url != "http://localhost:4000/refresh"
    // ) {
    //   fetch(response.request.url, {
    //     method: response.request.headers.method,
    //     headers: {
    //       Authorization: `Bearer ${res}`,
    //       "content-type": "application/JSON",
    //     },
    //   }).catch((err) => console.log(err));
    // }
    // } catch (err) {
    //   console.log(err);
    // }
    //}
    return response;
  },

  responseError: function (error) {
    return Promise.reject(error);
  },
});
