import { unregister } from "./Interceptor";
const urlApi = "https://j2sligamxapi.herokuapp.com/";

//Registro de usuario
const petitionSignUp = async (email, password, userName) => {
  const res = await fetch(`${urlApi}users/signup`, {
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
    const res = await fetch(`${urlApi}confirmation/${token}`, {
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
  const res = await fetch(`${urlApi}users/refresh-login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "content-Type": "application/JSON" },
  });

  const resJson = await res.json();

  if (res.status == 200) {
    window.localStorage.setItem("accessToken", resJson.accessToken);
    window.localStorage.setItem("refreshToken", resJson.refreshToken);
  } else {
    throw new Error("Algo ha salido mal");
  }

  return resJson;
};

//Recuperar contraseña
const petitionForgotPassword = async (email) => {
  const res = await fetch(`${urlApi}user/${email}`);

  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Contraseña nueva
const petitionRecoverNewPassword = async (tokenV, passwordConfirm) => {
  const res = await fetch(`${urlApi}changePass/${tokenV}`, {
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
  const res = await fetch(`${urlApi}refresh`, {
    method: "POST",
    body: JSON.stringify({
      refreshToken: refreTok,
    }),
    headers: { "content-type": "application/JSON" },
  });
  if (res.status == 200) {
    const res = await res.json();
    window.localStorage.setItem("accessToken", resJson.accessToken);
  } else {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("accessToken");
    throw new Error("Algo ha salido mal");
  }

  return resJson;
};

export {
  petitionLogin,
  petitionSignUp,
  petitionForgotPassword,
  petitionConfirmation,
  petitionRecoverNewPassword,
  petitionRefreshToken,
};
