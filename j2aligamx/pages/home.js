import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import LayoutSession from "../components/Session/LayoutSession";
import FormLog from "../components/Session/FormLog";

export default function Home() {
  return (
    <LayoutSession>
      <div>
        <h1>BIENVENIDO</h1>
      </div>
    </LayoutSession>
  );
}
