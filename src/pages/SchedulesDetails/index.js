import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

import * as S from "./styles";

import states from "../../assets/img/icons/icon_clock.svg";

import { getUser } from "../../services/users";

import { getCollectByID } from "../../services/collections";

import { Modal } from "../../components/Modal";

const SchedulesDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const collectID = parseInt(id);

  const collect = getCollectByID(collectID);
  const collector = getUser(collect.collector_id);
  const hasCollector = collect.collector_id !== -1;

  const collectState = hasCollector
    ? "Coleta em andamento"
    : "Procura em andamento";
  const cancelButtonName = hasCollector
    ? "Cancelar coleta"
    : "Cancelar solicitação";

  const [showModal, setShowModal] = useState(false);

  const timestamp = new Date(parseInt(collect.timestamp));
  const dateCollect = timestamp.toLocaleDateString("pt-BR");
  const hourCollect = timestamp.toLocaleTimeString("pt-BR").slice(0, 5);

  return (
    <>
      <S.DSContainerAll key={collectID} showModal={showModal}>
        <S.DSBackButton pageTitle="Detalhes do agendamento" />
        <S.DSContainer>
          <S.DSMaterialInfo info={collect?.material} />
          <S.DSScheduling
            street={collect?.street}
            date={dateCollect}
            hour={hourCollect}
          />
          <S.DSUserData
            hasCollector={hasCollector}
            name={collector?.name}
            office={`${collector?.office} a ${collect.title}`}
          />
          <S.DSCollectionStates>
            {collectState}
            <S.DSCollectionStatesImg image={states} />
          </S.DSCollectionStates>

          <S.DSConfirmTitle>A coleta foi realizada ?</S.DSConfirmTitle>

          <S.DSConfirmParagraph>
            Confirme assim que a coleta for realizada e nos ajude a sabe se deu
            tudo certo.
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
        </S.DSContainer>
        <S.DSTabBar />
      </S.DSContainerAll>
    </>
  );
};

export default SchedulesDetails;
