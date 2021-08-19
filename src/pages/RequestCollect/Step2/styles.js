import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { TabBar } from "../../../components/TabBar";

export const HeaderWebRequest = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  margin: 0;
  padding: 0;
`;
export const backb = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const containers = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 1px 24px;
  height: 370px;
  @media (min-width: 768px) {
    height: 200px;
    display: flex;
    flex-direction: row;
  }
`;
export const valuearea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const materialname = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: rgba(79, 79, 79, 1);
`;
export const kgindex = styled.span`
  color: rgba(130, 130, 130, 1);
  font-weight: 400;
  font-size: 12px;
`;
export const kgvalue = styled.input`
  border: none;
  border-radius: 8px;
  outline: none;
  width: 138px;
  height: 40px;
  background-color: rgba(253, 229, 215, 1);
`;
export const endPage = styled.div`
  gap: 11px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
export const turnback = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const turnbackbutton = styled.input`
  width: 16, 67px;
  height: 16, 67px;
`;
export const buttonspan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(79, 79, 79, 1);
`;
export const button = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const TabBarRequest = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const desktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 600px;
    padding: 70px 80px;
    border-radius: 28px;
    margin-bottom: 30px;
  }
`;
export const desktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
