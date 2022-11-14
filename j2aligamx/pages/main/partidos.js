import LayoutMain from "../../components/Main/LayoutMain";
import SelectJornada from "../../components/Main/SelectJornada";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import TableResults from "../../components/Main/TableResults";
import MatchsResults from "../../components/Main/MatchsResults";
import ModalDetail from "../../components/Main/ModalDetail";
const Partidos = () => {
  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-4 w-3/5">
          <SelectJornada />
          <MatchContainer>
            <SmallContainerBox className="m-4 w-1/3">
                <MatchsResults/>{" "}
                <ModalDetail/>
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
        <div className="m-2 w-1/5">
          <TableResults />
        </div>
      </div>
    </LayoutMain>
  );
};

export default Partidos;
