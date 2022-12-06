import SpinnerSplash from "../components/SpinnerSplash";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
<<<<<<< HEAD
    accessTk = window.localStorage.getItem("accessToken");
    refreshTk = window.localStorage.getItem("refreshToken");
    id = window.localStorage.getItem("id");
    //validando();
    //refresh();
    // captureToken(accessTk);
    captureId(id);
    init(accessTk);
=======
    validando();
>>>>>>> 822f69a9873a8ebeb94510b397e83dd4439ea188
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
