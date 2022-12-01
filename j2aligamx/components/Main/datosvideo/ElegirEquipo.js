const Elegirequipo = ({handleChange}) => {
    const teams = ["Atlas","Tigres","Xolos","Mazatlan FC", "Toluca", "Rayados", "Santos Laguna", "Pumas", 
    "America", "Cruz Azul", "Chivas", "Necaxa", "Leon FC", "Queretaro", "Puebla", "Pachuca", "Bravos", "Atletico de San Luis"];

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
                <option key="default" value="Futbol Liga MX">Elige un equipo</option>
                {
                  teams.map((item) => (<option key={item} value={`Futbol ${item}`}>{item}</option>))
                }
            </select>
        </div>
    )
}



export default Elegirequipo;