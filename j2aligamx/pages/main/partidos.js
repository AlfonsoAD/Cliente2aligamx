import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import SelectList from "../../components/Main/SelectList";
import { useState, useEffect } from "react";
import {getRounds, getMatchs} from "../../pages/api/apiFootball"

const Partidos = () => {
    const[season,setSeason] = useState("2022");
    const[rounds, setRound] = useState("");
    const [datarounds, setDataRounds] = useState([]);
    const [datamatchs, setDataMatchs] = useState([]);
    
    const gettingRounds = () => {
      if(season){
        getRounds(season)
        .then(data => setDataRounds(data))
        console.log("Hola")
      }
    }

    const gettinMatches = () => {
        if(season && rounds){
            getMatchs(season,rounds)
            .then(data => setDataMatchs(data));
            console.log(datamatchs)
        }
    }
    useEffect(() => {
      gettingRounds();
    },[/*gettingRounds()*/]);

  return (
    <LayoutMain>
        <div className="m-4">
          <div>
            <SelectList 
            tittle="seasons"
            handleChange={(e) => {
                setSeason(e.target.value)
                }}
            onclick = {gettingRounds}
            />
            <SelectList 
            tittle ="jornadas"
            datos = {datarounds}
            handleChange={(e) => {
                setRound(e.target.value)
                }}
            />
            </div>
          <MatchContainer>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults/>{" "}
            </SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
          </MatchContainer>
        </div>
    </LayoutMain>
  );
};

export default Partidos;
