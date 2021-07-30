import React from "react";
import { ButtonElement } from "./styles";

export const Button = ({ bgColor = "#008000", children }) => {
  return <ButtonElement bgColor={bgColor}>{children}</ButtonElement>;
};
