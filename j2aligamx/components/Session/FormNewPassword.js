import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
import { petitionRecoverNewPassword } from "../../api/petitionsUser";
import { useEffect, useState } from "react";
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

  const submit = (e) => {
    e.preventDefault();
    console.log(password);
    recoverNewPassword();
  };

  const recoverNewPassword = async () => {
    try {
      await petitionRecoverNewPassword(tokenV, password);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  const onChangePassword = (e) => setPassword(e.target.value);

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

      <Input typeInput="password" placeholder="confirm password" />
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
