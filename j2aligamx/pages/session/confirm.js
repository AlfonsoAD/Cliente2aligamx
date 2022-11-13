import { useEffect } from "react";
import LayoutSession from "../../components/Session/LayoutSession";
import FormConfirm from "../../components/Session/FormConfirm";
import { petitionConfirmation } from "../../pages/api/petitionsUser";
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
};

export default Confirm;
