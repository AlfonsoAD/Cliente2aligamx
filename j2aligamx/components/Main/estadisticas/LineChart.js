import { useMemo } from "react"
import { Line } from 'react-chartjs-2';
import Image from "next/image";
import { teamsLogo } from "../../../utilities/teamsInfo";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { BackspaceIcon } from "@heroicons/react/24/outline";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    resposive: false,
    fill: true,
    scales: {
        y: {
            min: 0,

        },
    },
    plugins: {
        legend: {
            display: true,
        },
    },
}

export default function({datos}) {
    let Partidosganados = [];
    let PartidosPerdidos = [];
    let PartidosEmpatados = [];
    let equipos = [];

    console.log(datos);

    const arrayMatchsxTeam = () => {
        datos.league.standings.map((value)=>{
            value.map((value2)=>{
                equipos.push(value2.team.name)
                Partidosganados.push(value2.all.win)
                PartidosPerdidos.push(value2.all.lose)
                PartidosEmpatados.push(value2.all.draw)
            })
        })
    }
    
    arrayMatchsxTeam()

    const data = useMemo(function () {
       
        return {
            labels: equipos,
            
            datasets: [
                {
                    label: 'Partidos ganados',
                    data: Partidosganados,
                    tension: 0.5,
                    borderColor: 'green',
                    pointRadius: 10,
                    pointBackgroundColor: 'Black',
                    
                   
                    
                },
                {
                    label: 'Partidos perdidos',
                    data: PartidosPerdidos,
                    tension: 0.5,
                    borderColor: 'red',
                    pointRadius: 10,
                    pointBackgroundColor: 'Black',
                    
                },
                {
                    label: 'Partidos empatados',
                    data: PartidosEmpatados,
                    tension: 0.5,
                    borderColor: 'blue',
                    pointRadius: 10,
                    pointBackgroundColor: 'Black',
                    
                },



            ],
            
        };

    },[]);

    return <Line data={data} options={options}/>;
}