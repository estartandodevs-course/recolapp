import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width};
  text-align: left;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputElement = styled.input`
  background-color: ${({ bgColor }) => bgColor};
  width: calc(100% - 10px);
  height: 45px;
  border: none;
  border-radius: 8px;
  padding-left: 10px;

  textarea:focus,
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${({ labelColor }) => labelColor};
  font-size: 12px;
  line-height: 18px;
`;
