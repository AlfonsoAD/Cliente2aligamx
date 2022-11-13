import LayoutMain from "../components/Main/LayoutMain";
import SelectJornada from "../components/Main/SelectJornada";
import MatchContainer from "../components/Main/MatchContainer";
import SmallContainerBox from "../components/Main/SmallContainerBox";
import TableResults from "../components/Main/TableResults";

export default function Home() {
  return (
    <LayoutMain>
      <div className="flex justify-center flex-wrap">
        <div className="m-4 w-4/5">
          <SelectJornada />
          <MatchContainer>
            <div className="grid justify-items-stretch">
            <SmallContainerBox className="m-4 w-1/3">hola</SmallContainerBox>
            <SmallContainerBox className="m-4 w-1/3">hola</SmallContainerBox>
            <SmallContainerBox>
            <h1>Jornada 1</h1>
            <p>01/07      21:05</p>
            <div className="justify-items-stretch">
              <img 
              src="https://user-images.githubusercontent.com/90345024/201499006-ad675a3a-dfd7-44bb-8092-a06563131922.png"
              width="20" 
              height="20"/>
              <p className="m-4 w-1/3">VS</p>
              <img 
              src="https://user-images.githubusercontent.com/90345024/201499006-ad675a3a-dfd7-44bb-8092-a06563131922.png"
              width="20" 
              height="20"/>
            </div>
            <p>2 - 4</p>
            </SmallContainerBox>
            </div>
            <SmallContainerBox>hola</SmallContainerBox>
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
            <TableResults/>  
        </div>
      </div>
    </LayoutMain>
  );
}