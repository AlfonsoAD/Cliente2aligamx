import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import { getNewsSportsMx } from "../api/apiNews";
import { useEffect, useState } from "react";

const Noticias = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    getNewsSportsMx().then((res) => setNews(res));
  };

  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-2">
          <h1 className="text-2xl font-bold text-blueMenu text-start ml-8">
            NOTICIAS
          </h1>
          <MatchContainer>
            {news == null ? console.log("hola") : null}
            {news &&
              news.articles.length > 0 &&
              news.articles.map((value, index) => {
                return (
                  <SmallContainerBox>
                    <div key={index}>
                      <h1 className="text-md font-bold text-black text-center m-2">
                        {value.title}
                      </h1>
                      <img src={value.urlToImage} />
                    </div>
                  </SmallContainerBox>
                );
              })}
          </MatchContainer>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Noticias;
