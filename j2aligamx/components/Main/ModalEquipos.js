import React from "react";
import { useState } from "react";
import ButtonClick from "../ButtonClick";
import { teamsLogo } from "../../utilities/teamsInfo";
import Image from "next/image";

const ModalEquipos = () => {
  const [showModal, setShowModal] = useState(true);
  const [team, setTeam] = useState("");
  const [nameTeam, setNameTeam] = useState("");

  const selectTeam = (e) => {
    setTeam(e.target.id);
    setNameTeam(e.target.name);
  };
  const submit = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Escoge tu equipo favorito
                  </h3>
                  <div className="ml-6 text-2xl font-semibold">
                    {nameTeam != "" ? (
                      <h4>Equipo favorito: {nameTeam} </h4>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/*body*/}
                <div className="flex flex-wrap 100wv justify-center">
                  {teamsLogo.map((value, index) => {
                    return (
                      <div key={index} className="inline-block m-2 pb-2">
                        <Image
                          src={value.logo}
                          height="38"
                          width="38"
                          alt={`Logo de ${value.name}`}
                          id={value.id}
                          name={value.name}
                          className="hover:animate-ping h-24 w-24"
                          onClick={selectTeam}
                        />
                      </div>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <ButtonClick
                    type="submit"
                    text="Ahora no"
                    clase="danger"
                    click={() => setShowModal(false)}
                  />
                  <ButtonClick
                    type="submit"
                    text="Elegir"
                    clase="success"
                    click={submit}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalEquipos;
