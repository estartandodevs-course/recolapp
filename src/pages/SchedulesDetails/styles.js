import styled from "styled-components";

import BackButton from "../../components/BackButton";
import { MaterialInfo } from "../../components/CardMaterialInfo";
import { Scheduling } from "../../components/Scheduling";
import { UserData } from "../../components/UserData";
import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";
import { HeaderWeb } from "../../components/HeaderWeb";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;
export const DSContainerAll = styled.div`
  position: ${({ showModal }) => (showModal ? "fixed" : "relative")};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export const Body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const DSContainer = styled.div`
  padding: 0px 36px;
  @media (min-width: 768px) {
    margin-top: 90px;
    display: flex;
    justify-content: center;
  }
`;
export const desktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    padding: 70px 80px;
    background-color: #ffffff;
    border: solid 2px #3cb43c;
    border-radius: 28px;
    margin-bottom: 30px;
  }
`;

export const DSBackButton = styled(BackButton)`
  padding-top: 17px;
  margin: 0 13px 8px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;

export const DSMaterialInfo = styled(MaterialInfo)`
  margin-top: 26px;
`;

export const DSScheduling = styled(Scheduling)`
  margin-top: 24px;
`;

export const DSUserData = styled(UserData)`
  margin-top: 20px;
`;

export const DSCollectionStates = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #4f4f4f;
`;

export const DSCollectionStatesImg = styled.div`
  background: url(${({ image }) => image});
  width: 28px;
  height: 28px;
  background-size: 28px;
  margin-left: 12.9px;
`;

export const DSConfirmTitle = styled.p`
  margin-top: 37px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
`;

export const DSConfirmParagraph = styled.p`
  margin-top: 9px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  color: #828282;
  text-align: start;
`;

export const DSConfirmCollection = styled(Button)`
  margin-top: 9px;
  display: ${({ hasCollector }) => (hasCollector ? "flex" : "none")};
`;

export const DSCancelCollection = styled(Button)`
  background-color: #f28e36;
  margin-top: 17px;
  margin-bottom: 30px;
`;

export const tabBar = styled(TabBar)`
  margin-top: 17px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    padding: 70px 80px;
    border-radius: 28px;
    margin-bottom: 30px;
  }
`;

export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
