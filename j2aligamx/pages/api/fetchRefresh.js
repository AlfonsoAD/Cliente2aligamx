//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { init } from "./apiUser";
//Flujo y procesos del Refresh tokens

let useFetch = () => {
  let config = {};
  let tokenAuth = "";
  let baseURL = "http://localhost:4000";

  //Solicitud original
  let requestOriginalFetch = async (url, config) => {
    //url = `${baseURL}${url}`;
    let response = await fetch(url, config);
    let data = await response.json();
    console.log("REQUESTING:", data);
    return { response, data };
  };

  const getRefreshTokenFromStorage = () => {
    if (
      window.localStorage.getItem("refreshToken") !== null &&
      window.localStorage.getItem("refreshToken") !== undefined &&
      window.localStorage.getItem("refreshToken") !== ""
    ) {
      return window.localStorage.getItem("refreshToken");
    }
  };

  //Refresh token
  let refreshToken = async (refreTok) => {
    const res = await fetch(`${baseURL}/refresh`, {
      method: "POST",
      body: JSON.stringify({
        refreshToken: refreTok,
      }),
      headers: { "content-type": "application/JSON" },
    });

    if (res.status == 200) {
      const resJson = await res.json();
      window.localStorage.setItem("accessToken", resJson.accessToken);
      init(resJson.accessToken);
      return resJson.accessToken;
    }
  };

  let callFetch = async (url) => {
    const user = jwt_decode(window.localStorage.getItem("accessToken"));
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      tokenAuth = await refreshToken(getRefreshTokenFromStorage());
    }

    config["headers"] = {
      Authorization: `Bearer ${tokenAuth}`,
    };

    let { res, data } = await requestOriginalFetch(url, config);
    return { res, data };
  };

  return { callFetch };
};

export default useFetch;
