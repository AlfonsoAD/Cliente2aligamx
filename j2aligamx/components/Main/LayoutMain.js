import Menu from "./Menu";
import React from "react";
import { refreshToken } from "../../api/petitionsUser";

const LayoutMain = ({ children }) => {

  const refresh = async () => {
    try {
      const refreTok = window.localStorage.getItem("refreshToken");
      const res = await refreshToken(refreTok);
    } catch (err) {
      console.log(err);
    }
  };

  refresh();

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
