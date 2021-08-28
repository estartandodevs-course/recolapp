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
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  overflow: auto;

  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const CollectionsButton = styled(BackButton)`
  padding-top: 17px;
  margin: 0 13px 8px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;

export const ViewSettings = styled(ViewDetails)`
  margin-bottom: 48px;
  @media (min-width: 768px) {
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CollectionsImg = styled.img`
  margin: 40px auto 40px auto;

  @media (min-width: 768px) {
    margin: ${(props) => props.marginDesktop};
    min-height: 250px;
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
  font-weight: 700;
  color: #4f4f4f;
  margin-top: 30px;
`;

export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    border-radius: 28px;
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const DesktopAling = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`;
