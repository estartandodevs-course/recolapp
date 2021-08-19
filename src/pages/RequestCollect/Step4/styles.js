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

export const body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  margin-bottom: 24px;
  overflow: auto;
`;
export const backb = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const button = styled(Button)`
  width: 300px;
`;
export const infos = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`;
export const materialsList = styled(MaterialInfo)`
  width: 300px;
`;
export const infolocation = styled(Scheduling)`
  width: 300px;
  height: 100px;
`;
export const confirmations = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 17px;
  flex-direction: column;
  align-items: center;
`;
export const confirmationspan = styled.span`
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
