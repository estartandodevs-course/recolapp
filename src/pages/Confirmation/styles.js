import styled from "styled-components";
import { Button } from "../../components/Button";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
`;

export const ConfirmationText = styled.h2`
  text-align: center;
  color: var(--textColor);
  margin-top: auto
`;

export const ConfirmationImg = styled.img`
  width: 100%;
`;

export const ConfirmationButton = styled(Button)`
  margin-top: auto;
`;
