//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/SelectTeam";
import TablePlayers from "../../components/Main/jugadores/TablePlayers";
import CardInfoPlayer from "../../components/Main/jugadores/CardInfoPlayer";
//Api
import { getPlayers, getPlayerById } from "../api/apiFootball";
//react
import { useState, useEffect } from "react";

const Jugadores = () => {
  const [team, setTeam] = useState("2287");
  var idplayer;
  var [singleplayerinfo, setSinglePlayerInfo] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);

  const gettingPlayers = () => {
    getPlayers(team).then((data) => setPlayersInfo(data));
  };

  useEffect(() => {
    gettingPlayers();
  }, [team]);

  return (
    <LayoutMain>
      <SelectTeam
        handleChange={(e) => {
          setTeam(e.target.value);
        }}
        title="Jugadores"
      />
      <div className="flex justify-center flex-wrap">
        <TablePlayers
          data={playersInfo}
          handleChange={(e) => {
            idplayer = e.target.value;
            console.log(idplayer);
            getPlayerById(idplayer).then((data) => setSinglePlayerInfo(data));
            console.log(singleplayerinfo);
          }}
        />
        {singleplayerinfo.length > 0 ? (
          <CardInfoPlayer data={singleplayerinfo} />
        ) : null}
      </div>
    </LayoutMain>
  );
};

export default Jugadores;
