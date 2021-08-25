import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { MaterialInfo } from "../../../components/CardMaterialInfo";
import { Scheduling } from "../../../components/Scheduling";
import { TabBar } from "../../../components/TabBar";

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
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const BackB = styled(BackButton)`
  padding-top: 17px;
  margin: 0 13px 8px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    padding: 40px 80px;
    background-color: #ffffff;
    border: solid 2px #3cb43c;
    border-radius: 28px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const TitlePage = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    color: var(--textColor);
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ButtonYes = styled(Button)`
  width: 300px;

  @media (min-width: 768px) {
    border-radius: 12px;
    font-size: 14px;
    width: 220px;
    height: 35px;
  }
`;
export const ButtonNo = styled(Button)`
  width: 300px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    border-radius: 12px;
    font-size: 14px;
    width: 220px;
    height: 35px;
  }
`;
export const Infos = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`;
export const MaterialsList = styled(MaterialInfo)`
  width: 300px;
`;

export const InfoLocation = styled(Scheduling)`
  width: 300px;
  height: 100px;
`;

export const Confirmations = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 17px;
  flex-direction: column;
  align-items: center;
`;

export const ConfirmationSpan = styled.span`
  color: rgba(79, 79, 79, 1);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  max-width: 200px;
`;

export const TabBarRequest = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
