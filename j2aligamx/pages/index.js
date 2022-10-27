import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../components/LayoutSession";
import FormLogin from "../components/FormLogin";
export default function Home() {
  return <LayoutSession>
    <FormLogin/>
  </LayoutSession>;
}
