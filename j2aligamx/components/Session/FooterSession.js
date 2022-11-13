import Image from "next/image";

const FooterLogin = () => {
  const IMG_URL =
    "https://user-images.githubusercontent.com/90345024/197927312-f69a82ae-e535-42bd-9eec-697bebb458e6.png";
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-center">
        <img src={IMG_URL} className="mr-3 h-16" />
      </div>
    </footer>
  );
};

export default FooterLogin;
