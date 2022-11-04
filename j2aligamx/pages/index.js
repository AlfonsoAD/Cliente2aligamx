import SpinnerSplash from "../components/SpinnerSplash";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    validando();
  }, []);

  const validando = () => {
    if (window.localStorage.length > 0) {
      setTimeout(location.assign("/home"), 4000);
    } else {
      setTimeout(location.assign("/login"), 4000);
    }
  };

  return <SpinnerSplash />;
}
