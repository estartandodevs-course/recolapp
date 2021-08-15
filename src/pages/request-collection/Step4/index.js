import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step4 = () => {
  return (
    <S.body>
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
      <S.backb pageTitle="Veja os detalhes do pedido" />
      <S.button onClick={() => setPage(5)}>Sim, quero agendar</S.button>
      <S.button onClick={() => setPage(1)}>Não, quero corrigir</S.button>
      <TabBar />
    </S.body>
  );
};

export default Step4;
