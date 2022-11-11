import { useState } from "react";
//Peticiones api
import { petitionForgotPassword } from "../../api/petitionsUser";
//Componentes
import ContainerForm from "./ContainerForm";
import Input from "../Input";
import ButtonClick from "../ButtonClick";
//Hooks
import validations from "../../hooks/validations";
import dataValidations from "../../hooks/dataValidations";
//Herramientas
import Swal from "sweetalert2";

const FormForgotPassword = () => {
  //Estados
  const [email, setEmail] = useState(null);
  const { vEmail } = dataValidations();
  const { validationEmail } = validations();
  const errorEmail = vEmail(validationEmail(email));
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();

      if (email == null) {
        Swal.fire("Error", "Llena todos los campos", "error");
        setEmail(null);
      } else {
        await petitionForgotPassword(email);
        Swal.fire(
          "Continua para seguir con el proceso",
          "Verifica tu correo para confirmar tu cuenta",
          "success"
        );
      }
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  //Regreso de componente
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
      <small className="text-danger">{errorEmail}</small>
      <div className="flex items-baseline justify-center">
        <ButtonClick type="submit" text="Recuperar" click={submit} />
      </div>
      <div className="flex items-baseline justify-center mt-2">
        <Link href={"/session/login" ?? ""}>
          <a href="" className="text-sm text-blue-600 hover:underline">
            Regresar
          </a>
        </Link>
      </div>
    </ContainerForm>
  );
};

export default FormForgotPassword;
