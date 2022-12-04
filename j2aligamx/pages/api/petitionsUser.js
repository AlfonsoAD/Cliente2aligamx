import { unregister } from "./Interceptor";
import jwt_decode from "jwt-decode";

//const urlApi = "https://api-ligamx.onrender.com";
const urlApi = "http://localhost:4000";

var tokenAuth = "";

const init = (token) => {
  tokenAuth = token;
};

const options = {
  headers: {
    Authorization: `Bearer ${tokenAuth}`,
    "content-Type": "application/JSON",
  },
};

//Registro de usuario
const petitionSignUp = async (email, password, userName) => {
  const res = await fetch(`${urlApi}/users/signup`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: userName,
    }),
    headers: { "content-Type": "application/JSON" },
  });
  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Confirmación del correo electrónico
const petitionConfirmation = async (token) => {
  if (token != null) {
    const res = await fetch(`${urlApi}/confirmation/${token}`, {
      method: "POST",
      headers: { "content-Type": "application/JSON" },
    });

    if (res.status != 200) {
      throw new Error("Algo ha salido mal");
    }

    const response = await res.json();
    return response;
  }
};

//Inicio de sesión
const petitionLogin = async (email, password) => {
  const res = await fetch(`${urlApi}/users/refresh-login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "content-Type": "application/JSON" },
  });

  const resJson = await res.json();

  if (res.status == 200) {
    let decode = jwt_decode(resJson.accessToken);
    window.localStorage.setItem("accessToken", resJson.accessToken);
    window.localStorage.setItem("refreshToken", resJson.refreshToken);
    window.localStorage.setItem("id", decode.id);
  } else {
    throw new Error("Algo ha salido mal");
  }

  return resJson;
};

//Recuperar contraseña
const petitionForgotPassword = async (email) => {
  const res = await fetch(`${urlApi}/user/${email}`);

  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Contraseña nueva
const petitionRecoverNewPassword = async (tokenV, passwordConfirm) => {
  const res = await fetch(`${urlApi}/changePass/${tokenV}`, {
    method: "POST",
    body: JSON.stringify({
      password: passwordConfirm,
    }),
    headers: { "content-Type": "application/JSON" },
  });
  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Refresh token
const petitionRefreshToken = async (refreTok) => {
  const res = await fetch(`${urlApi}/refresh`, {
    method: "POST",
    body: JSON.stringify({
      refreshToken: refreTok,
    }),
    headers: { "content-type": "application/JSON" },
  });

  if (res.status == 200) {
    const resJson = await res.json();
    let decode = jwt_decode(resJson.accessToken);
    window.localStorage.setItem("accessToken", resJson.accessToken);
    window.localStorage.setItem("id", decode.id);
    init(resJson.accessToken);
    return resJson.accessToken;
  } else {
    throw new Error("Sesión caducada");
  }
};

//PREFERENCIAS DE USUARIO --------------------------------------------------------------------------------------------------------------------------------
const petitionPostPreferences = async (idUser, idTeam, nameTeam, logoTeam) => {
  const res = await fetch(`${urlApi}/preferencias-usuarios`, {
    method: "POST",
    body: JSON.stringify({
      idEquipoFavorito: idTeam,
      NombreEquipo: nameTeam,
      LogoEquipo: logoTeam,
      idUser: idUser,
    }),
    headers: {
      Authorization: `Bearer ${tokenAuth}`,
      "content-Type": "application/JSON",
    },
  });
  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

const petitionPreferences = async (id) => {
  try {
    const res = await fetch(`${urlApi}/preferencias-usuarios/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenAuth}`,
        "content-Type": "application/JSON",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

export {
  petitionLogin,
  petitionSignUp,
  petitionForgotPassword,
  petitionConfirmation,
  petitionRecoverNewPassword,
  petitionRefreshToken,
  petitionPreferences,
  petitionPostPreferences,
  init,
};
