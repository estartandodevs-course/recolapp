import styled from "styled-components";
import { Button } from "../Button";

export const ConfirmationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const ConfirmationText = styled.h2`
  text-align: center;
  color: var(--textColor);
  margin: auto 0 30px;
`;

export const ConfirmationImg = styled.img`
  width: 50%;
`;

export const ConfirmationButton = styled(Button)`
  margin: auto 0 30px;
`;
