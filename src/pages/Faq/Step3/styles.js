import styled from "styled-components";
import BackButton from "../../../components/BackButton";
import { HeaderWeb } from "../../../components/HeaderWeb";
import { TabBar } from "../../../components/TabBar";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
  }
`;

export const Body = styled.div`
  background-color: #fff8f4;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--tabBarHeight));
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;
export const BackB = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 40px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;

  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
    padding: 0;
  }
`;
export const MainSpan = styled.span`
  text-align: center;
  padding-top: 15.5px;
  padding-bottom: 15.5px;
  background-color: rgba(253, 229, 215, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 700;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 22px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentSpan = styled.span`
  background-color: rgba(253, 229, 215, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: justify;
  font-weight: 400;
  width: 290px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-top: 50px;
  margin-bottom: 30px;
`;
export const MainTextAling = styled.div`
  display: flex;
  justify-content: center;
`;
export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    padding: 40px 40px;
    background-color: #ffffff;
    border: solid 2px #f28e36;
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

export const TabBarFaq = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
