import styled from "styled-components";
import InputMaskBase from "react-input-mask";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: 67px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  color: #828282;
  font-size: 12px;
  line-height: 18px;
`;

export const InputMask = styled(InputMaskBase)`
  background-color: #fde5d7;
  height: 45px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  padding-left: 10px;
`;
