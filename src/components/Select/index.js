import React from "react";
import * as S from "./styles";

export const Select = ({ label, width = "100%", options, onChange }) => {
  return (
    <>
      <S.Container width={width}>
        <S.Label>{label}</S.Label>
        <S.Select options={options} onChange={onChange} />
      </S.Container>
    </>
  );
};
