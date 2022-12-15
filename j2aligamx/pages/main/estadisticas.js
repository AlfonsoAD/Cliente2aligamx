import LayoutMain from "../../components/Main/LayoutMain";
import LineChart from "../../components/Main/estadisticas/LineChart";
import { useEffect, useState } from "react";
import { getStandingsForSeason } from "../api/apiFootball";
import SelectList from "../../components/Main/SelectList";
import {
  temporadas,
  estadisticasJornadas,
} from "../../utilities/Arrays.Matchs";

function Estadisticas() {
  const [year, setYear] = useState("2022");

  const [rounds, setRound] = useState("Apertura");

  const [standings, setStandings] = useState("");

  const gettingStandings = () => {
    getStandingsForSeason(year)
      .then((res) => setStandings(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimeout(() => {
      setStandings(null);
      gettingStandings();
    }, 3000);
  }, [year, rounds]);

  useEffect(() => {
    setTimeout(() => {
      setStandings(null);
    }, 3000);
  }, [rounds]);

  return (
    <LayoutMain>
      <div className="m-2">
        <h1 className="text-3xl font-semibold text-blueMenu text-center">
          Estadísticas de equipos
        </h1>
      </div>
      <div class="m-4 shadow-2xl ... rounded-sm text-align: center">
        <SelectList
          style="text-align:center;"
          handleChange={(e) => {
            setYear(e.target.value);
            console.log("cambio de temp");
          }}
          data={temporadas}
        />

        <SelectList
          style="text-align:center;"
          handleChange={(e) => {
            setRound(e.target.value);
          }}
          data={year == "2022" ? ["Apertura"] : estadisticasJornadas}
        />

        <h1 className="text-2xl font-semibold text-blueMenu text-center m-6">
          Partidos por equipo en la temporada
        </h1>
        {standings == null ? console.log("hola") : null}
        {standings && standings.length > 0 ? (
          <LineChart datos={standings} temp={rounds} />
        ) : (
          console.log("HOLA")
        )}
      </div>
    </LayoutMain>
  );
}

export default Estadisticas;
