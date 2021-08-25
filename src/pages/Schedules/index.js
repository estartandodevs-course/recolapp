import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import { getCollectionsByUserID } from "../../services/recycleCollection.service";

const Schedules = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const collections = getCollectionsByUserID(user?.id);

  const logged = user?.name;

  return (
    <>
      {collections && (
        <>
          <S.HeaderDesktop logged={logged} />
          <S.CollectionsContainer>
            <S.CollectionsButton pageTitle="Meus agendamentos" />
            <S.CollectionsImg src={myCollections} />
            {collections.map(({ collection_id, title, timestamp }) => {
              const timeStamp = new Date(timestamp);

              const date = timeStamp.toLocaleDateString("pt-BR").slice(0, 5);
              const time = timeStamp.toLocaleTimeString("pt-BR").slice(0, 5);

              const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
              const day = timeStamp.getDay();

              return (
                <S.ViewSettings
                  key={collection_id}
                  title={title}
                  date={`${week[day]}, ${date} - ${time}h`}
                  onClick={() => history.push(`schedules/${collection_id}`)}
                />
              );
            })}
          </S.CollectionsContainer>
          <S.MobileTabBar />
        </>
      )}
    </>
  );
};

export default Schedules;
