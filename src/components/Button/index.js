import React from "react";
import { ButtonElement } from "./styles";

const Button = ({
  onClick,
  bgColor = "#008000",
  children,
  disable,
  width = "100%",
  ...rest
}) => {
  return (
    <ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      width={width}
      {...rest}
    >
      {children}
    </ButtonElement>
  );
};

export { Button };
