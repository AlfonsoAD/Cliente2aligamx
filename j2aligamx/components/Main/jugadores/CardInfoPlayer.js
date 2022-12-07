import React from "react";
import Image from "next/image";

const CardInfoPlayer = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-white max-w-sm rounded shadow-lg p-">
      {data.map((value) => {
        return (
          <>
            <Image
              src={value.player.photo}
              className="sm:h-8 sm:w-8 m-2"
              height="280"
              width="280"
              alt={`Foto de ${
                value.player.name == null ? "desconocido" : value.player.name
              }`}
            />
            <h1>Información personal</h1>
            <div className="flex flex-nowrap justify-start items-start">
              <p>
                {`Nombre: ${
                  value.player.firstname == null
                    ? "desconocido"
                    : value.player.firstname
                } ${
                  value.player.lastname == null
                    ? "desconocido"
                    : value.player.lastname
                }`}
                <br />
                {`Fecha de Nacimiento: ${
                  value.player.birth.date == null
                    ? "desconocido"
                    : value.player.birth.date
                }`}
                <br />
                {`Ciudad: ${
                  value.player.birth.place == null
                    ? "desconocido"
                    : value.player.birth.place
                }`}
                <br />
                {`Lesionado: ${value.player.injured == false ? "No" : "Si"}`}
                <br />
              </p>
            </div>

            <h1 className="m-12">Estadistícas por temporada</h1>
            {value.statistics.map((value2) => {
              return (
                <>
                  <div className="flex flex-nowrap justify-start items-start">
                    <p>
                      {`Posicion: ${
                        value2.games.position == null
                          ? "desconocido"
                          : value2.games.position
                      }`}
                      <br />
                      {`Apariciones: ${
                        value2.games.appearences == null
                          ? "---"
                          : value2.games.appearences
                      }`}
                      <br />
                      {`Minutos: ${
                        value2.games.minutes == null
                          ? "----"
                          : value2.games.minutes
                      }`}
                      <br />
                    </p>
                  </div>
                  <br />
                  <h1 className="ml-20 mr-20">Goles</h1>
                  <div className="flex flex-nowrap justify-start items-start">
                    <p>
                      {`Total: ${
                        value2.goals.total == null ? "0" : value2.goals.total
                      }`}
                      <br />
                      {`Concedidos: ${
                        value2.goals.conceded == null
                          ? "0"
                          : value2.goals.conceded
                      }`}
                      <br />
                      {`Asistidos: ${
                        value2.goals.assists == null
                          ? "0"
                          : value2.goals.assists
                      }`}
                      <br />
                    </p>
                  </div>
                  <h1 className="ml-20 mr-20">Pases</h1>
                  <div className="flex flex-nowrap justify-start items-start">
                    <p>
                      {`Total: ${
                        value2.passes.total == null ? "0" : value2.passes.total
                      }`}
                      <br />
                    </p>
                  </div>
                  <h1 className="ml-20 mr-20">Tarjetas</h1>
                  <div className="flex flex-nowrap justify-start items-start">
                    <p>
                      {`🟥 ${
                        value2.cards.red == null ? "0" : value2.cards.red
                      }`}
                      <br />
                      {`🟨 ${
                        value2.cards.yellow == null ? "0" : value2.cards.yellow
                      }`}
                      <br />
                    </p>
                  </div>
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
