import React from "react";
import * as S from "./styles";

export const Select = ({
  label,
  width = "100%",
  options,
  onChange,
  ...rest
}) => {
  const customStyles = {
    menuList: (base) => ({
      ...base,
      height: "100px",

      "::-webkit-scrollbar": {
        width: "0",
      },
    }),
    singleValue: () => ({
      fontWeight: "400",
      color: "#90b78f",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "var(--inputBackground)",
      "&:hover": {
        color: "#90b78f",
        backgroundColor: "#f3780c",
      },
    }),
  };
  return (
    <>
      <S.Container {...rest} width={width}>
        <S.Label>{label}</S.Label>
        <S.Select styles={customStyles} options={options} onChange={onChange} />
      </S.Container>
    </>
  );
};
