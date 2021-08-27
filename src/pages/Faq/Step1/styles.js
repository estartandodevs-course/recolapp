import styled from "styled-components";
import BackButton from "../../../components/BackButton";
import { TabBar } from "../../../components/TabBar";
import { HeaderWeb } from "../../../components/HeaderWeb";

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
  overflow: auto;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;
export const BackB = styled(BackButton)`
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
  margin-top: 17px;
  @media (min-width: 768px) {
    margin: 40px 0px 40px 0px;
  }
`;
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
`;
export const SectionButtons = styled.button`
  background-color: rgba(253, 229, 215, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 700;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 15px 20px;
  }
`;
export const TabBarFaq = styled(TabBar)`
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
    border-radius: 28px;
  }
`;
export const DesktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
