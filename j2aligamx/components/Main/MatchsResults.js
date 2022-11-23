const MatchsResults = (teamsdata) => {
    const objhome = teamsdata.teamsdata.home;
    const objaway = teamsdata.teamsdata.away;
    const objgoals = teamsdata.goals;
    const objdate = teamsdata.date;


  return (
    <div>
      <h2>Jornada 17</h2>
      <div className="flex justify-center flex-wrap">
        <div className="m-12">
          <img class ="local" src={objhome.logo} className="h-14 w-14" />
        </div>
        <div className="m-12">
          <img class="visitante" src={objaway.logo} className="h-14 w-14" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-8 ml-4 w-12 h-14 text-black">
          <h3>{objhome.name}</h3>
        </div>
        <div className="mr-4 ml-4 w-12 h-14 text-black">
          <h3>vs</h3>
        </div>
        <div className="mr-4 ml-8 w-12 h-14 text-black">
          <h3>{objaway.name}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-8 ml-4 w-12 h-14 text-black">
          <h3>{objgoals.home}</h3>
        </div>
        <div className="mr-4 ml-4 w-12 h-14 text-black">
          <h3> - </h3>
        </div>
        <div className="mr-4 ml-8 w-12 h-14 text-black">
          <h3>{objgoals.away}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-24 w-24">
          <p>17:05</p>
          <p>{objdate}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchsResults;
