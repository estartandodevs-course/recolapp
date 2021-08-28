import styled from "styled-components";

import { HeaderWeb } from "../../components/HeaderWeb";
import BackButton from "../../components/BackButton";
import { MaterialInfo } from "../../components/CardMaterialInfo";
import { Scheduling } from "../../components/Scheduling";
import { UserData } from "../../components/UserData";
import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const OrderDetailsBody = styled.div`
  min-height: calc(100vh - var(--tabBarHeight));
  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
    padding: 0px;
    max-width: 600px;
    margin: auto;
  }
`;

export const Body = styled.div`
  padding: 0px 35px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    padding: 40px 80px;
    background-color: #ffffff;
    border: solid 2px #3cb43c;
    border-radius: 28px;
    margin: 30px auto;
  }
`;

export const OrderDetailsBackButton = styled(BackButton)`
  margin: 17px 0px 23px 13px;
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
  }
`;

export const OrderDetailsMaterialInfo = styled(MaterialInfo)``;

export const OrderDetailsScheduling = styled(Scheduling)`
  margin-top: 24px;
`;

export const OrderDetailsUserData = styled(UserData)`
  margin-top: 18px;
`;

export const OrderDetailsAsk = styled.div`
  text-align: center;
  margin-top: 22px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const ButtonYes = styled(Button)`
  margin-top: 19px;
`;

export const ButtonNo = styled(Button)`
  margin: 17px 0px 22px 0px;
`;

export const TabBarMobile = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
