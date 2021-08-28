/* eslint-disable */

import styled from "styled-components";
import { transparentize, shade } from "polished";
import ReactLoading from "react-loading";

export const ButtonElement = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  cursor: ${({ loading }) => (loading === "true" ? "not-allowed" : "pointer")};
  width: ${({ width }) => width};
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
    background-color: ${({ bgColor, loading }) =>
      loading === "true" ? transparentize(0.6, bgColor) : shade(0.3, bgColor)};
  }
  &:disabled {
    background-color: ${({ bgColor }) => transparentize(0.6, bgColor)};
    cursor: not-allowed;
  }
`;

export const ButtonLoading = styled(ReactLoading)`
  display: ${({ loading }) => (loading === "true" ? "initial" : "none")};
`;
