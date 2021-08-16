import styled from "styled-components";

export const HeaderAll = styled.div`
  width: 100%;
  height: 100%;
  position: ${({ mainShow }) => (mainShow ? "fixed" : "relative")};
`;

export const HeaderContainer = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;
`;

export const HeaderLogo = styled.img``;

export const HeaderMain = styled.img`
  position: absolute;
  margin-right: 11px;
  margin-top: 19px;
  right: 0;
  top: 0;
  z-index: 4;
`;

export const HeaderMainShowOut = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c4c4c4;
  opacity: 52%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${({ mainShow }) => (mainShow ? "block" : "none")};
`;

export const HeaderMainShow = styled.div`
  background-color: #efefef;
  width: 261px;
  height: 100vh;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: ${({ mainShow }) => (mainShow ? "block" : "none")};

  z-index: 3;
  position: absolute;
  right: 0;
  top: 0;
`;

export const HeaderMainShowBePartOfIt = styled.div`
  margin-top: 149px;
  display: flex;
`;
export const HeaderMainShowBePartOfItImg = styled.img`
  margin-left: 26px;
`;

export const HeaderMainShowBePartOfItText = styled.p`
  color: #f28e36;
  margin-left: 10px;
`;

export const HeaderMainShowWhoWeAre = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const HeaderMainShowWhoWeAreImg = styled.img`
  margin-left: 26px;
`;

export const HeaderMainShowWhoWeAreText = styled.p`
  margin-left: 10px;
  color: #016501;
`;

export const HeaderMainShowTermsOfUse = styled.div`
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: absolute;
  color: #016501;
  font-size: 12px;
  font-weight: 400;
`;
