import LayoutMain from "../../components/Main/LayoutMain";
import SelectTeam from "../../components/Main/SelectTeam";
import TablePlayers from "../../components/Main/jugadores/TablePlayers";
import { getPlayers } from "../api/apiFootball";
import { useState, useEffect } from "react";

const Jugadores = () => {
    
    const [team, setTeam] = useState("2287");
    const [playersInfo, setPlayersInfo] = useState([]);
    const arrPrueba = ["Uno","Dos","Tres","Cuatro"];
    const gettingPlayers = () => {
        console.log(team)
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
            <div className="flex justify-center flex-wrap">
                <TablePlayers
                data = {playersInfo}
                />
            </div>
        </LayoutMain>
    )
};

export default Jugadores;