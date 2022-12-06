//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Componentes
import Header from "../Session/HeaderSession";
import FooterSession from "../Session/FooterSession";
//react
import React from "react";

const LayoutSession = ({ children }) => {
  const IMG_URL =
    "url(https://user-images.githubusercontent.com/90345024/198122753-735bf2ed-828c-4cd7-82b3-2daa5fc9c4fd.jpg)";

  return (
    <React.Fragment>
      <Header />
      <main
        className="bg-no-repeat bg-cover min-h-full"
        style={{
          height: "100vh",
          backgroundImage: IMG_URL,
        }}
      >
        {children}
      </main>
      <FooterSession />
    </React.Fragment>
  );
};

export default LayoutSession;
