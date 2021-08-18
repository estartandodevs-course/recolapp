import styled from "styled-components";

import { Button } from "../Button";

export const ContainerHeaderWeb = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 116px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderWebLogo = styled.img`
  margin-bottom: 5px;
  width: 166px;
  height: 53px;
  cursor: pointer;
`;

export const HeaderWebCenterText = styled.div`
  display: flex;
  align-items: center;
  color: #2b7b2b;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`;

export const HeaderWebWhoWeAre = styled.p`
  cursor: pointer;
  margin-right: 65px;
`;

export const HeaderWebFrequentlyDoubts = styled.p`
  cursor: pointer;
`;

export const HeaderWebRight = styled.div`
  display: ${({ logged }) => (!logged ? "flex" : "none")};
  align-items: center;
`;

export const HeaderWebButtonRegister = styled.p`
  margin-right: 15px;
  color: #2b7b2b;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
`;

export const HeaderWebButtonLogin = styled(Button)`
  margin-left: 15px;
  width: 125px;
`;

export const HeaderWebLogged = styled.div`
  display: ${({ logged }) => (logged ? "initial" : "none")};
`;

export const HeaderWebLoggedCollect = styled.p`
  color: #2b7b2b;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  cursor: pointer;
  margin-right: 65px;

  display: ${({ logged }) => (logged ? "initial" : "none")};
`;

export const HeaderWebLoggedImage = styled.img``;
