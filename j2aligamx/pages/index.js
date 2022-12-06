import SpinnerSplash from "../components/SpinnerSplash";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
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
        router.push("/main/home");
      }, 2000);
    }
  };

  return <SpinnerSplash />;
};

export default Index;
