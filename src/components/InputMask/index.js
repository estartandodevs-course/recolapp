import React from "react";

import * as S from "./styles";

const Mask = ({ width = "300px", label, mask, value, onChange }) => {
  return (
    <>
      <S.Container width={width}>
        <S.Label>{label}</S.Label>
        <S.InputMask mask={mask} value={value} onChange={onChange} />
      </S.Container>
    </>
  );
};

export { Mask };
