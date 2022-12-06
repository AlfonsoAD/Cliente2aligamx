// //BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
// //BY CESAR CASTRO SALAZAR

// import FetchInterceptor from "fetch-intercept";
// import useFetch from "./fetchRefresh";

// //Intercept de peticiones de apis (User, UserPreferences)
// const { callFetch } = useFetch();
// const sacar = () => {
//   window.localStorage.removeItem("accessToken");
//   window.localStorage.removeItem("refreshToken");
//   location.reload();
// };

// //Interceptor
// export const unregister = FetchInterceptor.register({
//   request: function (url, config) {
//     return [url, config];
//   },

//   requestError: function (error) {
//     return Promise.reject(error);
//   },

//   response: function (response) {
//     if (response.status == "401") {
//       const { res, data } = callFetch(response.url);
//       console.log(res, data);

//       console.log(response.url);
//     }

//     return response;
//   },

//   responseError: function (error) {
//     return Promise.reject(error);
//   },
// });
