import { unregister } from "./Interceptor";
const fetch = require("node-fetch");
const url =
  "https://bing-news-search1.p.rapidapi.com/news/search?q=liga%20mx&setLang=es&cc=mx&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off";
const url_2 =
  "https://bing-news-search1.p.rapidapi.com/news?originalImg=true&category=sports&cc=mx&setLang=es&safeSearch=Off&textFormat=Raw";

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "2addb52312msh4fd9ba75a2fe5bdp16dc95jsn84280bccf9fd",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

const getNewsSportsMx = async () => {
  try {
    const res = await fetch(url, options);
    const resJson = await res.json();
    return resJson.value;
  } catch (err) {
    throw new Error(`Algo ha salido mal, ${err}`);
  }
};

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
