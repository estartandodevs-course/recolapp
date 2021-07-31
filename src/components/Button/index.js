import React from "react";
import { ButtonElement } from "./styles";

const Button = ({ bgColor, children, disable, width = "100%" }) => {
  return (
    <ButtonElement bgColor={bgColor} disabled={disable} width={width}>
      {children}
    </ButtonElement>
  );
};

export { Button };
