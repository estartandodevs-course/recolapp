import React from "react";

import * as S from "./styles";

const Button = ({
  onClick,
  bgColor = "#008000",
  children,
  disable,
  width = "100%",
  loading,
  type = "bubbles",
  color = "#f28e36",
  ...rest
}) => {
  const textButton = loading ? "" : children;
  return (
    <S.ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      width={width}
      loading={`${loading}`}
      {...rest}
    >
      {textButton}
      <S.ButtonLoading
        type={type}
        color={color}
        loading={`${loading}`}
        height={80}
        width={80}
      />
    </S.ButtonElement>
  );
};

export { Button };
