import Swal from "sweetalert2";
import { useState } from "react";
import Link from "next/link";

import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";

import { petitionLogin } from "../../api/petitionsUser";

const FormLog = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const submit = (e) => {
    e.preventDefault();

    if (email == null || password == null) {
      Swal.fire("Error", "Llena todos los campos", "error");
      setEmail(null);
      setPassword(null);
    } else {
      petitionLogin(email, password);
    }
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
            <Link href={"/session/forgotpassword" ?? ""}>
              <a className="underline text-header">Olvidó la contraseña?</a>
            </Link>
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <Link href={"/session/signup" ?? ""}>
              <a className="underline text-header">Registrarse aquí</a>
            </Link>
          </div>
        </div>
      </form>
    </ContainerForm>
  );
};

export default FormLog;
