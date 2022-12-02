import { useEffect } from "react";
import { useRouter } from "next/router";
//Peticiones api
import {
  petitionRefreshToken,
  petitionPreferences,
} from "../pages/api/petitionsUser";
//Componente
import SpinnerSplash from "../components/SpinnerSplash";
import jwt_decode from "jwt-decode";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    let tk = localStorage.getItem("accessToken");
    let decode = jwt_decode(tk);
    console.log(decode);
    validando();
    getUserPreferences(decode.id);
    //refresh();
  }, []);

  // const refresh = async () => {
  //   try {
  //     const refreTok = window.localStorage.getItem("refreshToken");
  //     await petitionRefreshToken(refreTok);
  //   } catch (err) {
  //     Swal.fire("Error", `${err}`, "error");
  //   }
  // };

  const getUserPreferences = (id) => {
    petitionPreferences(id).then((res) => console.log(res));
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
        router.push("/main/home");
      }, 2000);
    }
  };

  return <SpinnerSplash />;
};
export default Index;
