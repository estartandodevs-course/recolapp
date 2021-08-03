import React from "react";

import * as S from "./styles";

const Mask = ({ width = "300px", label, mask, value, onChange, ...rest }) => {
  return (
    <>
      <S.Container width={width}>
        <S.Label>{label}</S.Label>
        <S.InputMask mask={mask} value={value} onChange={onChange} {...rest} />
      </S.Container>
    </>
  );
};

export { Mask };
