import LayoutSession from "./LayoutSession";
import Input from "./Input";
import ButtonClick from "./ButtonClick";

const Register = () => {
  return (
    <LayoutSession>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-header">
              REGISTRO DE USUARIOS
            </h1>
          </div>
          <form className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <Input
                  typeInput="email"
                  placeholder="Email@example.com"
                  autocomplete="email"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nombre de usuario
                </label>
                <Input
                  typeInput="text"
                  placeholder="AlfonsoAD"
                  autocomplete="text"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <Input
                  typeInput="password"
                  placeholder="Password"
                  autocomplete="current-password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirmar contraseña
                </label>
                <Input
                  typeInput="password"
                  placeholder="Password"
                  autocomplete="current-password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-white hover:text-lime-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div>
              <ButtonClick
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-900 py-2 px-4 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
                text="Inicio de sesión"
                click="j2aligamx"
              />
            </div>
          </form>
        </div>
      </div>
    </LayoutSession>
  );
};

export default Register;
