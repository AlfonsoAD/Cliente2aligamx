//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Componentes
import LayoutSession from "../../components/Session/LayoutSession";
import FormConfirm from "../../components/Session/FormConfirm";
//react
import { useEffect } from "react";
//Api
import { postConfirmation } from "../../pages/api/apiUser";
//Libreria de mensajes
import Swal from "sweetalert2";

const Confirm = () => {
  useEffect(() => {
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    let auxSplit = auxUrl.split("=");
    let token = auxSplit[1];
    confirmation(token);
  }, []);

  const confirmation = async (token) => {
    try {
      await postConfirmation(token);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  return (
    <LayoutSession>
      <FormConfirm />
    </LayoutSession>
  );
};

export default Confirm;
