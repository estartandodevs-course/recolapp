import styled from "styled-components";

import { Input } from "../../components/Input";
import BackButton from "../../components/BackButton";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  color: #4f4f4f;
  padding: 0px 30px;

  @media (min-width: 768px) {
    background: #ffffff;
    width: 326px;
    height: 476px;
    border: 2px solid #3cb43c;
    border-radius: 28px;
    color: #4f4f4f;
  }
`;

export const BackButtonLogin = styled(BackButton)`
  margin: 33px 0px 45px 23px;
  align-self: flex-start;

  @media (min-width: 768px) {
    margin: 50px 0px 55px 100px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 37px auto auto auto;
`;

export const InputEmail = styled(Input)`
  margin-top: 15px;
`;

export const InputPassword = styled(Input)`
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 33px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 11px;
  color: ${({ disable }) => (disable ? "#FFFFFFAA" : "#FF0000FF")};
  margin-top: 6px;
  margin-bottom: 8px;
`;
