import Image from "next/image";

const template = () => (
  <tr>
    <td
      colSpan={11}
      height="32"
      className="bg-white border-b animate-pulse justify-center items-center"
    >
      Cargando
    </td>
  </tr>
);

const desconocido = "desconocido";

const TablePlayers = ({ data, handleChange }) => {
  return (
    <div className="overflow-auto rounded-lg m-6 shadow-2xl">
      <table className="w-full">
        <thead className="text-white text-sm bg-blueMenu border-b">
          <tr>
            <th scope="col" className="px-3 py-1 text-left"></th>
            <th scope="col" className="px-3 py-3 text-left">
              NOMBRE
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              EDAD
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              NACIONALIDAD
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              POSICION
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              PESO
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              ALTURA
            </th>
            <th scope="col" className="px-2 py-1 text-left"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data == null ? template() : null}
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
                <tr key={index} value={item.player.id}>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                      <Image
                        src={item.player.photo}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Foto de ${item.player.name}`}
                      />
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.player.name == null ? desconocido : item.player.name}
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.player.age == null ? desconocido : item.player.age}
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.player.nationality == null ? desconocido : item.player.nationality}
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.statistics[0].games.position == null ? desconocido : item.statistics[0].games.position}
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.player.weight == null ? desconocido : item.player.weight}
                    </td>
                    <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                      {item.player.height == null ? desconocido : item.player.height}
                    </td>
                    <td>
                    <button 
                    type="button" 
                    value={item.player.id}
                    className="inline-block px-2 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={handleChange}>
                      Mas...
                    </button>
                    </td>
                  </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePlayers;
