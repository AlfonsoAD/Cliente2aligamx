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
      <div className="mt-6">
        <a className="text-dark">Iniciar sesión</a>
      </div>
    </ContainerForm>
  );
};

export default FormConfirm;
