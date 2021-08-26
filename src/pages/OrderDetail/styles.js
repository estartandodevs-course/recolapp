import styled from "styled-components";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";

export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const MainContainer = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const TabBarMobile = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
