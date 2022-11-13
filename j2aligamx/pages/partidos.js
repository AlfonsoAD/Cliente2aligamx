import LayoutMain from "../components/Main/LayoutMain";
import SelectJornada from "../components/Main/SelectJornada";
import MatchContainer from "../components/Main/MatchContainer";
import SmallContainerBox from "../components/Main/SmallContainerBox";
import TableResults from "../components/Main/TableResults";

export default function Home() {
  return (
    <LayoutMain>
      <div className="flex justify-centerflex-wrap">
        <div className="m-4 w-4/5">
          <SelectJornada />
          <MatchContainer>
            <SmallContainerBox className="m-4 w-1/3">hola</SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">hola</SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">hola</SmallContainerBox>
            <SmallContainerBox>hola2</SmallContainerBox>
            <SmallContainerBox>hola3</SmallContainerBox>
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
        <div className="m-2 w-1/5">
          <TableResults />
        </div>
      </div>
    </LayoutMain>
  );
}
