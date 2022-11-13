import { useEffect } from "react";
import { useRouter } from "next/router";
//Peticiones api
import { petitionRefreshToken } from "../pages/api/petitionsUser";
//Componente
import SpinnerSplash from "../components/SpinnerSplash";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    validando();
    refresh();
  }, []);

  const refresh = async () => {
    try {
      const refreTok = window.localStorage.getItem("refreshToken");
      await petitionRefreshToken(refreTok);
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

  return <SpinnerSplash />;
};
export default Index;
