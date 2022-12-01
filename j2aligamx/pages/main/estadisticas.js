import LayoutMain from "../../components/Main/LayoutMain";
import LineChart from "../../components/Main/estadisticas/LineChart";
import BarChart from "../../components/Main/estadisticas/BarChart";
import TableCociente from "../../components/Main/estadisticas/TeamsTableCociente";
import { useEffect, useState } from "react";
import {getStandingsForSeason} from '../api/apiFootball'
import SelectList from "../../components/Main/SelectList"

function Estadisticas() {
  const [year,setYear] = useState("2022")

  const [rounds,setRound] = useState("Apertuta - 1");

  const [standings, setStandings] = useState(null)

  const gettingStandings = () => {

  getStandingsForSeason(year).then((res)=>setStandings(res))
  
}



useEffect(() => {
  setStandings(null);
  gettingStandings();
},[year]);

  return (
    <LayoutMain>
      <div class="m-6">
        <SelectList
          handleChange={(e) => {
          setYear(e.target.value)
          console.log('cambio de temp');
        }}/>
        
        <div class="m-4 shadow-2xl ... rounded text-align: center">
              
      </div>
            
      <div class="m-4 shadow-2xl ... rounded-sm text-align: center">
              
            <h1 className="text-2xl font-bold text-blueMenu text-center m-6">
              Partidos por equipo
            </h1>
            {standings == null ? console.log("holla"): null}
            {
              standings && standings.length > 0 && standings.map((value)=>
                <LineChart datos ={value}/>
              ) 
            }
                
          </div>

          <div class="m-4 shadow-2xl ... rounded-lg">
            <TableCociente />    
          </div>

          <div class="m-4 shadow-2xl ... rounded-lg">
            <BarChart />
          </div>
      </div>
    </LayoutMain>
  );
}

export default Estadisticas;
