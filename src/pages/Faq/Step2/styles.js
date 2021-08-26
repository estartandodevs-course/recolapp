import styled from "styled-components";
import BackButton from "../../../components/BackButton";
import { HeaderWeb } from "../../../components/HeaderWeb";

export const Body = styled.div`
  background-color: #fff8f4;

  height: 100vh;
`;
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackB = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 40px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
  margin-left: 18.33px;
  @media (min-width: 768px) {
    margin: 50px 0px 50px 100px;
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
  border-radius: 8px;
  border: none;
  margin-bottom: 22px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const ContentSpan = styled.span`
  background-color: rgba(253, 229, 215, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: justify;
  font-weight: 400;
  margin-top: 50px;
  height: 230px;
  width: 290px;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;
export const MainTextAling = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeaderDesktop = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
  }
`;
export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    padding: 70px 80px;
    background-color: #ffffff;
    border: solid 1px #f28e36;
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
