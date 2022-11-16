import LayoutMain from "../../components/Main/LayoutMain";
import TeamsTablePosition from "../../components/Main/TeamsTablePosition";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import { getOverallTable } from "../api/apiFootball";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const r = getOverallTable();
    console.log(r);
  }, []);

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
};

export default Home;
