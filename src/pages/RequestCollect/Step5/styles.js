import styled from "styled-components";

import { HeaderWeb } from "../../../components/HeaderWeb";
import { Button } from "../../../components/Button";

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
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--headerWebHeight));
  }
`;

export const warn = styled.span`
  margin-top: 100px;
  color: rgba(79, 79, 79, 1);
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
export const ilustration = styled.img`
  width: 180px;
  height: 120px;
  margin-bottom: 100px;
`;
export const button = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;
// export const desktopContainer = styled.div`
//   @media (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     width: 400px;
//     padding: 70px 80px;
//     border-radius: 28px;
//     margin-bottom: 30px;
//   }
// `;
// export const desktopAling = styled.div`
//   @media (min-width: 768px) {
//     display: flex;
//     justify-content: center;
//   }
// `;
