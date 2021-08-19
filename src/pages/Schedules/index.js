import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import { getCollectionsByUserID } from "../../services/collections";

const Schedules = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const collections = getCollectionsByUserID(user.id);

  const logged = user?.name;

  return (
    <>
      <S.HeaderDesktop logged={logged} />
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
      <S.MobileTabBar />
    </>
  );
};

export default Schedules;
