import LayoutMain from "../../components/Main/LayoutMain";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import Elegirequipo from "../../components/Main/datosvideo/ElegirEquipo";
import ElegirJornada from "../../components/Main/calendario/ElegirJornada";
import MatchContainer from "../../components/Main/MatchContainer";
import { useState, useEffect } from "react/cjs/react.production.min";

const Videos = () => {
  return <LayoutMain>
    <div className="flex justify-center flex-wrap position-center">

      <div className="m-6">
        <MatchContainer>
          
        </MatchContainer>
      </div>

      
      

    </div>
  </LayoutMain>;
};

export default Videos;
