import { Fragment } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonClick from "../ButtonClick";
import { useUserContext } from "../Context/UserProvider";
import { useUserPreferencesContext } from "../Context/UserPreferencesProvider";
import Image from "next/image";

const MenPrincipal = () => {
  const router = useRouter();
  const { user } = useUserContext();
  const { userName } = user;
  const { userPreferences } = useUserPreferencesContext();
  const { logo } = userPreferences;
  const IMG_URL =
    "https://user-images.githubusercontent.com/90345024/200611188-36f932c9-ffba-4a67-a66b-1c1fd0ed1b89.png";
  const IMG_USER_URL =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const navigation = [
    { name: "Inicio", href: "/main/home", current: false },
    { name: "Partidos", href: "/main/partidos", current: false },
    { name: "Estadísticas", href: "/main/estadisticas", current: false },
    { name: "Transferencias", href: "/main/transferencias", current: false },
    { name: "Jugadores", href: "/main/jugadores", current: false },
    { name: "Noticias", href: "/main/noticias", current: false },
    { name: "Videos", href: "/main/videos", current: false },
  ];

  const goToProfile = (e) => {
    router.push("/main/perfil");
  };

  const logOut = (e) => {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    router.push("/session/login");
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-header to-blueMenu ..."
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blueMenu hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-header">
                  <span className="sr-only">Abrir Menú</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block lg:hidden"
                    src={IMG_URL}
                    height="34"
                    width="34"
                  />
                </div>
                <div className="hidden sm:ml-4 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blueMenu text-white"
                            : "text-gray-300 hover:bg-blueMenu hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium mr-4"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <h4
                      className="text-gray-300 hover:bg-blueMenu hover:text-white
                          px-2 py-2 rounded-md text-sm font-medium "
                    >{`Bienvenio ${userName}`}</h4>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-4 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-1">
                  <div>
                    <Menu.Button className="flex rounded-full bg-transparent text-sm ">
                      <span className="sr-only">Abrir menu de usuario</span>
                      <Image
                        src={logo}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo`}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-transparent">
                      <Menu.Item>
                        <ButtonClick
                          type="submit"
                          text="Perfil"
                          clase="config"
                          click={goToProfile}
                        />
                      </Menu.Item>
                      <Menu.Item>
                        <ButtonClick
                          type="sumbit"
                          text="Cerrar Sesión"
                          clase="danger"
                          click={logOut}
                        />
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blueMenu text-white"
                      : "text-gray-300 hover:bg-transparent hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MenPrincipal;
