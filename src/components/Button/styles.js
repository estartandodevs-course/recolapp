import styled from "styled-components";

export const ButtonElement = styled.button`
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  width: 300px;
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
`;
