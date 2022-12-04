const API_KEY = "6dfc3e4f53mshdb4451369cc012dp1d5198jsn2611769d2f7c";
//const API_KEY = "b77b479b40msh6c5afaede940157p1c6cf9jsn8c0b96b94453";
//const API_KEY = "6c19fda727msh737e4cf302cbe7fp179ddfjsn6976923c3e7f";
const API_HOST = "api-football-v1.p.rapidapi.com";
const API_URL = "https://api-football-v1.p.rapidapi.com/v3";
const LEAGUE_KEY = "262";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

const getTeamsLeague = async () => {
  const wlsTeams = window.localStorage.getItem("teams");
  try {
    if (wlsTeams) {
      return wlsTeams;
    }
    const res = await fetch(
      `${API_URL}/teams?league=${LEAGUE_KEY}&season=2022`,
      options
    );

    if (res.status != 200) {
      throw new Error("Error");
    }

    const resJson = await res.json();
    window.localStorage.setItem("teams", JSON.stringify(resJson));
    return resJson;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getOverallTable = async () => {
  try {
    if (window.localStorage.getItem("standings")) {
      const res = JSON.parse(window.localStorage.getItem("standings"));
      return res;
    }

    const res = await fetch(
      `${API_URL}/standings?season=2022&league=${LEAGUE_KEY}`,
      options
    );

    const resJson = await res.json();
    window.localStorage.setItem("standings", JSON.stringify(resJson));
    return resJson;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getPlayers = async (TEAM) => {
  try {
    const res = await fetch(
      `${API_URL}/players?team=${TEAM}&season=2022`,
      options
    );

    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getPlayerById = async (ID_PLAYER) => {
  try {
    const res = await fetch(
      `${API_URL}/players?id=${ID_PLAYER}&season=2022`,
      options
    );

    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getMatchs = async (SEASON, ROUND) => {
  try {
    const res = await fetch(
      `${API_URL}/fixtures?league=${LEAGUE_KEY}&season=${SEASON}&round=${ROUND}&timezone=America/Mexico_City`,
      options
    );

    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getTransfers = async (idTeam) => {
  try {
    const res = await fetch(`${API_URL}/transfers?team=${idTeam}`, options);
    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

const getTopScorers = async () => {
  try {
    const res = await fetch(
      `${API_URL}/players/topscorers?league=${LEAGUE_KEY}&season=2022`,
      options
    );
    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

export {
  getTeamsLeague,
  getOverallTable,
  getMatchs,
  getTransfers,
  getTopScorers,
  getPlayers,
  getPlayerById
};
