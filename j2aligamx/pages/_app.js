//BY JESÚS ALFONSO ANDRADE DOMÍNGUEZ 18100149
//react, next
import { useEffect } from "react";
import { useRouter } from "next/router";
//Api
import { accessKey } from "./api/apiUserPreferences";
//Context
import UserPreferencesProvider from "../components/Context/UserPreferencesProvider";
import UserProvider from "../components/Context/UserProvider";
import { captureToken } from "../components/Context/UserProvider";
//Estilos
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var accessTk = "";

  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
    } else {
      accessTk = localStorage.getItem("accessToken");
      setTimeout(() => {
        router.push("/main/home");
      }, 2000);
      captureToken(accessTk);
      accessKey(accessTk);
    }
  };

  return (
    <UserProvider>
      <UserPreferencesProvider>
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </UserProvider>
  );
}

export default MyApp;
