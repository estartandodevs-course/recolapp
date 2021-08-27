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

  const [collect, setCollect] = useState([]);

  useEffect(() => {
    (async () => {
      const collectResponse = await getCollectByID(id);
      setCollect(collectResponse);

      if (user?.typeUser === SETTINGS.TYPE_USER.EMTREPRENEUR) {
        const collectorResponse = await getUserById(
          collectResponse?.collector_id
        );
        setUserEnd(collectorResponse);
      } else {
        setUserEnd(collectResponse?.author);
      }
    })();
  }, []);

  const hasCollector = collect.collector_id !== "";

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
      <S.DSContainerAll key={id} showModal={showModal}>
        <S.Body>
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
                office={`${userEnd?.office} a ${collect.title}`}
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
                onClick={() => history.push(`/collect-confirm/${collect?.id}`)}
              >
                Confirmar coleta
              </S.DSConfirmCollection>
              <Modal
                id={collect?.id}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <S.DSCancelCollection onClick={() => setShowModal(true)}>
                {cancelButtonName}
              </S.DSCancelCollection>
            </S.desktopContainer>
          </S.DSContainer>
        </S.Body>
        <S.tabBar />
      </S.DSContainerAll>
    </>
  );
};

export default SchedulesDetails;
