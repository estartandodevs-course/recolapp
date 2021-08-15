import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step4 = ({ firstPage, nextPage }) => {
  return (
    <>
      <S.body>
        <S.backb pageTitle="Veja os detalhes do pedido" />
        <div>
          <span>materias a serem recolhidos</span>
          <span>papel 2,4kg()</span>
          <span>vidro 3,5kg()</span>
        </div>
        <div>
          <span>endereco:()</span>
          <span>data()</span>
          <span>horario()</span>
        </div>
        <span>deseja confirmar o agendamento ?</span>
        <S.button onClick={nextPage}>Sim, quero agendar</S.button>
        <S.button onClick={firstPage}>Não, quero corrigir</S.button>
      </S.body>

      <TabBar />
    </>
  );
};

export default Step4;
