import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonClick from "../ButtonClick";

const ModalRedirection = ({ link, closeAction }) => {
  const router = useRouter();

  const submit = () => {
    closeAction();
    router.push(link);
  };

  const cerrar = () => {
    closeAction();
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">J2A LIGA MX</h3>
            </div>
            {/*body*/}
            <div className="flex flex-wrap 100wv justify-center">
              <h2>
                Estás a punto de salir de J2A LIGA MX, ¿quieres seguir viendo la
                nota?
              </h2>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <ButtonClick
                type="submit"
                text="No"
                clase="danger"
                click={cerrar}
              />
              <ButtonClick
                type="submit"
                text="Si"
                clase="success"
                click={submit}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalRedirection;
