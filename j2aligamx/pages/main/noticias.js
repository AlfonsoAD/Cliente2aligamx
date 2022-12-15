//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import ModalRedirection from "../../components/Main/ModalRedirection";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import SelectTeam from "../../components/Main/SelectTeam";
//Api
import { getNewsSportsMx } from "../api/apiNews";
//react
import { useEffect, useState } from "react";

const Noticias = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("LigaMX-FMF");
  const [showModal, setShowModal] = useState({ show: false, url: "" });

  useEffect(() => {
    petitions();
  }, [query]);

  const petitions = () => {
    setTimeout(() => {
      getNewsSportsMx(query).then((res) => setNews(res));
    }, 3000);
  };

  const ModalRedToNote = (url) => {
    setShowModal({ show: true, url: url });
  };

  return (
    <LayoutMain>
      {showModal.show ? (
        <ModalRedirection
          link={showModal.url}
          closeAction={() => {
            setShowModal({ show: false, url: "" });
          }}
        />
      ) : null}
      <div className="m-2">
        <h1 className="text-3xl font-semibold text-blueMenu text-center">
          Noticias de Liga BBVA MX
        </h1>
      </div>
      <div className="m-2">
        <h3 className="ml-10 mb-2 text-left font-semibold text-lg text-blueMenu">
          Busca noticias del equipo que desees
        </h3>
        <SelectTeam
          handleChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="m-2">
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

export default Noticias;
