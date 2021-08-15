import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step3 = () => {
  return (
    <S.body>
      <S.backb pageTitle="Escolha a data e o horário para a coleta" />
      <div>
        <span>Data</span>
        <input type="date"></input>
      </div>
      <div>
        <span>Hora</span>
        <input type="date" type="time" min="08:00" max="17:00"></input>
      </div>
      <S.button onClick={() => setPage(4)}>Continuar</S.button>
      <TabBar />
    </S.body>
  );
};

export default Step3;
