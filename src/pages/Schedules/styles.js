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
  min-height: calc(100vh - var(--headerWebHeight));
  overflow: auto;

  @media (min-width: 768px) {
    align-items: center;
    max-width: 560px;
    overflow: initial;
    margin: auto;
  }
`;

export const CollectionsButton = styled(BackButton)`
  margin-top: 20px;
  margin-right: auto;
`;

export const ViewSettings = styled(ViewDetails)`
  margin-bottom: 48px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CollectionsImg = styled.img`
  margin: 40px auto 40px auto;

  @media (min-width: 768px) {
    margin: ${(props) => props.marginDesktop};
  }
`;

export const MobileTabBar = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NoItemsMessage = styled.p`
  margin-bottom: auto;
  text-align: center;
`;
