import { useState } from "react";
//Peticiones api
import { petitionSignUp } from "../../api/petitionsUser";
//Hooks
import validations from "../../hooks/validations";
import dataValidations from "../../hooks/dataValidations";
//Componentes externos
import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
//Herramientas
import Swal from "sweetalert2";

const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [vUserName, vEmail, vPassword, vPasswordConfirm] = dataValidations();
  const [validationUserName, validationEmail, validationPassword] =
    validations();

  const submit = async (e) => {
    if (
      userName != "" ||
      email != "" ||
      password != "" ||
      passwordConfirm != ""
    ) {
      try {
        e.preventDefault();
        await petitionSignUp(email, password, userName);
        limpiar();
        Swal.fire(
          "Registrado",
          "Verifica tu correo para confirmar tu cuenta",
          "success"
        );
      } catch (err) {
        Swal.fire("Error", `${err}`, "error");
      }
    } else {
      Swal.fire("Error", "Llena todos los campos", "error");
    }
  };
  const errorUserName = vUserName(validationUserName(userName));
  const errorEmail = vEmail(validationEmail(email));
  const errorPassword = vPassword(validationPassword(password));
  const errorPasswordConfirm = vPasswordConfirm(password, passwordConfirm);

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const limpiar = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Registro de usuarios
        </h1>
      </div>
      <Input
        type="text"
        placeholder="Username"
        value={userName}
        onchange={onChangeUserName}
      />
      <small className="text-danger">{errorUserName}</small>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onchange={onChangeEmail}
      />
      <small className="text-danger">{errorEmail}</small>
      <Input
        typeInput="password"
        placeholder="Password"
        value={password}
        onchange={onChangePassword}
      />
      <small className="text-danger">{errorPassword}</small>
      <Input
        typeInput="password"
        placeholder="Confirm password"
        value={passwordConfirm}
        onchange={onChangePasswordConfirm}
      />
      <small className="text-danger">{errorPasswordConfirm}</small>
      <div className="mt-6">
        <ButtonClick type="submit" text="Registrar" click={submit} />
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
