//CESAR CASTRO SALAZAR 18100157
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/SelectTeam";
import TablePlayers from "../../components/Main/jugadores/TablePlayers";
import CardInfoPlayer from "../../components/Main/jugadores/CardInfoPlayer";
//Contextos
import { useUserPreferencesContext } from "../../components/Context/UserPreferencesProvider";
//Api
import { getPlayers, getPlayerById } from "../api/apiFootball";
//react
import { useState, useEffect } from "react";

const Jugadores = () => {
  const { userPreferences } = useUserPreferencesContext();
  const { idFavTeam } = userPreferences;
  const { teamName } = userPreferences;
  const auxID = ({ idFavTeam });
  console.log(auxID.idFavTeam)
  //Estado inicido en el equipo del estado del equipo por defect
  const [team, setTeam] = useState('');
  //variable auxiliar para almacenar id del jugador
  var idplayer;
  //Estados para almacenar respuesta de las peticiones
  var [singleplayerinfo, setSinglePlayerInfo] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);

  //Metodo para peticion que regresa todos los jugadores de un equipo
  const gettingPlayers = () => {
    getPlayers(team).then((data) => setPlayersInfo(data));
  };

  //Cada que cambia de estado team se realiza el metodo
  useEffect(() => {
    setTimeout(() => {
      if(team != ''){
        console.log("Entra")
        gettingPlayers();
        setSinglePlayerInfo([]);
      }
    },200);
  }, [team]);

  return (
    <LayoutMain>
      <SelectTeam
        handleChange={(e) => {
          setTeam(e.target.value);
        }}
        title="Jugadores"
      />
      <div className="flex justify-center">
      {team == idFavTeam ? 
        <h4>{`JUGADORES PERTENECIENTES TU EQUIPO FAVORITO: ${teamName}`}</h4>:
        <h4>{`JUGADORES PERTENECIENTES A EQUIPO SELECCIONADO`}</h4>}
      </div>
      <div className="flex justify-center flex-wrap">
      {playersInfo.length > 0 ? (
          <TablePlayers
          data={playersInfo}
          handleChange={(e) => {
            idplayer = e.target.value;
            console.log(idplayer);
            //Cuando se presiona un boton se manda el id y se realiza la siguiente peticion
            getPlayerById(idplayer).then((data) => setSinglePlayerInfo(data));
            console.log(singleplayerinfo);
          }}
        />) :
        <div><h4>Selecciona un equipo para saber de sus jugadores</h4></div>}
        
        {singleplayerinfo.length > 0 ? (
          <CardInfoPlayer data={singleplayerinfo} />
        ) : null}
      </div>
    </LayoutMain>
  );
};

export default Jugadores;
