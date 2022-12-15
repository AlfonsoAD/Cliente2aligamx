//BY JESÚS ALFONSO ANDRADE DOMÍNGUEZ 18100149
import { useRouter } from "next/router";
//Context
import UserPreferencesProvider from "../components/Context/UserPreferencesProvider";
import UserProvider from "../components/Context/UserProvider";
//Estilos
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <UserPreferencesProvider>
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </UserProvider>
  );
}

export default MyApp;
