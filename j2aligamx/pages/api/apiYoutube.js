//BY CESAR CASTRO SALAZAR 18100157
//Api de videos desde youtube

const API_KEY = "2c079f282amshc13dc965673241fp1327e6jsn69e6bc0b405c";
//"b77b479b40msh6c5afaede940157p1c6cf9jsn8c0b96b94453"
//"6dfc3e4f53mshdb4451369cc012dp1d5198jsn2611769d2f7c";
const API_HOST = "youtube-search-results.p.rapidapi.com";
const API_URL = "https://youtube-search-results.p.rapidapi.com";

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

//endpoint que regresa url de los resutlados segun la query enviada
const searchVideos = async (QUERY) => {
  try {
    const res = await fetch(`${API_URL}/youtube-search/?q=${QUERY}`, option);

    const resJson = await res.json();
    return resJson.items;
  } catch (error) {
    throw new Error("Algo ha salido mal");
  }
};

export { searchVideos };
