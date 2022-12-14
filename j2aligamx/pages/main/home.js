//BY JESÚS ALFONSO ANDRADE DOMÍNGUEZ 18100149
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import TeamsTablePosition from "../../components/Main/TeamsTablePosition";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import ModalEquipos from "../../components/Main/ModalEquipos";
import ModalRedirection from "../../components/Main/ModalRedirection";
//Apis
import { getOverallTable, getTopScorers } from "../api/apiFootball";
import { getNewsSports } from "../api/apiNews";
//Contextos
import { useUserPreferencesContext } from "../../components/Context/UserPreferencesProvider";
//react, next
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const { userPreferences } = useUserPreferencesContext();
  const { idFavTeam, teamName } = userPreferences;
  const [table, setTable] = useState(null);
  const [news, setNews] = useState(null);
  const [scorers, setScorers] = useState([]);
  const [showModal, setShowModal] = useState({ show: false, url: "" });

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    setTimeout(() => {
      getOverallTable()
        .then((res) => setTable(res))
        .catch((err) => console.log(err));
      getTopScorers()
        .then((res) => setScorers(res))
        .catch((err) => console.log(err));
      getNewsSports()
        .then((res) => setNews(res))
        .catch((err) => console.log(err));
    }, 3000);
  };

  const topScorers = scorers.filter(
    (value) => value.statistics[0].goals.total > 7
  );

  // const newsTeamFav = () => {
  //   getNewsSportsMx(teamName)
  //     .then((res) => setNews(res))
  //     .catch((err) => console.log(err));
  // };

  // const newsLigaMx = () => {
  //   getNewsSportsMx()
  //     .then((res) => setNews(res))
  //     .catch((err) => console.log(err));
  // };

  const ModalRedToNote = (url) => {
    setShowModal({ show: true, url: url });
  };

  return (
    <LayoutMain>
      <div className="m-2">
        <h1 className="text-3xl font-semibold text-blueMenu text-center">
          Bienvenido a J2A LIGA MX
        </h1>
      </div>
      {teamName === "" ? <ModalEquipos /> : null}
      {showModal.show ? (
        <ModalRedirection
          link={showModal.url}
          closeAction={() => {
            setShowModal({ show: false, url: "" });
          }}
        />
      ) : null}
      {/* {teamName != "" ? newsTeamFav() : newsLigaMx()} */}
      <div className="flex justify-center flex-wrap">
        <TeamsTablePosition data={table} />
        <div className="m-1">
          <h1 className="text-2xl font-bold text-blueMenu text-start ml-8">
            GOLEADORES DEL TORNEO
          </h1>
          <MatchContainer>
            {topScorers == null ? console.log("Hola2") : null}
            {topScorers &&
              topScorers.length > 0 &&
              topScorers.map((value, index) => {
                return (
                  <SmallContainerBox key={`3.${index}`} id={`4.${index}`}>
                    <div className="flex justify-between">
                      <h1 className="text-md font-semibold">{`Jugador: ${value.player.name}`}</h1>
                      <h2 className="text-md font-semibold">{`Goles: ${value.statistics[0].goals.total}`}</h2>
                      <Image
                        key={`5.${index}`}
                        src={value.player.photo}
                        height="58"
                        width="58"
                        alt="Foto del jugador"
                        className="m-2"
                      />
                      <h1 className="text-md font-semibold">{`Equipo: ${value.statistics[0].team.name}`}</h1>
                      <Image
                        key={`6.${index}`}
                        src={value.statistics[0].team.logo}
                        height="58"
                        width="58"
                        alt="Logo del equipo"
                        className="m-2"
                      />
                    </div>
                  </SmallContainerBox>
                );
              })}
          </MatchContainer>
        </div>
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
