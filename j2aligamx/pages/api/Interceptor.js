import FetchInterceptor from "fetch-intercept";

//Interceptor
export const unregister = FetchInterceptor.register({
  request: function (url, config) {
    return [url, config];
  },

  requestError: function (error) {
    console.log(error);
    return Promise.reject(error);
  },

  response: function (response) {
    console.log(response.status);
    console.log(response.json);
    return response;
  },

  responseError: function (error) {
    console.log(error);
    return Promise.reject(error);
  },
});
