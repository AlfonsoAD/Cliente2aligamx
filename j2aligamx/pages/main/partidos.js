//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import SelectList from "../../components/Main/SelectList";
//react
import { useState, useEffect } from "react";
<<<<<<< HEAD
import {getRounds, getMatchs} from "../../pages/api/apiFootball"
import {jornadas,temporadas} from "../../utilities/Arrays.Matchs";
=======
//Api
import { getMatchs } from "../../pages/api/apiFootball";
>>>>>>> 822f69a9873a8ebeb94510b397e83dd4439ea188

const Partidos = () => {
  const [season, setSeason] = useState("2022");
  const [rounds, setRound] = useState("Apertura - 1");
  const [datamatchs, setDataMatchs] = useState([]);

  const gettinMatches = () => {
    if (season && rounds) {
      getMatchs(season, rounds).then((data) => setDataMatchs(data));
      console.log(datamatchs);
    }
  };

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
<<<<<<< HEAD
                setSeason(e.target.value)
                }}
            data={temporadas}
            />
              <SelectList 
              tittle ="jornadas"
              handleChange={(e) => {
                  setRound(e.target.value)
                  } } 
              data={jornadas}
              />
            </div>
          <MatchContainer >
            {
              datamatchs.map((item) => (
                <SmallContainerBox key={`smallcontainer-${k++}`}>
                  <MatchsResults
                    key={`matchsresults-${k++}`}
                    teamsdata = {item.teams}
                    goals = {item.goals}
                    date = {item.fixture.date}/>
                </SmallContainerBox>
              ))
            }
          </MatchContainer>
=======
              setSeason(e.target.value);
            }}
          />
          <SelectList
            tittle="jornadas"
            handleChange={(e) => {
              setRound(e.target.value);
            }}
          />
>>>>>>> 822f69a9873a8ebeb94510b397e83dd4439ea188
        </div>
        <MatchContainer>
          {datamatchs.map((item) => (
            <SmallContainerBox key={`smallcontainer-${k++}`}>
              <MatchsResults
                key={`matchsresults-${k++}`}
                teamsdata={item.teams}
                goals={item.goals}
                date={item.fixture.date}
              />
            </SmallContainerBox>
          ))}
        </MatchContainer>
      </div>
    </LayoutMain>
  );
};

export default Partidos;
