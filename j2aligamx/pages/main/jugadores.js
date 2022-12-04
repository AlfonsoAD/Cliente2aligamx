import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/SelectTeam";
import TablePlayers from "../../components/Main/jugadores/TablePlayers";
import CardInfoPlayer from "../../components/Main/jugadores/CardInfoPlayer"
import { getPlayers, getPlayerById } from "../api/apiFootball";
import { useState, useEffect } from "react";

const Jugadores = () => {
    
    const [team, setTeam] = useState("2287");
    const [idplayer, setIdPlayer] = useState(null);
    const [singleplayerinfo, setSinglePlayerInfo] = useState([]);
    const [playersInfo, setPlayersInfo] = useState([]);

    const gettingPlayers = () => {
        getPlayers(team).then(data => setPlayersInfo(data));
    }

    useEffect(() => {
        gettingPlayers();
    },[team])

    useEffect(() => {
        console.log(idplayer)
        if(idplayer == null){
            console.log("falso")
        }else{
            console.log("verdaderp")
            getPlayerById(idplayer).then(data => setSinglePlayerInfo(data));
        }
        console.log(singleplayerinfo);
    },[idplayer])

    return(
        <LayoutMain>
            <SelectTeam
            handleChange={(e) => {
                setTeam(e.target.value);
            }}
            title="Jugadores"/>
            <div className="flex justify-center flex-wrap">
                <TablePlayers
                data = {playersInfo}
                handleChange={(e) => {
                    setIdPlayer(e.target.value);
                }}
                />
                
            </div>
        </LayoutMain>
    )
};

export default Jugadores;