//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//BY CESAR CASTRO SALAZAR

const API_KEY = "6dfc3e4f53mshdb4451369cc012dp1d5198jsn2611769d2f7c";
//const API_KEY = "b77b479b40msh6c5afaede940157p1c6cf9jsn8c0b96b94453";
//const API_KEY = "6c19fda727msh737e4cf302cbe7fp179ddfjsn6976923c3e7f";
const API_HOST = "api-football-v1.p.rapidapi.com";
const API_URL = "https://api-football-v1.p.rapidapi.com/v3";

//Headers y parametros a las llamadas de la api
const LEAGUE_KEY = "262";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

//Equipos de la liga
const getTeamsLeague = async () => {
  try {
    const res = await fetch(
      `${API_URL}/teams?league=${LEAGUE_KEY}&season=2022`,
      options
    );

    if (res.status != 200) {
      throw new Error("Error");
    }

    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.log(err);
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

//Tablade la liga
const getOverallTable = async () => {
  try {
    const res = await fetch(
      `${API_URL}/standings?season=2022&league=${LEAGUE_KEY}`,
      options
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

//Jugadores por equipo
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

//Jugador por ID
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

//Partidos de la temporada
const getMatchs = async (SEASON, ROUND) => {
  try {
    const res = await fetch(
      `${API_URL}/fixtures?league=${LEAGUE_KEY}&season=${SEASON}&round=${ROUND}&timezone=America/Mexico_City`,
      options
    );

    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

//Transferencia de jugadores
const getTransfers = async (idTeam) => {
  try {
    const res = await fetch(`${API_URL}/transfers?team=${idTeam}`, options);
    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

//Goleadores de la liga
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
const getStandingsForSeason = async (year) => {
  try {
    const res = await fetch(
      `${API_URL}/standings?season=${year}&league=${LEAGUE_KEY}`,
      options
    );
    const resJson = await res.json();
    return resJson.response;
  } catch (err) {
    throw new Error("Algo ha salido mal ${err}");
  }
};

export {
  getTeamsLeague,
  getOverallTable,
  getMatchs,
  getTransfers,
  getTopScorers,
  getPlayers,
  getPlayerById,
  getStandingsForSeason,
};
