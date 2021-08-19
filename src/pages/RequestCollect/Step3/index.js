import { useEffect, useState } from "react";
import { TabBar } from "../../../components/TabBar";
import * as S from "./styles";

const Step3 = ({ nextPage, backPage, setOrderTimestamp }) => {
  const [dateFinish, setDateFinish] = useState("");
  const [hoursFinish, setHoursFinish] = useState("");
  const [disable, setDisable] = useState(true);

  const inputs = {
    DATE: "date",
    HOURS: "hours",
  };

  useEffect(() => {
    const result = new Date(`${dateFinish} ${hoursFinish}`).getTime();
    setOrderTimestamp(result);
    setDisable(dateFinish === "" || hoursFinish === "");
  }, [dateFinish, hoursFinish]);

  const onChange = (event, input) => {
    switch (input) {
      case inputs.DATE: {
        setDateFinish(event.target.value);
        break;
      }
      case inputs.HOURS: {
        setHoursFinish(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

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
            <S.inputDate
              onChange={(e) => onChange(e, inputs.DATE)}
              input={inputs.DATE}
              type="date"
              min="2021-09-01"
              max="2022-01-01"
            />
          </S.datediv>
          <S.hourdiv>
            <S.hourSpan>Hora:</S.hourSpan>
            <S.inputHour
              onChange={(e) => onChange(e, inputs.HOURS)}
              type="time"
              min="08:00"
              max="17:00"
            />
          </S.hourdiv>
        </S.dateSection>
        <S.button disable={disable} onClick={nextPage}>
          Continuar
        </S.button>
      </S.body>
      <TabBar />
    </>
  );
};

export default Step3;
