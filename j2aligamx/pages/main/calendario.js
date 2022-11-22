import LayoutMain from "../../components/Main/LayoutMain";
import MatchContainer from "../../components/Main/MatchContainer";
import ElegirJornada from "../../components/Main/calendario/ElegirJornada";
import ProxPartido from "../../components/Main/calendario/ProxPartido";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import ElegirEquipo from "../../components/Main/datosvideo/ElegirEquipo";

const Calendario = () => {
  return <LayoutMain>
    <div className="flex justify-center flex-wrap position-center">
      <div className="m-4">
          <ElegirJornada />
         
      </div>
      
      <div className="m-4">
        <ElegirEquipo />
      </div>

      <div className="m-4">
        <MatchContainer>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
          <SmallContainerBox>
            <ProxPartido />
          </SmallContainerBox>
        </MatchContainer>
      </div>
      

    </div>
  </LayoutMain>;
};

export default Calendario;
