import styled from "styled-components";

import { Input } from "../../components/Input";
import BackButton from "../../components/BackButton";

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

export const ErrorMessage = styled.p`
  /* font-family: Roboto; */
  font-size: 11px;
  color: ${({ disable }) => (disable ? "#FFFFFFAA" : "#FF0000FF")};
  margin-top: 6px;
  margin-bottom: 8px;
`;
