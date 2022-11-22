import LayoutMain from "../../components/Main/LayoutMain";
import LineChart from "../../components/Main/estadisticas/LineChart";

// import Elegirequipo from "../../components/Main/datosvideo/ElegirEquipo";


function Estadisticas() {
  return (
    <LayoutMain>
      <div>
        
            <div class="m-4 shadow-2xl ... rounded-lg">
              
              <h2 class="text-xl font-semibold text-black" text-align="center">Partidos ganados</h2>
              <LineChart />

            </div>

            <div class="m-4 shadow-2xl ... rounded-lg">
         
              <h2 class="text-xl font-semibold text-black">Goles por jornada</h2>
              
            </div>

      </div>
    </LayoutMain>



    
    

  );

}

export default Estadisticas;
