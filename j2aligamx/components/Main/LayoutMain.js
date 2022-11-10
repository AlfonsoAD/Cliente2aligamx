import Menu from "./Menu";
import React from "react";
import { refreshToken } from "../../api/petitionsUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LayoutMain = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    refresh();
    validando();
  }, []);

  const refresh = async () => {
    try {
      const refreTok = window.localStorage.getItem("refreshToken");
      await refreshToken(refreTok);
    } catch (err) {
      console.log(err);
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
