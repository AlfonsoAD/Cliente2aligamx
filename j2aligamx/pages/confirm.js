import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../components/Session/LayoutSession";
import FormConfirm from "../components/Session/FormConfirm";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(window.location);
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    console.log(auxUrl);
    let auxSplit = auxUrl.split("=");
    console.log(auxSplit);

    if (auxSplit[0] == "token") {
    }
  }, []);

  return (
    <LayoutSession>
      <FormConfirm />
    </LayoutSession>
  );
}
