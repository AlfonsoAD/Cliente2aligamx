import React from "react";
import Image from "next/image";

const CardPlayer = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map((value) => {
        <>
          <div className="overviewInfo">
            <div className="productinfo">
              <div className="flex flex-nowrap justify-center items-center">
                <h1 className="text-xl font-semibold text-blueMenu">Jugador</h1>
                <p className="text-lg font-serif m-2">
                  {`Nombre: ${
                    value.player.firstname
                      ? "desconocido"
                      : value.player.firstname
                  } ${
                    value.player.lastname
                      ? "desconocido"
                      : value.player.lastname
                  }`}
                  <br />
                  {`Fecha de Nacimiento: ${
                    value.player.birth.date
                      ? "desconocido"
                      : value.player.birth.date
                  }`}
                  <br />
                  {`Ciudad: ${
                    value.player.birth.place
                      ? "desconocido"
                      : value.player.birth.place
                  }`}
                  <br />
                  {`Lesionado: ${value.player.injured == false ? "No" : "Si"}`}
                  <br />
                </p>
              </div>
              <div className="productImage inset-y-16 left-4 m-2">
                <Image
                  src={value.player.photo ? value.player.photo : ""}
                  width="180"
                  height="210"
                  alt="Foto del jugador"
                />
              </div>
            </div>
          </div>
          <div className="productSpecifications">
            <h1>ESTADISTICAS</h1>

            {value.statistics.map((value2) => {
              <div>
                {/* {value.value2.games.captain == true ? `CAPITAN` : null} */}
                <h3>
                  {value2.games.position
                    ? "desconocido"
                    : value2.games.position}
                </h3>
                <h3>
                  {`Apariciones: ${
                    value2.games.appearences ? "---" : value2.games.appearences
                  }`}
                </h3>
                <h3>
                  {`Minutos: ${
                    value2.games.minutes ? "----" : value2.games.minutes
                  }`}
                </h3>

                <div className="m-2">
                  <h1>GOLES</h1>
                  <h3>
                    {`Total: ${value2.goals.total ? "0" : value2.goals.total}`}
                  </h3>
                  <h3>
                    {`Concedidos: ${
                      value2.goals.conceded ? "0" : value2.goals.conceded
                    }`}
                  </h3>
                  <h3>
                    {`Asistidos: ${
                      value2.goals.assists ? "0" : value2.goals.assists
                    }`}
                  </h3>
                </div>
                <div>
                  <h1>PASES</h1>
                  <h3>
                    {`Total: ${
                      value2.passes.total ? "0" : value2.passes.total
                    }`}
                  </h3>
                </div>
                <div>
                  <h1>TARJETAS</h1>
                  <h3>{`🟥 ${value2.cards.red ? "0" : value2.cards.red}`}</h3>
                  <h3>
                    {`🟨 ${value2.cards.yellow ? "0" : value2.cards.yellow}`}
                  </h3>
                </div>
              </div>;
            })}
          </div>
        </>;
      })}
    </div>
  );
};

export default CardPlayer;
