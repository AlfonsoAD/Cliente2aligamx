import React from "react";
import Image from "next/image";

const CardInfoPlayer = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-start items-center bg-white max-w-sm rounded shadow-lg p-3 ">
      {data.map((value) => {
        return (
          <>
            <h1 className="m-2 text-3xl font-bold text-center text-white bg-blueMenu w-full">
              {value.player.firstname}
            </h1>
            <Image
              src={value.player.photo}
              className="sm:h-8 sm:w-8 m-2"
              height="280"
              width="280"
              alt={`Foto de ${
                value.player.name == null ? "desconocido" : value.player.name
              }`}
            />
            <h1 className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center w-full">
              Información personal
            </h1>
            <ul className="space-y-1 max-w-md list-disc list-inside text-black">
              <li>
                {`Fecha de Nacimiento: ${
                  value.player.birth.date == null
                    ? "desconocido"
                    : value.player.birth.date
                }`}
              </li>
              <li>
                {`Ciudad: ${
                  value.player.birth.place == null
                    ? "desconocido"
                    : value.player.birth.place
                }`}
              </li>
              <li>
                {`Lesionado: ${value.player.injured == false ? "No" : "Si"}`}
              </li>
            </ul>

            <h1
              className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center
             w-full"
            >
              Estadistícas por temporada
            </h1>
            {value.statistics.map((value2) => {
              return (
                <>
                  <br />
                  <h1 className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center w-full">
                    Datos
                  </h1>
                  <ul className="space-y-1 max-w-md list-disc list-inside text-black text-start">
                    <li>{`Posicion: ${
                      value2.games.position == null
                        ? "desconocido"
                        : value2.games.position
                    }`}</li>
                    <li>{`Apariciones: ${
                      value2.games.appearences == null
                        ? "---"
                        : value2.games.appearences
                    }`}</li>
                    <li>{`Minutos: ${
                      value2.games.minutes == null
                        ? "----"
                        : value2.games.minutes
                    }`}</li>
                  </ul>

                  <h1 className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center w-full">
                    Goles
                  </h1>
                  <ul className="space-y-1 max-w-md list-disc list-inside text-black text-start">
                    <li>{`Total: ${
                      value2.goals.total == null ? "0" : value2.goals.total
                    }`}</li>
                    <li>{`Concedidos: ${
                      value2.goals.conceded == null
                        ? "0"
                        : value2.goals.conceded
                    }`}</li>
                    <li>{`Asistidos: ${
                      value2.goals.assists == null ? "0" : value2.goals.assists
                    }`}</li>
                  </ul>
                  <h1 className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center w-full">
                    Pases
                  </h1>
                  <ul className="space-y-1 max-w-md list-disc list-inside text-black text-start">
                    <li>
                      {`Total: ${
                        value2.passes.total == null ? "0" : value2.passes.total
                      }`}
                    </li>
                  </ul>
                  <h1 className="m-2 text-xl font-semibold  text-white bg-blueMenu text-center w-full">
                    Tarjetas
                  </h1>
                  <ul className="space-y-1 max-w-md list-disc list-inside text-black text-start">
                    <li>{`🟥 ${
                      value2.cards.red == null ? "0" : value2.cards.red
                    }`}</li>
                    <li>
                      {`🟨 ${
                        value2.cards.yellow == null ? "0" : value2.cards.yellow
                      }`}
                    </li>
                  </ul>
                </>
              );
            })}
          </>
        );
      })}{" "}
    </div>
  );
};

export default CardInfoPlayer;
