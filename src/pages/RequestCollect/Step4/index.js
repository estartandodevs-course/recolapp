import { useContext } from "react";
import { UserContext } from "../../../contexts";

import * as S from "./styles";

const Step4 = ({ firstPage, nextPage, backPage, order, orderTimestamp }) => {
  const { user } = useContext(UserContext);

  const timestamp = new Date(parseInt(orderTimestamp));
  const dateCollect = timestamp.toLocaleDateString("pt-BR");
  const hourCollect = timestamp.toLocaleTimeString("pt-BR").slice(0, 5);

  const orderFilter = order?.filter((item) => item.status);

  const logged = user?.name || false;

  return (
    <>
      <S.HeaderWebRequest logged={logged} />
      <S.Body>
        <S.BackB handleBack={backPage} pageTitle="Veja os detalhes do pedido" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.TitlePage>Veja os detalhes do pedido:</S.TitlePage>
            <S.Infos>
              <S.MaterialsList info={orderFilter} />
              <S.InfoLocation
                street={user?.street}
                date={dateCollect}
                hour={hourCollect}
              />
            </S.Infos>
            <S.Confirmations>
              <S.ConfirmationSpan>
                Deseja confirmar o agendamento ?
              </S.ConfirmationSpan>
              <S.ButtonYes onClick={nextPage}>Sim, quero agendar</S.ButtonYes>
              <S.ButtonNo bgColor="rgba(242, 142, 54, 1)" onClick={firstPage}>
                Não, quero corrigir
              </S.ButtonNo>
            </S.Confirmations>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>

      <S.TabBarRequest />
    </>
  );
};

export default Step4;
