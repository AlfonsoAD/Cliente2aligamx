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
    accessTk = window.localStorage.getItem("accessToken");
    refreshTk = window.localStorage.getItem("refreshToken");
    id = window.localStorage.getItem("id");
    validando();
    //refresh();
    // captureToken(accessTk);
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
    } else {
      setTimeout(() => {
        router.push("/main/home");
      }, 2000);
    }
  };

  // const refresh = () => {
  //   petitionRefreshToken(refreshTk).catch((err) => console.log(err));
  // };

  return <SpinnerSplash />;
};
export default Index;
