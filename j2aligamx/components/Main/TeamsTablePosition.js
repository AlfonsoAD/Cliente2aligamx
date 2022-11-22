import clasification22 from "../../utilities/clasification22lmx.json";

const TeamsTablePosition = (data) => {
  return (
    <div className="overflow-auto rounded-lg m-6 shadow-2xl">
      <table className="w-full">
        <thead className="text-white text-sm bg-blueMenu border-b">
          <tr>
            <th scope="col" className="px-3 py-3 text-left">
              Pos
            </th>
            <th scope="col" className="px-3 py-1 text-left"></th>
            <th scope="col" className="px-2 py-1 text-left">
              Club
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              PTS
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              JJ
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              JG
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              JE
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              JP
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              GF
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              GC
            </th>
            <th scope="col" className="px-2 py-1 text-left">
              DIF
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {clasification22.map((value, index) => {
            return value.league.standings[index].map((value, index) => {
              return (
                <tr key={index}>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.rank}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 text-sm font-small whitespace-nowrap">
                    <img
                      src={value.team.logo}
                      className="sm:h-8 sm:w-8"
                      alt="logo del club"
                    />
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.team.name}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.points}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.played}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.win}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.draw}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.lose}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.goals.for}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.goals.against}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-3 py-1 text-sm font-small whitespace-nowrap">
                    {value.all.goals.for - value.all.goals.against}
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTablePosition;
