//BY CESAR CASTRO SALAZAR 18100157
import { teamsLogo } from "../../utilities/teamsInfo";
//Select el cual se usa para obtener los equipos de la temporada actual
const SelectTeam = ({handleChange, title}) => {

    return (
        <div
        className="mb-3 xl:w-96">
            <select 
            className="form-select form-select-lg mb-3
            blueButton
            appearance-none
            block
            w-full
            px-4
            py-2
            text-xl
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            aria-label=".form-select-lg example"
            onChange={handleChange} 
            >
                <option key="default" value="Futbol+Liga+MX">Elige un equipo</option>
                {title == "Jugadores" ?
                  teamsLogo.map((item) => (<option key={item.name} value={item.id}>{item.name}</option>)):
                  teamsLogo.map((item) => (<option key={item.name} value={item.name}>{item.name}</option>))
                }
            </select>
        </div>
    )
}



export default SelectTeam;