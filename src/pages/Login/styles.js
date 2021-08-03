import styled from "styled-components";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButtom";

export const Container = styled.div`
  height: 100vh;
  color: #4f4f4f;
  padding: 0px 30px;
`;

export const BackButtonLogin = styled(BackButton)`
  margin-top: 33px;
  margin-bottom: 45px;
`;

export const Img = styled.img`
  width: 100%;
  margin: auto;
`;

export const InputEmail = styled(Input)`
  margin-top: 15px;
`;

export const InputPassword = styled(Input)`
  margin-top: 24px;
`;

export const ButtonEnter = styled(Button)`
  margin: 24px 0px;
`;
