import LayoutMain from "../../components/Main/LayoutMain";
import LineChart from "../../components/Main/estadisticas/LineChart";
import BarChart from "../../components/Main/estadisticas/BarChart";



import TableCociente from "../../components/Main/estadisticas/TeamsTableCociente";


function Estadisticas() {

  
  return (
    
    <LayoutMain>
      <div class="m-6">

          <div class="m-4 shadow-2xl ... rounded text-align: center">
              
            <h1 className="text-2xl font-bold text-blueMenu text-center m-6">
              CLAUSURA 2022
            </h1>
              

          </div>
            
            <div class="m-4 shadow-2xl ... rounded-sm text-align: center">
              
              <h1 className="text-2xl font-bold text-blueMenu text-center m-6">
                Partidos por equipo
              </h1>
                <LineChart />
              

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
