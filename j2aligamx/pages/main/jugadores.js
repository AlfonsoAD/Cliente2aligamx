import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/datosvideo/SelectTeam";
import { getPlayers } from "../api/apiFootball";
import { useState, useEffect } from "react";
const Jugadores = () => {
    
    const [team, setTeam] = useState("2287");
    const [playersInfo, setPlayersInfo] = useState([]);
    
    const gettingPlayers = () => {
        getPlayers(team).then(data => setPlayersInfo(data));
        console.log(playersInfo);
    }

    useEffect(() => {
        gettingPlayers();
    },[team])

    return(
        <LayoutMain>
            <SelectTeam
            handleChange={(e) => {
                setTeam(e.target.value);
            }}
            title="Jugadores"/>
        </LayoutMain>
    )
};

export default Jugadores;