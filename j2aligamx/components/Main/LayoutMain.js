import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
//Peticiones api
import { petitionRefreshToken } from "../../pages/api/petitionsUser";
//Componentes externos
import MenPrincipal from "./MenuPrincipal";
import TeamsFooter from "./TeamsFooter";
//Herramientas
import Swal from "sweetalert2";
import FooterMain from "./FooterMain";

const LayoutMain = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // refresh();
    // validando();
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
      <MenPrincipal />
      <main
        style={{ height: "100vh" }}
        className="bg-no-repeat bg-cover min-h-full bg-white"
      >
        {children}
        <TeamsFooter />
        <FooterMain />
      </main>
    </React.Fragment>
  );
};

export default LayoutMain;
