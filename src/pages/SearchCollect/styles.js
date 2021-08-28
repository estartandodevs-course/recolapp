import styled from "styled-components";
import BackButton from "../../components/BackButton";
import { Button } from "../../components/Button";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";

export const HeaderWebSelCollection = styled(HeaderWeb)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--lightGray);
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  align-items: center;
  margin-bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
    padding: 0px;
    max-width: 600px;
    margin: auto;
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const BackButtonSC = styled(BackButton)`
  margin: 0 13px 8px 13px;
  padding-top: 17px;

  @media (min-width: 768px) {
  }
`;

export const ContainerSC = styled.div`
  height: 350px;
  padding: 0px 35px;
  margin-top: 25px;

  @media (min-width: 768px) {
    padding: 0px 100px;
  }
`;

export const ContainerTitle = styled.div`
  margin: 0 10px 18px 0;
`;

export const ContainerNumRes = styled.span`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--textColor);
  padding-left: 10px;
`;

export const ResultsName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--textColor);
`;

export const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 25;
`;

export const ContainerResults = styled.div`
  background-color: ${({ selected }) => (selected ? "#F28E36" : "#FDE5D7")};
  border-radius: 8px;

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Company = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--textColor);
  padding-left: 15px;
`;

export const Address = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--textColor);
  padding-left: 15px;
`;

export const ButtonSC = styled(Button)``;

export const ContainerButton = styled.div`
  padding: 0px 35px;

  @media (min-width: 768px) {
    padding: 0px 100px;
  }
`;

export const TabBarSelCollection = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CollectionsEmpty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
