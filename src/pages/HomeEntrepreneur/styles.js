import styled from "styled-components";

import { Button } from "../../components/Button";
import BackButton from "../../components/BackButton";

export const PageE = styled.div`
  min-height: calc(100vh - var(--tabBarHeight));
  color: #fff8f4;
  display: flex;
  flex-direction: column;
`;
export const BackButtonHE = styled(BackButton)`
  margin: 17px 0px 23px 13px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const FirstText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
  margin-bottom: 37px;
`;
export const mid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const image = styled.img`
  width: 209px;
  height: 203px;
  margin-bottom: 43px;
`;
export const ButtonF = styled(Button)`
  width: 300px;
`;
