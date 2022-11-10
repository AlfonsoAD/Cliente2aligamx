import Menu from "./Menu";
import React from "react";
import { refreshToken } from "../../api/petitionsUser";

const LayoutMain = ({ children }) => {
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
