import styled from "styled-components";

import { BackButton } from "../../components/BackButtom";
import { MaterialInfo } from "../../components/CardMaterialInfo";
import { Scheduling } from "../../components/Scheduling";
import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";

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

export const DSConfirmCollection = styled(Button)`
  margin-top: 21px;
`;

export const DSCancelCollection = styled(Button)`
  margin-top: 17px;
`;

export const DSTabBar = styled(TabBar)`
  margin-top: 17px;
`;
