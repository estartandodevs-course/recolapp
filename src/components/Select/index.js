import React from "react";
import Select from "react-select";
import * as S from "./styles";
// import Selecta from "../../assets/img/icons/select_arrow.svg";

export const Selectb = () => {
  const options = [{ value: "rio", label: "Chocolate" }];
  return (
    <S.Section>
      <Select options={options} />
    </S.Section>
  );
};
// teste
