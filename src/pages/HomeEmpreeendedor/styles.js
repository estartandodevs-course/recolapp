import styled from "styled-components";

import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButtom";

export const PageE = styled.div`
  height: 100vh;
  color: #fff8f4;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const BackButtonHE = styled(BackButton)`
  margin-top: 17px;
  margin-bottom: 23px;
  margin-left: 13.33px;
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
  /* margin-bottom: 57px; */
`;
export const image = styled.img`
  width: 209px;
  height: 203px;
  margin-bottom: 43px;
`;
export const ButtonF = styled(Button)`
  width: 300px;
`;
