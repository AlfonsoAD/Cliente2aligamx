//BY CESAR CASTRO SALAZAR 18100157
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import SelectList from "../../components/Main/SelectList";
import LargeContainerBox from "../../components/Main/LargeContainerBox";
import { jornadas, temporadas } from "../../utilities/Arrays.Matchs";
//react
import { useState, useEffect } from "react";
//Api
import { getMatchs } from "../../pages/api/apiFootball";

const Partidos = () => {
  //Estados para selectores
  const [season, setSeason] = useState("2022");
  const [rounds, setRound] = useState("Apertura - 1");
  //Estado para almacenar la respuesta de la peticion (getMatchs)
  const [datamatchs, setDataMatchs] = useState([]);

  //Metodo para peticion que devuelve todos los partidos de una temporada
  const gettinMatches = () => {
    if (season && rounds) {
      getMatchs(season, rounds).then((data) => setDataMatchs(data));
    }
  };

  //Efecto para pedir partidos antes de cargar la pagina
  useEffect(() => {
    gettinMatches();
  }, [season, rounds]);

  var k = 0;
  return (
    <LayoutMain>
      <div className="m-4">
        <div>
          <SelectList
            tittle="seasons"
            handleChange={(e) => {
              setSeason(e.target.value);
            }}
            data={temporadas}
          />
          <SelectList
            tittle="jornadas"
            handleChange={(e) => {
              setRound(e.target.value);
            }}
            data={jornadas}
          />
        </div>
        <MatchContainer>
          {datamatchs.map((item) => (
            <LargeContainerBox key={`smallcontainer-${k++}`}>
              <MatchsResults
                key={`matchsresults-${k++}`}
                teamsdata={item.teams}
                goals={item.goals}
                date={item.fixture.date}
              />
            </LargeContainerBox>
          ))}
        </MatchContainer>
      </div>
    </LayoutMain>
  );
};

export default Partidos;
