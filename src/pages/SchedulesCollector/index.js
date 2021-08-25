import { useContext } from "react";
import { UserContext } from "../../contexts";
import { getCollectionsByUserID } from "../../services/recycleCollection.service";
import collectionsillu from "../../assets/img/illustrations/meus_agendamentos.svg";

import * as S from "./styles";

const SchedulesCollector = () => {
  const { user } = useContext(UserContext);

  // console.log("teste", user);
  const collections = getCollectionsByUserID(0);

  const logged = user?.name;
  return (
    <>
      {collections && (
        <>
          <S.Header logged={logged} />
          <S.BackSC pageTitle="Meus agendamentos" />
          <S.Body>
            <S.image src={collectionsillu} alt="collecting" />
            <S.desktopAling>
              <S.desktopContainer>
                {collections.map(({ collection_id, title }) => (
                  <S.Details
                    key={collection_id}
                    title={title}
                    onClick={() =>
                      history.push(`schedules-collections/${collection_id}`)
                    }
                  />
                ))}
              </S.desktopContainer>
            </S.desktopAling>
          </S.Body>
          <S.TabB />
        </>
      )}
    </>
  );
};
export default SchedulesCollector;
