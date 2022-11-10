import { useEffect } from "react";
import { useRouter } from "next/router";
import SpinnerSplash from "../components/SpinnerSplash";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    if (
      localStorage.getItem("accessToken") === null &&
      localStorage.getItem("refreshToken") === null
    ) {
      setTimeout(() => {
        router.push("/session/login");
      }, 2000);
    } else {
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    }
  };
  return <SpinnerSplash />;
}
