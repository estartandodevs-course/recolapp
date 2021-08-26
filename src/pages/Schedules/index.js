import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";

import {
  getCollectionsByUserID,
  getCollectionsByCollectorID,
} from "../../services/recycleCollection.service";

import { SETTINGS } from "../../settings";

const Schedules = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const getCollections =
    user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
      ? getCollectionsByUserID
      : getCollectionsByCollectorID;

  const collections = getCollections(user?.id);

  const logged = user?.name;

  return (
    <>
      {collections && (
        <>
          <S.HeaderDesktop logged={logged} />
          <S.CollectionsContainer>
            <S.CollectionsButton pageTitle="Meus agendamentos" />
            <S.DesktopAling>
              <S.DesktopContainer>
                <S.ContainerImg>
                  <S.CollectionsImg
                    src={myCollections}
                    marginDesktop={
                      collections.length ? "50px 0 50px 0" : "100px auto 0 auto"
                    }
                  />
                </S.ContainerImg>
                {collections.length ? (
                  collections.map(({ collection_id, title, timestamp }) => {
                    const timeStamp = new Date(timestamp);

                    const date = timeStamp
                      .toLocaleDateString("pt-BR")
                      .slice(0, 5);
                    const time = timeStamp
                      .toLocaleTimeString("pt-BR")
                      .slice(0, 5);

                    const week = [
                      "Dom",
                      "Seg",
                      "Ter",
                      "Qua",
                      "Qui",
                      "Sex",
                      "Sáb",
                    ];
                    const day = timeStamp.getDay();

                    return (
                      <S.ViewSettings
                        key={collection_id}
                        title={
                          user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
                            ? title
                            : user?.name
                        }
                        date={`${week[day]}, ${date} - ${time}h`}
                        onClick={() =>
                          history.push(`schedules/${collection_id}`)
                        }
                      />
                    );
                  })
                ) : (
                  <S.NoItemsMessage>
                    Ops...
                    <br />
                    ainda não tem agendamentos!
                  </S.NoItemsMessage>
                )}
              </S.DesktopContainer>
            </S.DesktopAling>
          </S.CollectionsContainer>
          <S.MobileTabBar />
        </>
      )}
    </>
  );
};

export default Schedules;
