import React from "react";

import * as S from "./styles";

function Scheduling({
  street = "Rua Osvaldo Cruz, 84",
  date = "04 de agosto de 2021",
  hour = "15:00",
  ...rest
}) {
  return (
    <>
      <S.SchedulingContainer {...rest}>
        <S.SchedulingDiv>
          <S.SchedulingKey>Endereço:</S.SchedulingKey>
          <S.SchedulingValue>{street}</S.SchedulingValue>
        </S.SchedulingDiv>
        <S.SchedulingDiv>
          <S.SchedulingKey>Data:</S.SchedulingKey>
          <S.SchedulingValue>{date}</S.SchedulingValue>
        </S.SchedulingDiv>
        <S.SchedulingDiv>
          <S.SchedulingKey>Horário:</S.SchedulingKey>
          <S.SchedulingValue>{hour}</S.SchedulingValue>
        </S.SchedulingDiv>
      </S.SchedulingContainer>
    </>
  );
}

export { Scheduling };
