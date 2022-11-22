
import clasification22 from "../../../utilities/clasification22lmx.json";

const Elegirequipo = () => {
    return(
        <div className="flex justify-items-start">
            <div className="mb-3 xl:w-96">
                <select className="form-select form-select-sm focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">

                    <option selected  value="0">Elegir equipo</option>

                    {clasification22.map((value, index) => {
                    return value.league.standings[index].map((value, index) => {
                        return (
                           
                            
                            <option key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                            {value.team.name}
                            </option>
                 
                           
                        );
                    });
                    })}
                </select>



           
           
               
               
               
               
               
               
               
               
               
               
               
               
               
                {/* <select className="form-select form-select-sm focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                <option selected value="0">Elegir equipo</option>
                <option value="1">America</option>
                <option value="2">Atletico San Luis</option>
                <option value="3">Cruz Azul</option>
                <option value="4">Guadalajara</option>
                <option value="5">Mazatlan FC</option>
                <option value="6">Necaxa</option>
                <option value="7">Puebla</option>
                <option value="8">Atlas</option>
                <option value="9">Tijuana</option>
                <option value="10">Juarez</option>
                <option value="11">Leon</option>
                <option value="12">Monterrey</option>
                <option value="13">Pachuca</option>
                <option value="14">Pumas</option>
                <option value="15"> Tigres</option>
                <option value="16">Queretaro</option>
                <option value="17">Santos</option>
                <option value="18">Toluca</option>
                </select> */}
            </div>
        </div>
    )
}

export default Elegirequipo;