//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react, next
import { useState } from "react";
import Image from "next/image";
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import LargeContainerBox from "../../components/Main/LargeContainerBox";
import CardTransfer from "../../components/Main/CardTransfer";
//Utilities
import { teamsLogo } from "../../utilities/teamsInfo";
//Api
import { getTransfers } from "../api/apiFootball";

const Transferencias = () => {
  const [response, setResponse] = useState(null);
  const [teamName, setTeamName] = useState("");

  const clickLogo = (e) => {
    setTeamName(e.target.name);
    getTransfers(e.target.id).then((res) => setResponse(res));
  };

  return (
    <LayoutMain>
      <div className="m-4 flex flex-wrap justify-between items-center">
        <h1 className="text-4xl font-bold">Transferencias</h1>
        <h2 className="text-xl font-semibold">Elegir equipo</h2>
      </div>
      <div className="flex flex-wrap justify-between items-center">
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
                onClick={clickLogo}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center m-2">
        <h2 className="text-xl font-semibold">{`Equipo elegido: ${teamName}`}</h2>
      </div>
      <MatchContainer>
        {response == null ? console.log("Hola") : null}
        {response &&
          response.length > 0 &&
          response.map((value, index) => {
            return (
              <LargeContainerBox key={`0.${index}`}>
                <CardTransfer
                  key={`1.${index}`}
                  id={`22.${index}`}
                  data={value}
                />
              </LargeContainerBox>
            );
          })}
      </MatchContainer>
    </LayoutMain>
  );
};

export default Transferencias;
