//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Api de noticias
const fetch = require("node-fetch");

const url = "https://bing-news-search1.p.rapidapi.com/news/";

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "fd0150a209msh26dac29b51e401fp19e1a3jsn84ed8934783e",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

//Top noticias
const getNewsSportsMx = async (query) => {
  try {
    const res = await fetch(
      `${url}search?q=${query}&setLang=es&cc=mx&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off`,
      options
    );
    const resJson = await res.json();
    return resJson.value;
  } catch (err) {
    throw new Error(`Algo ha salido mal, ${err}`);
  }
};

export { getNewsSportsMx };
