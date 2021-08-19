import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";

export const HeaderWebCancelled = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const ContainerCancelled = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--lightGray);
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  align-items: center;
  margin-bottom: 0;

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const ContainerMain = styled.div`
  padding: 30px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: var(--defaultScreenWebWidth);

    background-color: #ffffff;
    border: solid 2px #ec6f6f;
    border-radius: 28px;
    margin: 30px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 24px;

  font-size: 24px;
  color: var(--textColor);
  font-weight: 700;
  padding: 0 50px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 17.64px;
  color: var(--textColor);
  font-weight: 400;
  margin-bottom: 40px;
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-bottom: 31px;
`;

export const InputCancelled = styled(Input)`
  color: #000000;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    border-radius: 12px;
  }
`;

export const ButtonCancelled = styled(Button)`
  @media (min-width: 768px) {
    display: flex;
    align-self: center;
    border-radius: 18px;
    max-width: 190px;
    height: 45px;
    font-size: 12px;
  }
`;
export const TabBarCancelled = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
