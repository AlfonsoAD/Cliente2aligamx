const API_KEY = "6c19fda727msh737e4cf302cbe7fp179ddfjsn6976923c3e7f";
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
    throw new Error("Algo ha salido mal");
  }
};

const getOverallTable = async () => {
  try {
    if (window.localStorage.getItem("standings")) {
      const res = window.localStorage.getItem("standings");
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
    throw new Error("Algo ha salido mal");
  }
};

const getPlayers = async () => {
  try {
    if (window.localStorage.getItem("players")) {
      return window.localStorage.getItem("players");
    }

    const res = await fetch(
      `${API_URL}players?league=${LEAGUE_KEY}&season=2022`,
      options
    );

    const resJson = await res.json();
    window.localStorage.setItem("standings", JSON.stringify(resJson));
    return resJson;
  } catch (err) {
    throw new Error("Algo ha salido mal");
  }
};

const getSeasons = () => {};
const getInformationTeams = () => {};
const getStatsTeams = () => {};
const getJourneys = () => {};

const getMatchs = async (SEASON, ROUND) => {
  try {
    if (window.localStorage.getItem("players")) {
      return window.localStorage.getItem("players");
    }

    const res = await fetch(
      `${API_URL}fixtures?league=${LEAGUE_KEY}season=${SEASON}&round=${ROUND}`,
      options
    );

    const resJson = await res.json();
    window.localStorage.setItem("standings", JSON.stringify(resJson));
    return resJson;
  } catch (err) {
    throw new Error("Algo ha salido mal");
  }
};

export { getTeamsLeague, getOverallTable };
