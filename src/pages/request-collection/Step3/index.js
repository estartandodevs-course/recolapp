import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step3 = ({ nextPage, backPage }) => {
  return (
    <>
      <S.body>
        <S.backb
          handleBack={backPage}
          pageTitle="Escolha a data e o horário para a coleta"
        />
        <div>
          <span>Data</span>
          <input type="date" />
        </div>
        <div>
          <span>Hora</span>
          <input type="time" min="08:00" max="17:00" />
        </div>
        <S.button as="label" htmlFor="teste" onClick={nextPage}>
          Continuar
        </S.button>
        <input id="teste" type="submit" />
      </S.body>
      <TabBar />
    </>
  );
};

export default Step3;
