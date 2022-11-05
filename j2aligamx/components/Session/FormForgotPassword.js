import ContainerForm from "./ContainerForm";
import Input from "../Input";
import ButtonClick from "../ButtonClick";
import { petitionForgotPassword } from "../../api/petitionsUser";
import { useState } from "react";
import Swal from "sweetalert2";

const FormForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const submit = async (e) => {
    try {
      e.preventDefault();

      if (email == null) {
        Swal.fire("Error", "Llena todos los campos", "error");
        setEmail(null);
      } else {
        await petitionForgotPassword(email);
      }
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Recuperación de contraseña
        </h1>
      </div>
      <div className="m-3">
        <p className="mb-6 text-centers tracking-tight text-dark">
          Para recuperar tu contraseña escribe tu correo electrónico:
        </p>
      </div>
      <Input type="email" placeholder="Email" onchange={onChangeEmail} />
      <div className="flex items-baseline justify-center">
        <ButtonClick
          type="submit"
          classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          text="Recuperar"
          click={submit}
        />
      </div>
    </ContainerForm>
  );
};

export default FormForgotPassword;
