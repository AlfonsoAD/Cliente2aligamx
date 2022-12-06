//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react
import React from "react";
//Componentes
import MenPrincipal from "./MenuPrincipal";
import TeamsFooter from "./TeamsFooter";
import FooterMain from "./FooterMain";

const LayoutMain = ({ children }) => {
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
