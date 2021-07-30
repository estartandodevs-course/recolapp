import React from "react";
import * as S from "./styles";

export const Button = ({
  children,
  color = "green",
  backgroundColor = "green",
}) => {
  return (
    <S.ButtonElement backgroundColor={backgroundColor} className={color}>
      {children}
    </S.ButtonElement>
  );
};
