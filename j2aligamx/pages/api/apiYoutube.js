const API_KEY = "6dfc3e4f53mshdb4451369cc012dp1d5198jsn2611769d2f7c";
const API_HOST = "youtube-search-results.p.rapidapi.com";
const API_URL = "https://youtube-search-results.p.rapidapi.com";

const option = {
  method: "GET",
  headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
  },
};

const searchVideos = async (QUERY) => {
  try {
    const res = await fetch(
      `${API_URL}/youtube-search/?q=${QUERY}`,
      option
    );

    const resJson = await res.json();
    return resJson.items;
  } catch(error) {
    throw new Error("Algo ha salido mal");
  };
};

export {searchVideos}