import React from "react";

import * as S from "./styles";

const Mask = ({ width = "100%", label, mask, value, onChange, ...rest }) => {
  return (
    <>
      <S.Container {...rest} width={width}>
        <S.Label>{label}</S.Label>
        <S.InputMask mask={mask} value={value} onChange={onChange} />
      </S.Container>
    </>
  );
};

export { Mask };
