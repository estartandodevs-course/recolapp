import { useEffect, useState, useContext } from "react";

import * as S from "./styles";

import { UserContext } from "../../../contexts";

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

  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  return (
    <>
      <S.HeaderWebRequest logged={logged} />
      <S.Body>
        <S.BackB
          handleBack={backPage}
          pageTitle="Escolha a data e o horário para a coleta"
        />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.ContainerMain>
              <S.DateSection>
                <S.DateDiv>
                  <S.DateSpan>Data:</S.DateSpan>
                  <S.InputDate
                    onChange={(e) => onChange(e, inputs.DATE)}
                    input={inputs.DATE}
                    type="date"
                    min="2021-10-09"
                    max="2022-01-01"
                  />
                </S.DateDiv>
                <S.HourDiv>
                  <S.HourSpan>Hora:</S.HourSpan>
                  <S.InputHour
                    onChange={(e) => onChange(e, inputs.HOURS)}
                    type="time"
                    min="08:00"
                    max="17:00"
                  />
                </S.HourDiv>
              </S.DateSection>
              <S.ButtonConfirm disable={disable} onClick={nextPage}>
                Continuar
              </S.ButtonConfirm>
            </S.ContainerMain>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarRequest />
    </>
  );
};

export default Step3;
