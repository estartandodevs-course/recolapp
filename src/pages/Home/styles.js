import styled from "styled-components";

import { Button } from "../../components/Button";
import { BurguerMenu } from "../../components/BurguerMenu";
import { HeaderWeb } from "../../components/HeaderWeb";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
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
`;
export const Title = styled.h3`
  padding-top: 71px;
`;

export const Img = styled.img`
  margin-top: 84px;
`;

export const ButtonHome = styled(Button)`
  margin-top: 106px;
`;

export const Pragraph = styled.p`
  margin-top: 8px;
  color: #4f4f4f;
  font-size: 14px;
`;
export const RedirectLogin = styled.a`
  margin-top: 4px;
  color: #4f4f4f;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
