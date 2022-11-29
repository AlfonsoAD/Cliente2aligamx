import React from "react";
import Image from "next/image";

const CardTransfer = (id, nameTeam, data) => {
  console.log(data + " sjsjsjs");
  return (
    <div key={id} className="flex flex-nowrap justify-center items-center">
      <div className="flex justify-center items-center m-2">
        <h1 className="text-xl font-bold">{nameTeam}</h1>
      </div>
      <div className="flex justify-center items-center m-2">
        <h1>{data.player.name}</h1>
      </div>
      <div className="flex justify-center items-center m-2">
        <h2 className="text-xl font-semibold">{`Fecha: ${data.transfers[0].date}`}</h2>
        <h2 className="text-xl font-semibold">{`Tipo/Costo: ${data.transfers[0].type}`}</h2>
      </div>
      <div className="flex justify-between items-center m-2">
        <p>Llega:</p>
        <h2 className="text-xl font-semibold">
          {data.transfers[0].teams.in.name}
        </h2>
        <Image
          src={data.transfers[0].teams.in.logo}
          height="30"
          width="30"
          alt={`Logo de ${data.transfers[0].teams.in.logo}`}
        />
        <p>Sale:</p>
        <h2 className="text-xl font-semibold">
          {data.transfers[0].teams.out.name}
        </h2>
        <Image
          src={data.transfers[0].teams.out.logo}
          height="30"
          width="30"
          alt={`Logo de ${data.transfers[0].teams.out.logo}`}
        />
      </div>
    </div>
  );
};

export default CardTransfer;
