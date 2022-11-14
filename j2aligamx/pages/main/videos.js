import LayoutMain from "../../components/Main/LayoutMain";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import Elegirequipo from "../../components/Main/datosvideo/ElegirEquipo";
import ElegirJornada from "../../components/Main/calendario/ElegirJornada";
import MatchContainer from "../../components/Main/MatchContainer";
const logoAmerica =
    "https://user-images.githubusercontent.com/90345024/201499006-ad675a3a-dfd7-44bb-8092-a06563131922.png";
const Videos = () => {
  return <LayoutMain>
    <div className="flex justify-center flex-wrap position-center">
      <div className="m-6">
          <Elegirequipo />
          
      </div>
      <div className="m-6">
          <ElegirJornada />
      </div>

      <div className="m-6">
        <MatchContainer>
          <SmallContainerBox>
          
          <a href="https://www.youtube.com/watch?v=Mo0BvcnRcBQ">

          {/* <img alt = "https://i.ytimg.com/vi/Mo0BvcnRcBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTTuuJZTv8qsqAdjMdP_njCuO1cA" /> */}

          <img alt = {logoAmerica}/>
          </a>
            

          </SmallContainerBox>
          <SmallContainerBox>
              
          < a href = "https://www.youtube.com/watch?v=Mo0BvcnRcBQ">
          <img alt = "https://i.ytimg.com/vi/Mo0BvcnRcBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTTuuJZTv8qsqAdjMdP_njCuO1cA" />
          </a>
          </SmallContainerBox>
          <SmallContainerBox>
              
            

          </SmallContainerBox>
        </MatchContainer>
      </div>

      
      

    </div>
  </LayoutMain>;
};

export default Videos;
