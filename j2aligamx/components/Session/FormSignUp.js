import { useState } from "react";

import Swal from "sweetalert2";

import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";

import { petitionSignUp } from "../../api/petitionsUser";

const FormSignUp = () => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const submit = async (e) => {
    try {
      e.preventDefault();
      if (
        email == null ||
        password == null ||
        userName == null ||
        passwordConfirm == null
      ) {
        Swal.fire("Error", "Llena todos los campos", "error");
        setEmail(null);
        setPassword(null);
        setUserName(null);
        setPasswordConfirm(null);
      } else {
        await petitionSignUp(email, password, userName);
      }
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Registro de usuarios
        </h1>
      </div>

      <Input type="text" placeholder="Username" onchange={onChangeUserName} />

      <Input type="email" placeholder="Email" onchange={onChangeEmail} />

      <Input
        typeInput="password"
        placeholder="Password"
        onchange={onChangePassword}
      />

      <Input
        typeInput="password"
        placeholder="Confirm password"
        onchange={onChangePasswordConfirm}
      />

      <div className="mt-6">
        <ButtonClick
          type="submit"
          classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          text="Registrar"
          click={submit}
        />
      </div>
      <div className="flex items-baseline justify-center mt-2">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Iniciar sesión
        </a>
      </div>
    </ContainerForm>
  );
};

export default FormSignUp;
