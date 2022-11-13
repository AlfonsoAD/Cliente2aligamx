import Box from "./box";
import TeamsTablePosition from "./TeamsTablePosition";

const Home = () => {
  return (
    <div className="flex h-64 flex-wrap justify-between">
      <div className=" bg-red-700 px-2 py-2 m-2 w-64">
        <TeamsTablePosition />
      </div>
      <div className="bg-orange-800 px-2 py-2 m-2 w-64">
        <Box />
      </div>
    </div>
  );
};

export default Home;
