import Header from "../Header";
import Menu from "./Menu";
import React from "react";

const LayoutMain = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <main className="bg-no-repeat bg-cover min-h-full bg-white">
        {children}
      </main>
    </React.Fragment>
  );
};

export default LayoutMain;
