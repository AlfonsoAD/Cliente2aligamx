import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import SelectList from "../../components/Main/SelectList";
import { useState, useEffect } from "react";
import {getRounds, getMatchs} from "../../pages/api/apiFootball"

const Partidos = () => {
    const[season,setSeason] = useState("2022");
    const[rounds, setRound] = useState("Apertura - 1");
    const [datarounds, setDataRounds] = useState([]);
    const [datamatchs, setDataMatchs] = useState([]);

    const gettinMatches = () => {
        if(season && rounds){
            getMatchs(season,rounds)
            .then(data => setDataMatchs(data));
            console.log(datamatchs)
        }
    }

    useEffect(() => {
      gettinMatches();
    },[season,rounds]);

    var k = 0;
  return (
    <LayoutMain>
        <div className="m-4">
          <div>
            <SelectList 
            tittle="seasons"
            handleChange={(e) => {
                setSeason(e.target.value)
                }}
            
            />
              <SelectList 
              tittle ="jornadas"
              datos = {datarounds}
              handleChange={(e) => {
                  setRound(e.target.value)
                  }}
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
        </div>
    </LayoutMain>
  );
};

export default Partidos;
