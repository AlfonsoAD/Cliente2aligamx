import { useEffect } from "react";
import { useRouter } from "next/router";
import SpinnerSplash from "../components/SpinnerSplash";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    // if (window.localStorage.getItem("token") === "undefined") {
    //setTimeout(router.push("/session/login"), 4000);
    // } else {
    //   setTimeout(router.push("/home"), 4000);
    // }
    location.assign("/session/login");
  };
  return <SpinnerSplash />;
}
