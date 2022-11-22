import LayoutMain from "../../components/Main/LayoutMain";
import TeamsTablePosition from "../../components/Main/TeamsTablePosition";
import MatchContainer from "../../components/Main/MatchContainer";
import SmallContainerBox from "../../components/Main/SmallContainerBox";
import MatchsResults from "../../components/Main/MatchsResults";
import { getOverallTable } from "../api/apiFootball";
import { getNewsSportsMx } from "../api/apiNews";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

const Home = () => {
  const [table, setTable] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    petitions();
  }, []);

  const petitions = () => {
    getOverallTable().then((res) => setTable(JSON.parse(res)));
    getNewsSportsMx().then((res) => setNews(res));
  };

  return (
    <LayoutMain>
      <Modal />;
      <div className="flex justify-center flex-wrap">
        <TeamsTablePosition data={table} />
      </div>
    </LayoutMain>
  );
};

export default Home;
