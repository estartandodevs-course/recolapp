import styled from "styled-components";
import { Mask } from "../../components/InputMask";
import { BackButton } from "../../components/BackButtom";
import { Input } from "../../components/Input";

export const Container = styled.div`
  background-color: #fff8f4;
  height: 100vh;
  color: #4f4f4f;
  margin: 0px 30px;

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

export const MaskRegister = styled(Mask)`
  /* padding-bottom: 16px; */
  /* gap: 4px; */
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

`;
