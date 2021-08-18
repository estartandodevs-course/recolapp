import styled from "styled-components";

import { Button } from "../../components/Button";
import { BurguerMenu } from "../../components/BurguerMenu";
import { HeaderWeb } from "../../components/HeaderWeb";

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const HeaderMobile = styled(BurguerMenu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  background-color: var(--lightGray);
  color: #4f4f4f;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: var(--defaultScreenWebWidth);
  }
`;
export const Title = styled.h3`
  margin-top: 70px;
`;

export const Img = styled.img`
  margin-top: 80px;
`;

export const ButtonHome = styled(Button)`
  margin-top: 50px;
`;

export const Pragraph = styled.p`
  margin-top: 8px;
  color: #4f4f4f;
  font-size: 14px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const RedirectLogin = styled.a`
  margin-top: 4px;
  color: #4f4f4f;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  @media (min-width: 768px) {
    display: none;
  }
`;
