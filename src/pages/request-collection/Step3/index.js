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
        <S.dateSection>
          <S.datediv>
            <S.dateSpan>Data:</S.dateSpan>
            <S.inputDate type="date" min="2021-09-01" max="2022-01-01" />
          </S.datediv>
          <S.hourdiv>
            <S.hourSpan>Hora:</S.hourSpan>
            <S.inputHour type="time" min="08:00" max="17:00" />
          </S.hourdiv>
        </S.dateSection>
        <S.button onClick={nextPage}>Continuar</S.button>
      </S.body>
      <TabBar />
    </>
  );
};

export default Step3;
