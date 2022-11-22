import FetchInterceptor from "fetch-intercept";

//Interceptor
export const unregister = FetchInterceptor.register({
  request: function (url, config) {
    return [url, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    return response;
  },

  responseError: function (error) {
    return Promise.reject(error);
  },
});
