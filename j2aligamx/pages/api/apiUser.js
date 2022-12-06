//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Usuarios
//Peticiones respecto al usuario
// const urlApi = process.env.API_URL;
const urlApi = "http://localhost:4000";

//Registro de usuario
const postSignUp = async (email, password, userName) => {
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
const postConfirmation = async (token) => {
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
const postLogin = async (email, password) => {
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
    window.localStorage.setItem("accessToken", resJson.accessToken);
    window.localStorage.setItem("refreshToken", resJson.refreshToken);
  } else {
    throw new Error("Algo ha salido mal");
  }

  return resJson;
};

//Recuperar contraseña
const postForgotPassword = async (email) => {
  const res = await fetch(`${urlApi}/user/${email}`);

  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Contraseña nueva
const postRecoverNewPassword = async (tokenV, passwordConfirm) => {
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

export {
  postLogin,
  postSignUp,
  postForgotPassword,
  postConfirmation,
  postRecoverNewPassword,
};
