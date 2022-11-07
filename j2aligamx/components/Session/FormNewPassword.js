import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
import { petitionRecoverNewPassword } from "../../api/petitionsUser";
import { useEffect, useState } from "react";
import { validationPassword } from "../../utilities/validations";
import { dataValidations } from "../../hooks/dataValidations";
import Swal from "sweetalert2";

const FormNewPassword = () => {
  var tokenV;
  useEffect(() => {
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    let auxSplit = auxUrl.split("=");
    let token = auxSplit[1];
    tokenV = token;
  }, []);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [vPassword, vPasswordConfirm] = dataValidations();
  const errorPassword = vPassword(validationPassword(password));
  const errorPasswordConfirm = vPasswordConfirm(password, passwordConfirm);

  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    recoverNewPassword();
  };

  const recoverNewPassword = async () => {
    try {
      await petitionRecoverNewPassword(tokenV, password);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

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
          classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          text="Cambiar/recuperar"
          click={submit}
        />
      </div>
    </ContainerForm>
  );
};

export default FormNewPassword;
