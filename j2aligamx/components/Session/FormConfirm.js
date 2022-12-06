//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react, next
import Link from "next/link";
import ContainerForm from "./ContainerForm";

const FormConfirm = () => {
  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          J2A LIGA MX
        </h1>
      </div>
      <div className="m-3">
        <p className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Ya puedes iniciar sesión
        </p>
      </div>
      <div className="mt-6 justify-center items-center">
        <Link href={"/index" ?? ""}>
          <a className="group relative flex w-full justify-center rounded-md border border-transparent bg-button  px-3 py-2 text-sm font-medium text-white hover:bg-button2 focus:outline-none focus:ring-2 focus:ring-button2 focus:ring-offset-2">
            {" "}
            Iniciar sesión
          </a>
        </Link>
      </div>
    </ContainerForm>
  );
};

export default FormConfirm;
