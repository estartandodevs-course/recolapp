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

export const Body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  width: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BackB = styled(BackButton)`
  padding-top: 17px;
  margin: 0 13px 8px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;

export const ButtonConfirm = styled(Button)`
  width: 300px;
  margin-top: 250px;
  @media (min-width: 768px) {
    width: 400px;
    display: flex;
    align-items: center;
    margin: auto;
  }
`;

export const SubmitButton = styled.input`
  display: none;
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 0px;
  }
`;

export const HourDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateSpan = styled.span`
  font-size: 10px;
`;

export const HourSpan = styled.span`
  font-size: 10px;
`;

export const InputDate = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
  @media (min-width: 768px) {
    width: 230px;
  }
`;

export const InputHour = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
  @media (min-width: 768px) {
    width: 230px;
  }
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  margin-top: 42px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-bottom: 240px;
    width: 462px;
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
    justify-content: center;
  }
`;

export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContainerMain = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
