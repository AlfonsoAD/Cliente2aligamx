import Image from "next/image"

const MatchsResults = (teamsdata) => {
    const objhome = teamsdata.teamsdata.home || {name: "indefinido", logo: "assets/images/logoj2aligamx.png"};
    const objaway = teamsdata.teamsdata.away || {name: "indefinido", logo: "assets/images/logoj2aligamx.png"};
    const objgoals = teamsdata.goals || {home: "--", away: "--"};
    const objdate = teamsdata.date || "Sin Fecha";

    const splitDate = objdate.split("T");
    var dateMatch = splitDate[0];
    dateMatch = dateMatch.split("-");
    dateMatch = `${dateMatch[2]}/${dateMatch[1]}/${dateMatch[0]}`;
    const splitHour = splitDate[1].split(":");
    const hourMatch = `${splitHour[0]}:${splitHour[1]}`;
    console.log(dateMatch);
    console.log(hourMatch);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <div className="m-12">
          {/*<Image alt="Local" src={objhome.logo} width="14" height="14" />*/}
          <img class ="local" src={objhome.logo} className="h-14 w-14" />
        </div>
        <div className="m-12">
          {/*<Image alt="Visitante" src={objaway.logo} width="14" height="14" />*/}
          <img class ="local" src={objaway.logo} className="h-14 w-14" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-8 ml-4 w-12 h-10 text-black">
          <h3>{objhome.name}</h3>
        </div>
        <div className="mr-4 ml-4 w-12 h-10 text-black">
          <h3>vs</h3>
        </div>
        <div className="mr-4 ml-8 w-12 h-10 text-black">
          <h3>{objaway.name}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-8 ml-4 w-12 h-10 text-black">
          <h3>{objgoals.home}</h3>
        </div>
        <div className="mr-4 ml-4 w-12 h-10 text-black">
          <h3> - </h3>
        </div>
        <div className="mr-4 ml-8 w-12 h-10 text-black">
          <h3>{objgoals.away}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-4 ml-8 text-black-500">
          <p>{hourMatch}</p>
          <p>{dateMatch}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchsResults;
