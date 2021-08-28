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
    display: none;
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
`;
export const RedirectLogin = styled.a`
  margin-top: 4px;
  color: #4f4f4f;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const ContainerWeb = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: calc(100vh - var(--headerWebHeight));
    gap: 114px;
  }
`;
export const ContainerWebLeft = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 400px;
  }
`;

export const TitleWeb = styled.p`
  @media (min-width: 768px) {
    color: var(--textColor);
    font-size: 32px;

    font-weight: 600;
  }
`;

export const Underline = styled.div`
  @media (min-width: 768px) {
    background-color: #008000;
    width: 160px;
    height: 4px;
    margin-bottom: 40px;
  }
`;

export const Presentation = styled.p`
  @media (min-width: 768px) {
    color: var(--textColor);
    font-size: 18px;
    margin-bottom: 50px;
    width: 350px;
  }
`;

export const OrderCollection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const OrdemCollectionImg = styled.img`
  @media (min-width: 768px) {
  }
`;

export const OrdemCollectionText = styled.p`
  @media (min-width: 768px) {
    color: var(--green);
    margin-left: 12px;
  }
`;

export const Questions = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const QuestionsImg = styled.img`
  @media (min-width: 768px) {
  }
`;

export const QuestionsText = styled.p`
  @media (min-width: 768px) {
    color: var(--green);
    margin-left: 12px;
  }
`;

export const ContainerWebRight = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 500px;
    width: 400px;
    background-color: #fdc595;
    border-radius: 28px;
  }
`;

export const MainRight = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const MainImage = styled.img`
  @media (min-width: 768px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export const TextMei = styled.p`
  @media (min-width: 768px) {
    color: #3f3c3c;
    width: 80%;
    font-weight: 600;
    text-align: center;
  }
`;

export const ButtonHomeWeb = styled(Button)`
  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

export const FooterWeb = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 135px;
    background-color: #2b7b2b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d9e5d9;
    font-size: 22px;
    font-weight: 700;
  }
`;
