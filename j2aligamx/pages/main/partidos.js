import LayoutMain from "../../components/Main/LayoutMain";
import SelectJornada from "../../components/Main/SelectJornada";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";

const Partidos = () => {
  return (
    <LayoutMain>
        <div className="m-4">
          <SelectJornada />
          <MatchContainer>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults/>{" "}
            </SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
            <SmallContainerBox>
                <MatchsResults />{" "}
            </SmallContainerBox>
          </MatchContainer>
        </div>
    </LayoutMain>
  );
};

export default Partidos;
