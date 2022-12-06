import Image from "next/image";

const TableCociente = () =>{

    return(
        <div className="overflow-auto rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold text-blueMenu text-center m-6">
        Tabla Cociente
      </h1>
      <table className="w-full">
        <thead className="text-white text-sm bg-blueMenu border-b">
          <tr>
            <th scope="col" className="px-3 py-3 text-left">
              Pos
            </th>
           
            <th scope="col" className="px-2 py-1 text-left">
              Club
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              Cociente
            </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            <tr>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <Image
                        src={"https://media.api-sports.io/football/teams/2287.png"}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo de `}
                    />
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1.9882
                </td>
               

            </tr>
            <tr>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    2
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <Image
                        src={"https://media.api-sports.io/football/teams/2286.png"}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo de `}
                    />
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1.6076
                </td>
            </tr>
            <tr>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    3
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <Image
                        src={"https://media.api-sports.io/football/teams/2295.png"}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo de `}
                    />
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1.6076
                </td>
            </tr>
            <tr>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    4
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <Image
                        src={"https://media.api-sports.io/football/teams/2282.png"}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo de `}
                    />
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1.6471
                </td>
            </tr>
            <tr>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    5
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <Image
                        src={"https://media.api-sports.io/football/teams/2289.png"}
                        className="sm:h-8 sm:w-8"
                        height="20"
                        width="20"
                        alt={`Logo de `}
                    />
                </td>
                <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    1.6235
                </td>
            </tr>
        
        </tbody>
      </table>
    </div>
    );



};

export default TableCociente;