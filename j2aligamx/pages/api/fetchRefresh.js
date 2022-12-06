//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

//Flujo y procesos del Refresh tokens
let useFetch = () => {
  let config = {};
  let tokenAuth = "";
  //let baseURL = "http://localhost:4000";
  let baseURL = "https://web-production-b53e.up.railway.app/";

  //Método para sacar al usuario de la página
  const expel = () => {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    location.reload();
  };

  //Solicitud para las preferencias del usuario: Nueva referencia de fetch
  let requestOriginalFetch = async (url, config, par) => {
    url = `${baseURL}${url}`;
    const res = await fetch(`${url}${par}`, config);
    const resJson = await res.json();
    return resJson;
  };

  //Tomar token de refresh del local storage
  const getRefreshTokenFromStorage = () => {
    if (
      window.localStorage.getItem("refreshToken") !== null &&
      window.localStorage.getItem("refreshToken") !== undefined &&
      window.localStorage.getItem("refreshToken") !== ""
    ) {
      return window.localStorage.getItem("refreshToken");
    }
  };

  //Endpoint para sacar el refresh token
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
      return resJson.accessToken;
    }
  };

  //Preparar solicitud y validar si los tokens son validos
  let callFetch = async (url, params) => {
    let par = params;
    //Tomar el accestoken, refrestoken y se decodifican
    tokenAuth = window.localStorage.getItem("accessToken");
    const user = jwt_decode(window.localStorage.getItem("accessToken"));
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    const refreshTk = jwt_decode(window.localStorage.getItem("refreshToken"));
    const useless = dayjs.unix(refreshTk.exp).diff(dayjs()) < 1;

    //Valido si el token no ha expirado
    if (isExpired) {
      tokenAuth = await refreshToken(getRefreshTokenFromStorage());
    }

    //Valido si el refresh token ya venció para sacar al usuario de la página
    if (useless) {
      expel();
    }

    //Preparación de la solicitud
    if (params == 1) {
      par = user.id;
      config["headers"] = {
        Authorization: `Bearer ${tokenAuth}`,
        "content-Type": "application/JSON",
      };
      const res = await requestOriginalFetch(url, config, par);
      return res;
    } else {
      config = {
        method: "POST",
        ...par,
        headers: {
          Authorization: `Bearer ${tokenAuth}`,
          "content-Type": "application/JSON",
        },
      };
      const res = await requestOriginalFetch(url, config, "");
      return res;
    }
  };

  return { callFetch };
};

export default useFetch;
