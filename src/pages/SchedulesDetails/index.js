import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import states from "../../assets/img/icons/icon_clock.svg";

import { getUserById } from "../../services/users.service";

import { getCollectByID } from "../../services/recycleCollection.service";

import { Modal } from "../../components/Modal";
import { SETTINGS } from "../../settings";

const SchedulesDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [userEnd, setUserEnd] = useState("");

  const collectID = parseInt(id);

  const collect = getCollectByID(collectID);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(
        user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR
          ? collect?.collector_id
          : collect?.user_id
      );
      setUserEnd(response);
    };
    fetchUser();
  }, []);

  const hasCollector = collect.collector_id !== -1;

  const collectState = hasCollector
    ? "Coleta em andamento"
    : "Procura em andamento";
  const cancelButtonName = hasCollector
    ? "Cancelar coleta"
    : "Cancelar solicitação";

  const timestamp = new Date(parseInt(collect?.timestamp));
  const dateCollect = timestamp.toLocaleDateString("pt-BR");
  const hourCollect = timestamp.toLocaleTimeString("pt-BR").slice(0, 5);

  const isLogged = user?.name || false;

  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.DSContainerAll key={collectID} showModal={showModal}>
        <S.DSBackButton pageTitle="Detalhes do agendamento" />

        <S.DSContainer>
          <S.desktopContainer>
            <S.DSMaterialInfo info={collect?.material} />
            <S.DSScheduling
              street={collect?.street}
              date={dateCollect}
              hour={hourCollect}
            />
            <S.DSUserData
              hasCollector={hasCollector}
              name={userEnd?.name}
              office={`${userEnd?.typeUser} ${userEnd?.office}`}
            />
            <S.DSCollectionStates>
              {collectState}
              <S.DSCollectionStatesImg image={states} />
            </S.DSCollectionStates>

            <S.DSConfirmTitle>A coleta foi realizada ?</S.DSConfirmTitle>

            <S.DSConfirmParagraph>
              Confirme assim que a coleta for realizada e nos ajude a sabe se
              deu tudo certo.
            </S.DSConfirmParagraph>

            <S.DSConfirmCollection
              hasCollector={hasCollector}
              onClick={() => history.push("/collect-confirm")}
            >
              Confirmar coleta
            </S.DSConfirmCollection>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <S.DSCancelCollection onClick={() => setShowModal(true)}>
              {cancelButtonName}
            </S.DSCancelCollection>
          </S.desktopContainer>
        </S.DSContainer>
        <S.tabBar />
      </S.DSContainerAll>
    </>
  );
};

export default SchedulesDetails;
