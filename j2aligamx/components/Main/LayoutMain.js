//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react,next
import React, { useEffect } from "react";
import { useRouter } from "next/router";
//Componentes
import MenPrincipal from "./MenuPrincipal";
import TeamsFooter from "./TeamsFooter";
import FooterMain from "./FooterMain";

const LayoutMain = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    validando();
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
