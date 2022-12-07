//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Api de noticias
const fetch = require("node-fetch");

const url = "https://bing-news-search1.p.rapidapi.com/news";
const urlComun = `https://bing-news-search1.p.rapidapi.com/news/search?q=ligamx-FMF&setLang=es&cc=mx&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off`;
const url_2 =
  "https://bing-news-search1.p.rapidapi.com/news?originalImg=true&category=sports&cc=mx&setLang=es&safeSearch=Off&textFormat=Raw";

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "fd0150a209msh26dac29b51e401fp19e1a3jsn84ed8934783e",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

//Top noticias
const getNewsSportsMx = async (equipoFav) => {
  try {
    let res = "";
    if (equipoFav != "") {
      res = await fetch(
        `${url}search?q=${equipoFav}&setLang=es&cc=mx&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off`,
        options
      );
    } else {
      res = await fetch(urlComun, options);
    }
    const resJson = await res.json();
    return resJson.value;
  } catch (err) {
    throw new Error(`Algo ha salido mal, ${err}`);
  }
};

//Noticias
const getNewsSportsMx2 = async () => {
  try {
    const res = await fetch(url_2, options);
    const resJson = await res.json();
    console.log(resJson);
    return resJson.value;
  } catch (err) {
    throw new Error(`Algo ha salido mal, ${err}`);
  }
};

export { getNewsSportsMx, getNewsSportsMx2 };
