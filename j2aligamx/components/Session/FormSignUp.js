import { useState } from "react";
import { petitionSignUp } from "../../api/petitionsUser";
import {
  validationEmail,
  validationUserName,
  validationPassword,
} from "../../utilities/inputValidations";
import { dataValidations } from "../../hooks/dataValidations";

import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";

import Swal from "sweetalert2";

const FormSignUp = () => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [vUserName, vEmail, vPassword, vPasswordConfirm] = dataValidations();

  const submit = async (e) => {
    // try {
    e.preventDefault();
    console.log(userName);

    //     await petitionSignUp(email, password, userName);
  };

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);
  const errorEmail = vEmail(validationEmail(email));
  const errorUserName = vUserName(validationUserName(userName));
  const errorPassword = vPassword(validationPassword(password));
  const errorPasswordConfirm = vPasswordConfirm(password, passwordConfirm);

  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Registro de usuarios
        </h1>
      </div>
      <Input type="text" placeholder="Username" onchange={onChangeUserName} />
      <small className="text-danger">{errorUserName}</small>
      <Input type="email" placeholder="Email" onchange={onChangeEmail} />
      <small className="text-danger">{errorEmail}</small>
      <Input
        typeInput="password"
        placeholder="Password"
        onchange={onChangePassword}
      />
      <small className="text-danger">{errorPassword}</small>
      <Input
        typeInput="password"
        placeholder="Confirm password"
        onchange={onChangePasswordConfirm}
      />
      <small className="text-danger">{errorPasswordConfirm}</small>
      <div className="mt-6">
        <ButtonClick
          type="submit"
          classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          text="Registrar"
          click={submit}
          disabled={errorEmail}
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
