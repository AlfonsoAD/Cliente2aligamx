import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

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
};

const LineChart = ({ datos, temp }) => {
  let Partidosganados = [];
  let PartidosPerdidos = [];
  let PartidosEmpatados = [];
  let equipos = [];
  let stand = datos[0].league.standings;
  let journy = [];
  let estadistics = [];

  stand[0].map((value) => {
    journy.push(value.group);
  });

  console.log(stand);

  const arrayMatchsxTeam = () => {
    if (stand.length > 1) {
      console.log(`Esta en Liga MX: ${temp}`);
      console.log(journy[0]);
      if (`Liga MX: ${temp}` == journy[0]) {
        estadistics = stand[0];
        console.log("Entro Verdad");
      } else {
        estadistics = stand[1];
        console.log("Entro Falso");
      }
    } else {
      estadistics = stand[0];
    }

    estadistics.length > 0 && estadistics
      ? estadistics.map((value) => {
          equipos.push(value.team.name);
          Partidosganados.push(value.all.win);
          PartidosPerdidos.push(value.all.lose);
          PartidosEmpatados.push(value.all.draw);
        })
      : null;
    console.log(equipos);
  };

  arrayMatchsxTeam();

  const data = useMemo(function () {
    return {
      labels: equipos,

      datasets: [
        {
          label: "Partidos ganados",
          data: Partidosganados,
          tension: 0.5,
          borderColor: "green",
          pointRadius: 5,
          pointBackgroundColor: "Black",
        },
        {
          label: "Partidos perdidos",
          data: PartidosPerdidos,
          tension: 0.5,
          borderColor: "red",
          pointRadius: 5,
          pointBackgroundColor: "Black",
        },
        {
          label: "Partidos empatados",
          data: PartidosEmpatados,
          tension: 0.5,
          borderColor: "blue",
          pointRadius: 5,
          pointBackgroundColor: "Black",
        },
      ],
    };
  }, []);

  return <Line data={data} options={options} />;
};

export default LineChart;
