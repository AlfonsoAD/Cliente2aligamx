import { useRouter } from "next/router";
import { useEffect } from "react";
//Peticiones api
import { petitionRefreshToken } from "../../api/petitionsUser";
//Componentes externos
import Menu from "./Menu";
import React from "react";
//Herramientas
import Swal from "sweetalert2";

const LayoutMain = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    refresh();
    validando();
  }, []);

  //Funciones
  const refresh = async () => {
    try {
      const refreTok = window.localStorage.getItem("refreshToken");
      await petitionRefreshToken(refreTok);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  const validando = () => {
    if (
      localStorage.getItem("accessToken") === null &&
      localStorage.getItem("refreshToken") === null
    ) {
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
    } else {
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    }
  };

  //Regreso de componente
  return (
    <React.Fragment>
      <Menu />
      <main className="bg-no-repeat bg-cover min-h-full bg-white">
        {children}
      </main>
    </React.Fragment>
  );
};

export default LayoutMain;
