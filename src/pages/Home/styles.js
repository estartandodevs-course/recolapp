import styled from "styled-components";

import { TabBar } from "../../components/TabBar";
import { HeaderWeb } from "../../components/HeaderWeb";
import { Button } from "../../components/Button";
import BackButton from "../../components/BackButton";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const PageE = styled.div`
  min-height: calc(100vh - var(--tabBarHeight));
  color: #fff8f4;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const BackButtonHE = styled(BackButton)`
  margin: 17px 0px 23px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;

export const FirstText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
  margin-bottom: 37px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const mid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const image = styled.img`
  width: 209px;
  height: 203px;
  margin-bottom: 43px;
`;

export const ButtonRequest = styled(Button)`
  width: 300px;
`;

export const ButtonSchedules = styled(Button)`
  width: 300px;
`;

export const TabBarHomeEnterpreneur = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
