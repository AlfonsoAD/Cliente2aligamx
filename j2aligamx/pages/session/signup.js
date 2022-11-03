import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../../components/Session/LayoutSession";
//import FormRegister from "../components/Session/FormRegister";
import FormSignUp from "../../components/Session/FormSignUp";
export default function Home() {
  return (
    <LayoutSession>
      <FormSignUp />
    </LayoutSession>
  );
}