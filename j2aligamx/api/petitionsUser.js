const urlUsersSignUp = "https://j2sligamxapi.herokuapp.com/users/signup";
const urlUsersLogIn = "https://j2sligamxapi.herokuapp.com/users/login";
const urlUserForgotPassword = "https://j2sligamxapi.herokuapp.com/user/";
const urlConfirmationEmail = "https://j2sligamxapi.herokuapp.com/confirmation/";
const urlRecoverNewPassword = "https://j2sligamxapi.herokuapp.com/changePass/";

//User register
const petitionSignUp = async (email, password, userName) => {
  const res = await fetch(urlUsersSignUp, {
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

//Confirmation email
const petitionConfirmation = async (token) => {
  if (token != null) {
    const res = await fetch(`${urlConfirmationEmail}${token}`, {
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

//Login
const petitionLogin = async (email, password) => {
  const res = await fetch(urlUsersLogIn, {
    method: "POST",
    body: JSON.stringify({
      email: email,
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

//Forgot password
const petitionForgotPassword = async (email) => {
  const res = await fetch(`${urlUserForgotPassword}${email}`);

  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

const petitionRecoverNewPassword = async (token, password) => {
  const res = await fetch(`${urlRecoverNewPassword}${token}`, {
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

export {
  petitionLogin,
  petitionSignUp,
  petitionForgotPassword,
  petitionConfirmation,
  petitionRecoverNewPassword,
};
