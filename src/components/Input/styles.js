import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  text-align: left;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputElement = styled.input`
  background-color: #fde5d7;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 8px;
  padding: 0px 10px;

  textarea:focus,
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  color: #828282;
  font-size: 12px;
  line-height: 18px;
`;
