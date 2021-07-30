import styled from "styled-components";
import { transparentize, shade } from "polished";

export const ButtonElement = styled.button`
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  width: ${(props) => props.width};
  height: 51px;
  border: none;
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  &:hover {
    background-color: ${(props) => shade(0.3, props.bgColor)};
  }
  &:disabled {
    background-color: ${(props) => transparentize(0.6, props.bgColor)};
    cursor: not-allowed;
  }
`;
