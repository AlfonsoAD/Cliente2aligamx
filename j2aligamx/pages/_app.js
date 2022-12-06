//BY JESÚS ALFONSO ANDRADE DOMÍNGUEZ 18100149
//react, next
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//Context
import UserPreferencesProvider from "../components/Context/UserPreferencesProvider";
import UserProvider from "../components/Context/UserProvider";
//Estilos
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    if (
      localStorage.getItem("accessToken") === null &&
      localStorage.getItem("refreshToken") === null
    ) {
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
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
