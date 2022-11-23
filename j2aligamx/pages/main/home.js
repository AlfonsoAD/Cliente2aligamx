import LayoutMain from "../../components/Main/LayoutMain";
import TeamsTablePosition from "../../components/Main/TeamsTablePosition";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import { getOverallTable } from "../api/apiFootball";
import { getNewsSportsMx } from "../api/apiNews";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

const Home = () => {
  const [table, setTable] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    setTimeout(() => {
      getOverallTable().then((res) => setTable(JSON.parse(res)));
    }, 3000);
    getNewsSportsMx().then((res) => setNews(res));
  };

  return (
    <LayoutMain>
      <Modal />
      <div className="flex justify-center flex-wrap">
        <TeamsTablePosition data={table} />
        <div className="m-1">
          <h1 className="text-2xl font-bold text-blueMenu text-start ml-8">
            NOTICIAS
          </h1>
          <MatchContainer>
            {news == null ? console.log("hola") : null}
            {news &&
              news.articles.length > 0 &&
              news.articles.map((value, index) => {
                return (
                  <SmallContainerBox id={index}>
                    <h1
                      key={index}
                      className="text-md font-bold text-black text-center m-2"
                    >
                      {value.title}
                    </h1>
                    <img key={index} src={value.urlToImage} />
                  </SmallContainerBox>
                );
              })}
          </MatchContainer>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;
