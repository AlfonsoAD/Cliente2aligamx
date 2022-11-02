import { useState } from "react";
import Link from "next/link";

import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";

import Swal from "sweetalert2";

const FormLog = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submit = (e) => {
    e.preventDefault();

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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Disfruta de la información",
            showConfirmButton: true,
            confirmButtonColor: "bg-button",
            timer: 2500,
          });

          location.assign("/home");
        } else {
          Swal.fire(
            "Error",
            "Verifica o ingresa bien tus credenciales",
            "error"
          );
        }

        return res.json();
      })
      .then((res) => {
        window.localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        Swal.fire("Error", `Algo ha salido mal ${err}`, "error");
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <ContainerForm>
      <div>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          BIENVENIDO
        </h1>
        <h3 className="mt-6 text-center text-2xl font-bold tracking-tight text-emerald-900">
          Inicio de sesión
        </h3>
      </div>
      <form>
        <div className="mt-4">
          <div>
            <Input type="email" placeholder="Email" onchange={onChangeEmail} />
          </div>
          <div className="mt-4">
            <Input
              typeInput="password"
              placeholder="Password"
              onchange={onChangePassword}
            />
          </div>
          <div className="flex items-baseline justify-center">
            <ButtonClick
              type="submit"
              classN="group relative flex w-full justify-center rounded-md border border-transparent bg-button  px-3 py-2 text-sm font-medium text-white hover:bg-button2 focus:outline-none focus:ring-2 focus:ring-button2 focus:ring-offset-2"
              text="Iniciar sesión"
              click={submit}
            />
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <Link href={"/forgotpassword" ?? ""}>
              <a className="underline text-header">Olvidó la contraseña?</a>
            </Link>
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <Link href={"/signup" ?? ""}>
              <a className="underline text-header">Registrarse aquí</a>
            </Link>
          </div>
        </div>
      </form>
    </ContainerForm>
  );
};

export default FormLog;
