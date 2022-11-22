import { useMemo } from "react"
import { Line } from 'react-chartjs-2';
// import clasification22 from "../../../utilities/clasification22lmx.json";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Partidosganados = [12,10,10,9,9,7,7,4,5,6,4,5,4,3,4,2,3,1];

const equipos = ["America","Monterrey","Santos","Pachuca","Tigres",
"Toluca","Cruz Azul","Puebla","Chivas","Leon","Juarez","Necaxa","San Luis",
"Mazatlan","Tijuana","Pumas","Atlas","Queretaro"];

// {clasification22.map((value, index) => {
//     return value.league.standings[index].map((value, index) => {
//         return (
           
//         );
//     });
// })}

const options = {
    resposive: true,
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
                },

            ],
            
        };

    },[]);

    return <Line data={data} options={options}/>;
}