import styled from "styled-components";
import BackButton from "../../components/BackButton";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";
import { ViewDetails } from "../../components/ViewDetails";

export const Header = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
  }
`;

export const BackSC = styled(BackButton)`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - var(--tabBarHeight));
  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const desktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 30px;
  }
`;

export const image = styled.img`
  width: 226px;
  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;
export const Details = styled(ViewDetails)`
  margin: 0;
`;
export const TabB = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
