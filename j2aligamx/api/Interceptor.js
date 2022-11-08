import FetchInterceptor from "fetch-intercept";

//Interceptor
export const unregister = FetchInterceptor.register({
    request: function (url, config) {
        console.log("Hola");
        return [url, config];
    },
  
    requestError: function (error) {
      console.log("error");
      return Promise.reject(error);
    },
  
    response: function (response) {
      console.log("Hola response");
      return response;
    },
  
    responseError: function (error) {
      console.log("error");
      return Promise.reject(error);
    },
  });