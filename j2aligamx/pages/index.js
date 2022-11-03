import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SpinnerSplash from "../components/SpinnerSplash";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    if (window.localStorage.getItem("token").length > 0) {
      setTimeout(location.assign("/home"), 4000);
    } else {
      setTimeout(location.assign("/login"), 4000);
    }
  };

  return <SpinnerSplash />;
}
