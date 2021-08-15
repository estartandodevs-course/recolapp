import { useHistory } from "react-router-dom";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import { TabBar } from "../../components/TabBar";
import { getCollectionsByUserID } from "../../services/collections";

const Schedules = () => {
  const history = useHistory();

  const collections = getCollectionsByUserID(0);

  return (
    <>
      <S.CollectionsContainer>
        <S.CollectionsButton pageTitle="Meus agendamentos" />
        <S.CollectionsImg src={myCollections} />
        {collections.map((collect) => (
          <S.ViewSettings
            key={collect.collection_id}
            title={collect.title}
            onClick={() => history.push(`schedules/${collect.collection_id}`)}
          />
        ))}
      </S.CollectionsContainer>
      <TabBar />
    </>
  );
};

export default Schedules;
