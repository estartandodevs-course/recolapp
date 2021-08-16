import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step4 = ({ firstPage, nextPage, backPage }) => {
  return (
    <>
      <S.body>
        <S.backb handleBack={backPage} pageTitle="Veja os detalhes do pedido" />
        <S.infos>
          <S.materialsList />
          <S.infolocation />
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

      <TabBar />
    </>
  );
};

export default Step4;
