//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/SelectTeam";
import TablePlayers from "../../components/Main/jugadores/TablePlayers";
import CardInfoPlayer from "../../components/Main/jugadores/CardInfoPlayer";
//Api
import { getPlayers, getPlayerById } from "../api/apiFootball";
//react
import { useState, useEffect } from "react";
import { useUserPreferencesContext } from "../../components/Context/UserPreferencesProvider";

const Jugadores = () => {
  const { userPreferences } = useUserPreferencesContext();
  const { idFavTeam } = userPreferences;
  const [team, setTeam] = useState("");
  var idplayer;
  var [singleplayerinfo, setSinglePlayerInfo] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);

  const tiempo = () => setTeam(idFavTeam);

  const gettingPlayers = () => {
    getPlayers(idFavTeam).then((data) => setPlayersInfo(data));
  };

  return (
    <LayoutMain>
      <div className="m-4">
        <SelectTeam
          handleChange={(e) => {
            setTeam(e.target.value);
          }}
          title="Jugadores"
        />
      </div>
      {idFavTeam != "" ? gettingPlayers() : null}
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
        {/* <CardInfoPlayer data={singleplayerinfo} /> */}
        {singleplayerinfo.length > 0 ? (
          <CardInfoPlayer data={singleplayerinfo} />
        ) : null}
      </div>
    </LayoutMain>
  );
};

export default Jugadores;
