const SelectJornada = () => {
    return(
        <div className="flex justify-items-start">
            <div className="mb-3 xl:w-96">
                <select className="form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                    <option selected className="bg-cyan-600">Apertura 2022-2023</option>
                    <option value="1">Clausura 2021-2022</option>
                    <option value="2">Apertura 2021-2022</option>
                    <option value="3">Clausura 2020-2021</option>
                    <option value="4">Apertura 2020-2021</option>
                </select>

                <select className="form-select form-select-sm
                bg-cyan-500
                appearance-none
                block
                w-full
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                <option selected>Jornada 1</option>
                <option value="1">Jornada 2</option>
                <option value="2">Jornada 3</option>
                <option value="3">Jornada 4</option>
                <option value="4">Jornada 5</option>
                <option value="5">Jornada 6</option>
                <option value="6">Jornada 7</option>
                <option value="7">Jornada 8</option>
                <option value="8">Jornada 9</option>
                <option value="9">Jornada 10</option>
                <option value="10">Jornada 11</option>
                <option value="11">Jornada 12</option>
                <option value="12">Jornada 13</option>
                <option value="13">Jornada 14</option>
                <option value="14">Jornada 15</option>
                <option value="15">Jornada 16</option>
                <option value="16">Jornada 17</option>
                </select>
            </div>
        </div>
    )
}

export default SelectJornada;