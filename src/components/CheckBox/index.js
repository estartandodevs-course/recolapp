import React from "react";
import * as S from "./styles";

const Checkbox = ({ label, type = "checkboox", id, onChange, ...rest }) => {
  return (
    <>
      <S.CheckboxContainer {...rest}>
        <S.InputCheck type={type} id={id}></S.InputCheck>
        <S.Label>{label}</S.Label>
      </S.CheckboxContainer>
    </>
  );
};

export { Checkbox };
