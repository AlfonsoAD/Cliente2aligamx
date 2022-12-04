import React, { useEffect } from "react";
import { useRouter } from "next/router";
//Componentes externos
import MenPrincipal from "./MenuPrincipal";
import TeamsFooter from "./TeamsFooter";
//Herramientas
import FooterMain from "./FooterMain";
import UserPreferencesProvider from "../Context/UserPreferencesProvider";
import { captureId } from "../Context/UserPreferencesProvider";
import { init } from "../../pages/api/petitionsUser";

const LayoutMain = ({ children }) => {
  const router = useRouter();
  var id = "",
    accessTk = "";

  useEffect(() => {
    accessTk = window.localStorage.getItem("accessToken");
    id = window.localStorage.getItem("id");
    validando();
    captureId(id);
    init(accessTk);
  }, []);

  const validando = () => {
    if (
      localStorage.getItem("accessToken") === null &&
      localStorage.getItem("refreshToken") === null
    ) {
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
    }
  };

  //Regreso de componente
  return (
    <React.Fragment>
      <UserPreferencesProvider>
        <MenPrincipal />
        <main
          style={{ height: "100vh" }}
          className="bg-no-repeat bg-cover min-h-full bg-white"
        >
          {children}
          <TeamsFooter />
          <FooterMain />
        </main>
      </UserPreferencesProvider>
    </React.Fragment>
  );
};

export default LayoutMain;
