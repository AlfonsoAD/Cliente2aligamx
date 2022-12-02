import LayoutMain from "../../components/Main/LayoutMain"
import MatchContainer from "../../components/Main/MatchContainer";
import { useState, useEffect } from "react";
import SelectTeam from "../../components/Main/datosvideo/SelectTeam";
import { searchVideos } from "../api/apiYoutube";
import LargeContainerBox from "../../components/Main/LargeContainerBox"
import VideoContainer from "../../components/Main/datosvideo/VideoContainer";
const Videos = () => {
  const [query, setQuery] = useState("Futbol Liga MX");
  const [dataVideos, setInfoVideos] = useState([]);

  const gettingVideos = () =>{
    console.log(query);
    searchVideos(query).then(data => setInfoVideos(data));
  }

  useEffect(()=>{
    gettingVideos();
  },[query]);

  return( 
    <LayoutMain>  
      <div>
        <SelectTeam
        handleChange={(e) => {
          setQuery(e.target.value)
        }}/>
      </div>
        <div className="m-4">
          <MatchContainer>
            {dataVideos.map((item, index) => (index < 5 ? 
            <LargeContainerBox
            key={index}>
              <VideoContainer
              info={item.url}/>
              <h1>{item.title}</h1>
              <p>Autor:</p>
              <a href={item.author.url}>{item.author.name}</a></LargeContainerBox> 
            : console.log("No lo necesito")))}
          </MatchContainer>
        </div>
    </LayoutMain>
  )
};

export default Videos;
