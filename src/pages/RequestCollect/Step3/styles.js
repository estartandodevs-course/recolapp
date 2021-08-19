import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
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
  overflow: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 300px;
  @media (min-width: 768px) {
    width: 400px;
    margin-top: 100px;
  }
`;
export const submitbutton = styled.input`
  display: none;
`;

export const datediv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const hourdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const dateSpan = styled.span`
  font-size: 10px;
`;
export const hourSpan = styled.span`
  font-size: 10px;
`;
export const inputDate = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
`;
export const inputHour = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
`;
export const dateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const TabBarRequest = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const desktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 600px;
    padding: 70px 80px;
    border-radius: 28px;
    margin-bottom: 30px;
  }
`;
export const desktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
