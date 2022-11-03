import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../../components/Session/LayoutSession";
import FormForgotPassword from "../../components/Session/FormForgotPassword";

export default function Home() {
  return (
    <LayoutSession>
      <FormForgotPassword />
    </LayoutSession>
  );
}
