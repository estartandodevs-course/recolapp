import styled from "styled-components";

import { BackButton } from "../../components/BackButtom";
import { MaterialInfo } from "../../components/CardMaterialInfo";
import { Scheduling } from "../../components/Scheduling";
import { UserData } from "../../components/UserData";
import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";

export const DSContainerAll = styled.div``;

export const DSContainer = styled.div`
  padding: 0px 36px;
`;

export const DSBackButton = styled(BackButton)`
  margin-left: 18.33px;
  margin-top: 30px;
`;

export const DSMaterialInfo = styled(MaterialInfo)`
  margin-top: 26px;
`;

export const DSScheduling = styled(Scheduling)`
  margin-top: 24px;
`;

export const DSUserData = styled(UserData)`
  margin-top: 20px;
`;

export const DSCollectionStates = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #4f4f4f;
`;

export const DSCollectionStatesImg = styled.div`
  background: url(${({ image }) => image});
  width: 28px;
  height: 28px;
  background-size: 28px;
  margin-left: 12.9px;
`;

export const DSConfirmCollection = styled(Button)`
  margin-top: 21px;
  display: ${({ HaveUser }) => (HaveUser ? "flex" : "none")};
`;

export const DSCancelCollection = styled(Button)`
  background-color: #f28e36;
  margin-top: 17px;
  margin-bottom: 80px;
`;

export const DSTabBar = styled(TabBar)`
  margin-top: 17px;
`;
