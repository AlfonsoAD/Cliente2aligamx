const SelectList = ({tittle,datos,handleChange}) => {

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
                {tittle == "jornadas" ? 
                  datos.map((item) => (<option key={item} value={item}>{item}</option>))
                :
                  <>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                  </>
                }
            </select>
        </div>
    )
}

export default SelectList;