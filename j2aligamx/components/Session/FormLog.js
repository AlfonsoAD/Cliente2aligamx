import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
import { useState } from "react";

const FormLog = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "content-Type": "application/JSON" },
    })
      .then((res) => {
        if (res.status == 200) {
          // sweetAlert("Éxito", "Usuario encontrado", "success");
          console.log("Ok");
        } else {
          // sweetAlert("Error", "Usuario no encontrado", "error");
          console.log("Error");
        }

        return res.json();
      })
      .then((res) => {
        window.localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
        //sweetAlert("Error", err, "error");
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
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
              classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              text="Iniciar sesión"
              click={submit}
            />
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <a href="/signup" className="text-sm text-blue-600 hover:underline">
              Registrarse aquí
            </a>
          </div>
        </div>
      </form>
    </ContainerForm>
  );
};

export default FormLog;
