import { useMemo } from "react"
import { Bar, Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Partidosganados = [12,10,10,9,9,7,7,4,5,6,4,5,4,3,4,2,3,1];
const PartidosPerdidos = [3,2,4,3,5,4,7,3,5,7,6,8,7,6,8,7,10,10];
const PartidosEmpatados = [2,5,3,5,3,6,3,10,7,4,7,4,6,8,5,8,4,6];

const equipos = ["America","Monterrey","Santos","Pachuca","Tigres",
"Toluca","Cruz Azul","Puebla","Chivas","Leon","Juarez","Necaxa","San Luis",
"Mazatlan","Tijuana","Pumas","Atlas","Queretaro"];



const options = {
    resposive: false,
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
export default function() {
    const data = useMemo(function () {
       
        return {
            labels: equipos,
            
            datasets: [
                {
                    label: 'Partidos ganados',
                    data: Partidosganados,
                    tension: 0.3,
                    borderColor: 'green',
                    // pointRadius: 5,
                    // pointBackgroundColor: 'Black'
                    backgroundColor: 'green',
                },
                {
                    label: 'Partidos perdidos',
                    data: PartidosPerdidos,
                    tension: 0.3,
                    borderColor: 'red',
                    backgroundColor: 'red',
                    pointRadius: 5,
                    
                },
                {
                    label: 'Partidos empatados',
                    data: PartidosEmpatados,
                    tension: 0.3,
                    borderColor: 'blue',
                    pointRadius: 5,
                    backgroundColor: 'Black',
                    backgroundColor: 'blue',
                },



            ],
            
        };

    },[]);

    return <Bar data={data} options={options}/>;
}