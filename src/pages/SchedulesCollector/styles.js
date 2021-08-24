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

export const Body = styled.div`
  width: 100vh;
`;

export const BackSC = styled(BackButton)`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;
export const TabB = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Details = styled(ViewDetails)`
  margin: 0;
`;
