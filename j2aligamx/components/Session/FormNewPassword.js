//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react, next
import { useState } from "react";
import { useRouter } from "next/router";
//Api
import { postRecoverNewPassword } from "../../pages/api/apiUser";
//Componentes
import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
//Hooks
import validation from "../../hooks/validations";
import dataValidations from "../../hooks/dataValidations";
//Libreria de mensajes
import Swal from "sweetalert2";

const FormNewPassword = () => {
  //Estados
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  //Uso de hooks
  const { vPassword, vPasswordConfirm } = dataValidations();
  const { validationPassword } = validation();
  const errorPassword = vPassword(validationPassword(password));
  const errorPasswordConfirm = vPasswordConfirm(password, passwordConfirm);

  //Funciones
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    let auxSplit = auxUrl.split("=");
    let token = auxSplit[1];
    recoverNewPassword(token);
  };

  const recoverNewPassword = async (token) => {
    try {
      await postRecoverNewPassword(token, passwordConfirm);
      Swal.fire("Éxito", "Contraseña cambiada", "success");
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  //Regreso de componente
  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Cambio de contraseña
        </h1>
      </div>
      <Input
        typeInput="password"
        placeholder="New password"
        value={password}
        onchange={onChangePassword}
      />
      <small className="text-danger">{errorPassword}</small>

      <Input
        typeInput="password"
        placeholder="confirm password"
        value={passwordConfirm}
        onchange={onChangePasswordConfirm}
      />
      <small className="text-danger">{errorPasswordConfirm}</small>

      <div className="flex items-baseline justify-center">
        <ButtonClick
          type="submit"
          text="Cambiar/recuperar"
          clase="regular"
          click={submit}
        />
      </div>
    </ContainerForm>
  );
};

export default FormNewPassword;
