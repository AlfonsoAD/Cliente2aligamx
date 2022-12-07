//BY CESAR CASTRO SALAZAR 18100157
//Componentes
import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import LargeContainerBox from "../../components/Main/LargeContainerBox";
import VideoContainer from "../../components/Main/datosvideo/VideoContainer";
import SelectTeam from "../../components/Main/SelectTeam";
//Contextos
import { useUserPreferencesContext } from "../../components/Context/UserPreferencesProvider";
//react
import { useState, useEffect } from "react";
//Api
import { searchVideos } from "../api/apiYoutube";

const Videos = () => {
  const { userPreferences } = useUserPreferencesContext();
  const { teamName } = userPreferences;
  console.log(teamName)
  //Estado de para saber cual sera la quiery a enviar al endpoint de la api
  //Iniciamos el estado con el equipo elegido por defecto
  const [query, setQuery] = useState('');
  //Estado para almacenar la respuesta de la Api
  const [dataVideos, setInfoVideos] = useState([]);
  //Metodo para consultar la api
  const gettingVideos = (q) => {
    console.log(q);
    searchVideos(`LIGA MX ${q}`).then((data) => setInfoVideos(data));
  };
  //useEffect que se ejecuta cada vez que query cambi su estado
  useEffect(() => {
    setTimeout(() => {
      console.log(query);
      gettingVideos(query);
      console.log(dataVideos);
    },2000)
  }, [query]);
  //{teamName != "" ? gettingVideos(`Liga+MX+${teamName}`): console.log("Falso")}
  return (
    <LayoutMain>
      <div>
        <SelectTeam
          handleChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {teamName == query ? <h4>VIDEOS DE TU EQUIPO FAVORITO</h4> : null}
      <div className="m-4">
        <MatchContainer>
          {dataVideos.map((item, index) =>
            index < 9 ? (
              <LargeContainerBox key={index}>
                <VideoContainer info={item.url ? item.url : ""} />
                <h1>{item.title ? item.title : ""}</h1>
                <img src={item.image ? item.image : ""} />
                <p>Autor:</p>
                <a href={item.author?.url ? item.author.url : ""}>
                  {item.author?.name ? item.author.name : ""}
                </a>
              </LargeContainerBox>
            ) : (
              console.log("No lo necesito")
            )
          )}
        </MatchContainer>
      </div>
    </LayoutMain>
  );
};

export default Videos;
