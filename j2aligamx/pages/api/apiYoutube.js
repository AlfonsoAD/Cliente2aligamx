const API_KEY = "b77b479b40msh6c5afaede940157p1c6cf9jsn8c0b96b94453";
const API_HOST = "youtube138.p.rapidapi.com";
const API_URL = "https://youtube138.p.rapidapi.com";

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
          `${API_URL}/search/?q=${QUERY}&Upload date=This month&"Type=Video`,
          option
        );
    
        const resJson = await res.json();
        return resJson.contents;
      } catch (err) {
        throw new Error("Algo ha salido mal");
      }
};