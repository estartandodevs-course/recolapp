import React from "react";
import * as S from "./styles";

export const Select = () => {
  const options = [{ value: "rio", label: "Chocolate" }];

  return <S.Select options={options} />;
};
