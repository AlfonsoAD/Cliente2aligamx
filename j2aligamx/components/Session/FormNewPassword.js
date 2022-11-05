import Input from "../Input";
import ButtonClick from "../ButtonClick";
import ContainerForm from "./ContainerForm";

const FormNewPassword = () => {
  return (
    <ContainerForm>
      <div className="m-3">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-emerald-900">
          Cambio de contraseña
        </h1>
      </div>
      <Input typeInput="password" placeholder="New password" />
      <Input typeInput="password" placeholder="confirm password" />
      <div className="flex items-baseline justify-center">
        <ButtonClick
          type="submit"
          classN="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600  px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          text="Guardar"
        />
      </div>
    </ContainerForm>
  );
};

export default FormNewPassword;
