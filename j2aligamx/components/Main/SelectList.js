const SelectList = ({ tittle, handleChange }) => {
  const jornadas = [
    "Apertura - 1",
    "Apertura - 2",
    "Apertura - 3",
    "Apertura - 4",
    "Apertura - 5",
    "Apertura - 6",
    "Apertura - 16",
    "Apertura - 7",
    "Apertura - 8",
    "Apertura - 9",
    "Apertura - 10",
    "Apertura - 11",
    "Apertura - 12",
    "Apertura - 13",
    "Apertura - 14",
    "Apertura - 15",
    "Apertura - 17",
    "Apertura - Reclasificación",
    "Apertura - Quarter-finals",
    "Apertura - Semi-finals",
    "Apertura - Final",
    "Clausura - 1",
    "Clausura - 2",
    "Clausura - 3",
    "Clausura - 4",
    "Clausura - 5",
    "Clausura - 6",
    "Clausura - 7",
    "Clausura - 8",
    "Clausura - 9",
    "Clausura - 10",
    "Clausura - 11",
    "Clausura - 12",
    "Clausura - 13",
    "Clausura - 14",
    "Clausura - 15",
    "Clausura - 16",
    "Clausura - 17",
    "Clausura - Reclasificación",
    "Clausura - Quarter-finals",
    "Clausura - Semi-finals",
    "Clausura - Final",
  ];

  const temporadas = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];

  return (
    <div className="mb-3 xl:w-96">
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
        {tittle == "jornadas"
          ? jornadas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          : temporadas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
      </select>
    </div>
  );
};

export default SelectList;
