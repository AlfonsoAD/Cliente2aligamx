import LayoutSession from "../../components/Session/LayoutSession";
import FormConfirm from "../../components/Session/FormConfirm";
import { useEffect } from "react";
import { petitionConfirmation } from "../../api/petitionsUser";
import Swal from "sweetalert2";

export default function Home() {
  useEffect(() => {
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    console.log(auxUrl);
    let auxSplit = auxUrl.split("=");
    console.log(auxSplit);
    let token = auxSplit[1];
    console.log(token);
    confirmation(token);
  }, []);

  const confirmation = async (token) => {
    try {
      await petitionConfirmation(token);
    } catch (err) {
      Swal.fire("Error", `${err}`, "error");
    }
  };

  return (
    <LayoutSession>
      <FormConfirm />
    </LayoutSession>
  );
}
