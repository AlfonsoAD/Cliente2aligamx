import LayoutMain from "../../components/Main/LayoutMain"
import MatchContainer from "../../components/Main/MatchContainer";
import { useState, useEffect } from "react";
import Elegirequipo from "../../components/Main/datosvideo/ElegirEquipo";
import { searchVideos } from "../api/apiYoutube";
import LargeContainerBox from "../../components/Main/LargeContainerBox"
const Videos = () => {
  const [query, setQuery] = useState("Futbol Liga MX");
  const [dataVideos, setInfoVideos] = useState([]);

  const gettingVideos = () =>{
    searchVideos(query).then(data => setInfoVideos(data));
    console.log(dataVideos);
  }

  useEffect(()=>{
    console.log(query)
    gettingVideos();
  },[query]);

  return( 
    <LayoutMain>  
      <div>
        <Elegirequipo
        handleChange={(e) => {
          setQuery(e.target.value)
        }}/>
      </div>
        <div className="m-4">
          <MatchContainer>
            {dataVideos.map((item, index) => (index < 5 ? 
            <LargeContainerBox
            key={index}><h1>{item.video.title}</h1></LargeContainerBox> 
            : console.log("No lo necesito")))}
          </MatchContainer>
        </div>
    </LayoutMain>
  )
};

export default Videos;
