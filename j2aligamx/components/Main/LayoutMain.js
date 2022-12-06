//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react
import React from "react";
//Componentes
import MenPrincipal from "./MenuPrincipal";
import TeamsFooter from "./TeamsFooter";
import FooterMain from "./FooterMain";

const LayoutMain = ({ children }) => {
<<<<<<< HEAD
  const router = useRouter();
  var id = "",
    accessTk = "";

  useEffect(() => {
    accessTk = window.localStorage.getItem("accessToken");
    id = window.localStorage.getItem("id");
    //validando();
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
    }
  };

=======
>>>>>>> 822f69a9873a8ebeb94510b397e83dd4439ea188
  //Regreso de componente
  return (
    <React.Fragment>
      <MenPrincipal />
      <main
        style={{ height: "100vh" }}
        className="bg-no-repeat bg-cover min-h-full bg-white"
      >
        {children}
        <TeamsFooter />
        <p className="text-xl font-semibold">v 1.0</p>
        <FooterMain />
      </main>
    </React.Fragment>
  );
};

export default LayoutMain;
