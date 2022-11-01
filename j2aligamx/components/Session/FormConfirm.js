import Link from "next/link";
import ContainerForm from "./ContainerForm";

const FormConfirm = () => {
  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Bienvenido
        </h1>
      </div>
      <div className="m-3">
        <p className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Ya puedes iniciar sesión
        </p>
      </div>
      <div className="mt-6 justify-center items-center">
        <a className="text-sm text-blue-600 hover:underline">
          <Link>Iniciar sesión</Link>
        </a>
      </div>
    </ContainerForm>
  );
};

export default FormConfirm;
