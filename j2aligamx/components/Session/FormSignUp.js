import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";
import { useState } from "react";

const FormSignUp = () => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    fetch("https://j2sligamxapi.herokuapp.com//users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: userName,
      }),
      headers: { "content-Type": "application/JSON" },
    })
      .then((res) => {
        if (res.status == 200) {
          //sweetAlert("Éxito", "Se ha registrado el usuario", "success");
          console.log("Ok");
        } else if (422) {
          //sweetAlert("Error", "Algo ha salido mal", "error");
          console.log("Error");
        }
      })
      .then((res) => console.log(res))
      .catch((err) => {
        //sweetAlert("Error", err, "error");
      });
  };

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
