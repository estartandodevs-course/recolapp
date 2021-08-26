import styled from "styled-components";
import { Button } from "../Button";

export const ConfirmationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
`;

export const ConfirmationText = styled.p`
  text-align: center;
  color: var(--textColor);
  margin: auto 0;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 30px;
    /* padding-top: 70px; */
  }
`;

export const ConfirmationImg = styled.img`
  max-width: 230px;

  @media (min-width: 768px) {
    width: 336px;
    height: 224px;
    margin-bottom: 10px;
  }
`;

export const ConfirmationButton = styled(Button)`
  margin: auto 0 30px;

  @media (min-width: 768px) {
    border-radius: 12px;
    font-size: 14px;
    width: 220px;
    height: 35px;
  }
`;
