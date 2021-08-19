import styled from "styled-components";
import BackButton from "../../components/BackButton";
import { ViewDetails } from "../../components/ViewDetails";
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

export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const CollectionsButton = styled(BackButton)`
  margin-top: 20px;
  margin-right: auto;
`;

export const ViewSettings = styled(ViewDetails)`
  margin-bottom: 48px;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const CollectionsImg = styled.img`
  margin: auto;
  /* margin-bottom: 41px; */
`;

export const MobileTabBar = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
