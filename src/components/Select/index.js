import React from "react";
import * as S from "./styles";

export const Select = ({ options, onChange }) => {
  return <S.Select options={options} onChange={onChange} />;
};
