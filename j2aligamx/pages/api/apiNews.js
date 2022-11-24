const API_URL = "https://newsapi.org/v2/";
const API_KEY = "7e9ce368d89441b687f20dabf9783fe1";

const API_REQ = `${API_URL}top-headlines?country=mx&category=sports&apiKey=${API_KEY}`;
var req = new Request(API_REQ);

const getNewsSportsMx = () => {
  try {
    const res = fetch(req);
    const resJson = res.json();
    return resJson;
  } catch (err) {
    throw new Error("Algo ha salido mal");
  }
};

export { getNewsSportsMx };
