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
    console.log(resJson);
    window.localStorage.setItem("accessToken", resJson.accessToken);
    window.localStorage.setItem("userProfileToken", resJson.userProfile);
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
const petitionRecoverNewPassword = async (token, password) => {
  const res = await fetch(`${urlApi}changePass/${token}`, {
    method: "POST",
    body: JSON.stringify({
      password: password,
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
const refreshToken = async () => {
  const refreTok = window.localStorage.getItem("token-refresh");
  const res = await fetch(`${urlApi}refresh`, {
    method: "POST",
    body: JSON.stringify({
      refreshToken: refreTok,
    }),
    headers: { "content-type": "application/JSON" },
  });
  if (res.status == 200) {
    const resJson = await res.json();
    window.localStorage.setItem("access-token", resJson.accessToken);
    window.localStorage.setItem("refresh-token", resJson.refreshToken);
  } else {
    window.localStorage.removeItem("access-token");
    window.localStorage.removeItem("refresh-token");
    location.reload();
  }
};

export {
  petitionLogin,
  petitionSignUp,
  petitionForgotPassword,
  petitionConfirmation,
  petitionRecoverNewPassword,
  refreshToken,
};
