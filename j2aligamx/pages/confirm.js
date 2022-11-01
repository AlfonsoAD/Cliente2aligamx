import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../components/Session/LayoutSession";
import FormConfirm from "../components/Session/FormConfirm";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    let auxSplit = auxUrl.split("=");
    let token = auxSplit[1];

    confirmation(token);
  }, []);

  const confirmation = (token) => {
    if (token != null) {
      console.log("entré");
      try {
        fetch(`https://j2sligamxapi.herokuapp.com/confirmation/${token}`);
      } catch {
        console.log("error");
      }
    } else {
      console.log("no entré");
    }
  };

  return (
    <LayoutSession>
      <FormConfirm />
    </LayoutSession>
  );
}
