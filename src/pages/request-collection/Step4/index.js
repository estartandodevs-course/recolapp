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
      <S.body>
        <S.backb handleBack={backPage} pageTitle="Veja os detalhes do pedido" />
        <S.infos>
          <S.materialsList info={orderFilter} />
          <S.infolocation
            street={user?.street}
            date={dateCollect}
            hour={hourCollect}
          />
        </S.infos>
        <S.confirmations>
          <S.confirmationspan>
            Deseja confirmar o agendamento ?
          </S.confirmationspan>
          <S.button onClick={nextPage}>Sim, quero agendar</S.button>
          <S.button bgColor="rgba(242, 142, 54, 1)" onClick={firstPage}>
            Não, quero corrigir
          </S.button>
        </S.confirmations>
      </S.body>

      <S.TabBarRequest />
    </>
  );
};

export default Step4;
