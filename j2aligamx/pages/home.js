import LayoutMain from "../components/Main/LayoutMain";
import TeamsTablePosition from "../components/Main/TeamsTablePosition";
import MatchContainer from "../components/Main/MatchContainer";
import SmallContainerBox from "../components/Main/SmallContainerBox";

export default function Home() {
  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-4">
          <TeamsTablePosition />
        </div>
        <div className="m-4">
          <MatchContainer>
            <SmallContainerBox>hola</SmallContainerBox>
            <SmallContainerBox>hola2</SmallContainerBox>
            <SmallContainerBox>hola3</SmallContainerBox>
            <SmallContainerBox>hola4</SmallContainerBox>
            <SmallContainerBox>hola5</SmallContainerBox>
            <SmallContainerBox>hola6</SmallContainerBox>
            <SmallContainerBox>hola7</SmallContainerBox>
            <SmallContainerBox>hola8</SmallContainerBox>
            <SmallContainerBox>hola9</SmallContainerBox>
          </MatchContainer>
        </div>
      </div>
    </LayoutMain>
  );
}
