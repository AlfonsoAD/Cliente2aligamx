import LayoutMain from "../components/Main/LayoutMain";
import TeamsTablePosition from "../components/Main/TeamsTablePosition";
import MatchContainer from "../components/Main/MatchContainer";
import SmallContainerBox from "../components/Main/SmallContainerBox";
import MatchsResults from "../components/Main/MatchsResults";

export default function Home() {
  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-4">
          <TeamsTablePosition />
        </div>
        <div className="m-4">
          <MatchContainer>
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
      </div>
    </LayoutMain>
  );
}
