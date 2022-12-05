import { useEffect } from "react";
import { useRouter } from "next/router";
//Peticiones api
import { petitionRefreshToken, init } from "../pages/api/petitionsUser";
//Componente
import SpinnerSplash from "../components/SpinnerSplash";
// import { captureToken } from "../components/Context/UserProvider";
import { captureId } from "../components/Context/UserPreferencesProvider";

const Index = () => {
  const router = useRouter();
  var accessTk = "",
    refreshTk = "",
    id = "";

  useEffect(() => {
    //validando();
    // if (
    //   window.localStorage.getItem("accessToken") &&
    //   window.localStorage.getItem("id")
    // ) {
    //   accessTk = window.localStorage.getItem("accessToken");
    //   id = swindow.localStorage.getItem("id");
    //   captureId(id);
    //   init(accessTk);
    // }
    // captureToken(accessTk);
  }, []);

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
        router.push("/main/home");
      }, 2000);
    }
  };

  return <SpinnerSplash />;
};

export default Index;
