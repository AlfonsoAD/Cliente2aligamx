import React from "react";
import Image from "next/image";

const CardTransfer = ({ id, data }) => {
  const urlFlecha =
    "https://user-images.githubusercontent.com/90345024/204636565-70af5fdb-cbf5-4c1c-900b-023edfd06bb0.png";
  const urlPred =
    "https://user-images.githubusercontent.com/90345024/204642850-30c9d458-a76b-4142-ac36-3290b631717e.png";
  return (
    <div key={id} className=" from-teal-600 to-sky-700 ... m-2 p-1">
      <div className="flex justify-center items-center bg-blueMenu w-full">
        <h1 className="text-xl font-bold text-white">
          Transferencias del jugador
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center m-2 bg-transparent">
        <div className="m-1">
          <h1 className="text-xl font-bold text-blueMenu">
            Jugador: {data.player.name != null ? data.player.name : ""}
          </h1>
        </div>
      </div>

      {data.transfers == null ? console.log("errorrr") : null}
      {data.transfers &&
        data.transfers.length > 0 &&
        data.transfers.map((value, index) => (
          <>
            <div
              className="flex flex-wrap justify-between m-2"
              key={`12-${index}`}
            >
              <h2 className="text-md font-semibold">{`Fecha de la transacción: ${value.date}`}</h2>
              <h2 className="text-md font-semibold">{`Tipo de transfereencia: ${value.type}`}</h2>
              <h2 className="text-md font-semibold">
                {value.teams.in.name != null ? value.teams.in.name : ""}
              </h2>
              <h2 className="text-md font-semibold">
                {value.teams.out.name != null ? value.teams.out.name : ""}
              </h2>
            </div>
            <div key={index} className="flex flex-nowrap justify-between m-2">
              <Image
                src={
                  value.teams.in.logo != null ? value.teams.out.logo : urlPred
                }
                height="52"
                width="52"
                alt="Logo "
              />
              <Image src={urlFlecha} height="30" width="46" alt="Flecha" />
              <Image
                src={
                  value.teams.out.logo != null ? value.teams.in.logo : urlPred
                }
                height="52"
                width="52"
                alt="Logo"
              />
            </div>
          </>
        ))}
    </div>
  );
};

export default CardTransfer;
