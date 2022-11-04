import LayoutSession from "../../components/Session/LayoutSession";
import FormConfirm from "../../components/Session/FormConfirm";
import { useEffect } from "react";
import { petitionConfirmation } from "../../api/petitionsUser";

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

  const confirmation = (token) => {
    petitionConfirmation(token);
  };

  return (
    <LayoutSession>
      <FormConfirm />
    </LayoutSession>
  );
}
