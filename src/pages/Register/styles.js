import styled from "styled-components";

import { Mask } from "../../components/InputMask";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/CheckBox";

export const Container = styled.div`
  background-color: var(--lightGray);
  color: var(--textColor);
  padding: 0px 30px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BackButtonRegister = styled(BackButton)`
  margin-top: 33px;
  margin-left: 0;
  margin-bottom: 25px;
`;

export const FormContainer = styled.form`
  height: 100%;
`;

export const InputRegister = styled(Input)`
  gap: 4px;
  padding-bottom: 16px;
`;

export const MaskCertification = styled(Mask)`
  padding-bottom: 16px;
`;

export const MaksCellphone = styled(Mask)`
  padding-bottom: 16px;
`;

export const MaskCep = styled(Mask)`
  width: 138px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const SelectStates = styled(Select)`
  width: 138px;
`;

export const SelectTypeUser = styled(Select)`
  width: 114px;
  margin-bottom: 16.5px;
`;

export const CheckboxRegister = styled(Checkbox)`
  margin-top: 16.5px;
  margin-bottom: 20px;
`;

export const ButtonRegister = styled(Button)`
  margin-bottom: 51px;
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: ${({ disable }) => (disable ? "#FF0000FF" : "#FFFFFFAA")};
  margin-top: 6px;
  margin-bottom: 8px;
`;
