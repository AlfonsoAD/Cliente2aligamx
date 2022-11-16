import clasification16 from "../../utilities/clasification16lmx.json";

const TeamsTablePosition = () => {
  return (
    <div className="overflow-auto rounded-lg m-6 shadow-2xl">
      <table className="w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Pos
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            ></th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Club
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              PTS
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              JJ
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              JG
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              JE
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              JP
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              GF
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              GC
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              DIF
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {clasification16.map((value) => {
            return value.league.standings[1].map((value, index) => {
              return (
                <tr key={index}>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.rank}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    <img
                      src={value.team.logo}
                      height="32"
                      width="32"
                      alt="logo del club"
                    />
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.team.name}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.points}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.played}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.win}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.draw}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.lose}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.goals.for}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
                    {value.all.goals.against}
                  </td>
                  <td className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 px-6 py-4 text-sm font-small whitespace-nowrap">
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
