import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import { getNewsSportsMx, getNewsSportsMx2 } from "../api/apiNews";
import { useEffect, useState } from "react";

const Noticias = () => {
  const [news2, setNews2] = useState([]);

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    setTimeout(() => {
      getNewsSportsMx2().then((res) => setNews2(res));
    }, 3000);
  };

  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-2">
          <h1 className="text-2xl font-bold text-blueMenu text-start ml-8">
            NOTICIAS
          </h1>
          <MatchContainer>
            {news2 == null ? console.log("hola") : null}
            {news2 &&
              news2.length > 0 &&
              news2.map((value, index) => {
                try {
                  return (
                    <SmallContainerBox key={index} id={`1.${index}`}>
                      <div className="flex flex-wrap justify-center items-center m-2">
                        <h1
                          key={`_${index}`}
                          className="text-md font-bold text-black text-center m-2"
                        >
                          {value.name}
                        </h1>
                        <img
                          key={`0${index}`}
                          src={value.image.thumbnail.contentUrl}
                          alt="Imagen de la noticia"
                        />
                        <p className="text-sm font-semibold m-1">
                          {value.description}
                        </p>
                        <p className="text-sm font-bold">{`Fuente: ${value.provider[0].name}`}</p>
                      </div>
                    </SmallContainerBox>
                  );
                } catch (err) {
                  return (
                    <div className="flex flex-wrap justify-center items-center">
                      <SmallContainerBox key={index} id={`1.${index}`}>
                        <h1
                          key={`_${index}`}
                          className="text-md font-bold text-black text-center m-2"
                        >
                          {value.name}
                        </h1>
                      </SmallContainerBox>
                    </div>
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
