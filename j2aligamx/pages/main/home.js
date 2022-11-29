import LayoutMain from "../../components/Main/LayoutMain";
import TeamsTablePosition from "../../components/Main/TeamsTablePosition";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import { getOverallTable } from "../api/apiFootball";
import { getNewsSportsMx } from "../api/apiNews";
import { useEffect, useState } from "react";
import ModalEquipos from "../../components/Main/ModalEquipos";
import ModalRedirection from "../../components/Main/ModalRedirection";

const Home = () => {
  const [table, setTable] = useState(null);
  const [news, setNews] = useState(null);
  const [showModal, setShowModal] = useState({ show: false, url: "" });

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    setTimeout(() => {
      getOverallTable().then((res) => setTable(res));
      getNewsSportsMx().then((res) => setNews(res));
    }, 3000);
  };

  const ModalRedToNote = (url) => {
    setShowModal({ show: true, url: url });
  };

  return (
    <LayoutMain>
      <ModalEquipos />
      {showModal.show ? (
        <ModalRedirection
          link={showModal.url}
          closeAction={() => {
            setShowModal({ show: false, url: "" });
          }}
        />
      ) : null}

      <div className="flex justify-center flex-wrap">
        <TeamsTablePosition data={table} />
        <div className="m-1">
          <h1 className="text-2xl font-bold text-blueMenu text-start ml-8">
            NOTICIAS
          </h1>
          <MatchContainer>
            {news == null ? console.log("hola") : null}
            {news &&
              news.length > 0 &&
              news.map((value, index) => {
                try {
                  return (
                    <SmallContainerBox key={`1.${index}`} id={`2.${index}`}>
                      <h1
                        key={`_${index}`}
                        className="text-md font-bold text-black text-center m-2"
                        onClick={() => {
                          ModalRedToNote(value.url);
                        }}
                      >
                        {value.description}
                      </h1>
                      <img
                        key={`0${index}`}
                        src={
                          value.image.contentUrl ? value.image.contentUrl : ""
                        }
                        alt="Imagen de la noticia"
                        onClick={() => ModalRedToNote(value.url)}
                      />
                    </SmallContainerBox>
                  );
                } catch (err) {
                  return (
                    <SmallContainerBox key={`1.${index}`} id={`2.${index}`}>
                      <h1
                        key={`_${index}`}
                        className="text-md font-bold text-black text-center m-2"
                        onClick={() => ModalRedToNote(value.url)}
                      >
                        {value.description}
                      </h1>
                    </SmallContainerBox>
                  );
                }
              })}
          </MatchContainer>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;
