import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
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
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;
export const BackB = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;

  @media (min-width: 768px) {
    margin-bottom: 66px;
  }
`;

export const ContainerMaterials = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 130px;
  }
`;
export const Containers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 1px 24px;
  height: 370px;
  width: 300px;

  @media (min-width: 768px) {
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    width: 462px;
  }
`;
export const ValueArea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MaterialName = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: rgba(79, 79, 79, 1);
`;
export const KgIndex = styled.span`
  color: rgba(130, 130, 130, 1);
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 2px;
`;
export const KgValue = styled.input`
  border: none;
  border-radius: 8px;
  outline: none;
  width: 134px;
  height: 40px;
  background-color: rgba(253, 229, 215, 1);
  text-indent: 15px;
  padding-right: 4px;
`;
export const EndPage = styled.div`
  gap: 11px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
export const TurnBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 13px;
`;
export const TurnBackButton = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 1px;
`;
export const ButtonSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(79, 79, 79, 1);
`;
export const ButtonConfirm = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const TabBarRequest = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 600px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
