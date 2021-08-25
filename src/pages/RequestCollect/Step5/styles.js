import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import { Button } from "../../../components/Button";

export const HeaderWebRequest = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const Body = styled.div`
  background-color: #fff8f4;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media (min-width: 768px) {
    height: calc(100vh - var(--headerWebHeight));
  }
`;

export const Title = styled.p`
  padding-top: 100px;
  color: rgba(79, 79, 79, 1);
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 30px;
    padding-top: 70px;
  }
`;

export const Ilustration = styled.img`
  width: 180px;
  height: 120px;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    width: 336px;
    height: 224px;
    margin-bottom: 10px;
  }
`;

export const ButtonFinish = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    border-radius: 12px;
    font-size: 14px;
    width: 220px;
    height: 35px;
  }
`;

export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 400px;
    border-radius: 28px;
  }
`;

export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
