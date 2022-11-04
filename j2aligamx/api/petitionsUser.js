import Swal from "sweetalert2";
//import { useRouter } from "next/router";

const petitionSignUp = (email, password, userName) => {
  fetch("https://j2sligamxapi.herokuapp.com/users/signup", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: userName,
    }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => {
      if (res.status == 200) {
        Swal.fire(
          "BIENVENIDO A J2A LIGA MX",
          "Estamos muy felices de que seas parte de la comunidad \nVERIFICA TU CORREO ELECTRÓNICO PARA CONFIRMAR",
          "success"
        );
      } else if (res.status == 422) {
        Swal.fire(
          "Registro fallido",
          "Verifica tus datos \nAlgunos errores: \n-Puede que el correo ya esté registrado con otro usuario",
          "error"
        );
      }
    })
    .catch((err) => {
      Swal.fire("Algo ha salido mal", `${err}`, "error");
    });
};

const petitionLogin = (email, password) => {
  //   const response = await fetch(
  //     "https://j2sligamxapi.herokuapp.com/users/login",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //       headers: { "content-Type": "application/JSON" },
  //     }
  //   );
  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  //   window.localStorage.setItem("token", response.token);
  //   console.log(response.json());

  //const router = useRouter();

  fetch("https://j2sligamxapi.herokuapp.com/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => {
      if (res.status == 200) {
        //router.push("/home");
        location.assign("/home");
      } else {
        Swal.fire("Algo ha salido mal", "Verifica tus credenciales", "error");
      }
      return res.json();
    })
    .then((res) => {
      window.localStorage.setItem("token", res.token);
    })
    .catch((err) => {
      Swal.fire("Algo ha salido mal", `${err}`, "error");
    });
};

const petitionForgotPassword = (email) => {
  try {
    fetch(`https://j2sligamxapi.herokuapp.com/user/${email}`);
  } catch {
    console.log("error");
  }
};

const petitionConfirmation = (token) => {
  if (token != null) {
    console.log("entré");
    try {
      fetch(`https://j2sligamxapi.herokuapp.com/confirmation/${token}`);
    } catch {
      console.log("error");
    }
  } else {
    console.log("no entré");
  }
};
export {
  petitionLogin,
  petitionSignUp,
  petitionForgotPassword,
  petitionConfirmation,
};
