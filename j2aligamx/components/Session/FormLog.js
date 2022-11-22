import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//Peticiones api
import { petitionLogin } from "../../pages/api/petitionsUser";
//Componentes
import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
//Herramientas
import Swal from "sweetalert2";

const FormLog = () => {
  const router = useRouter();
  //Estados
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  //Funciones
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const submit = async (e) => {
    try {
      e.preventDefault();

      if (email == null || password == null) {
        Swal.fire("Error", "Llena todos los campos", "error");
        setEmail(null);
        setPassword(null);
      } else {
        await petitionLogin(email, password);
        router.push("/home");
      }
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  //Regreso de componente
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
              text="Iniciar sesión"
              clase="regular"
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
