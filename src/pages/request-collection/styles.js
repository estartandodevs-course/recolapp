import styled from "styled-components";

import { BackButton } from "../../components/BackButtom";
import { Button } from "../../components/Button";

export const body = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
`;
export const backb = styled(BackButton)`
  margin-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const materialspan = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;
export const materialselect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 135px;
`;
export const bottonpage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const itensselected = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const spannum = styled.span`
  margin-left: 126px;
  padding: 4px 12px 4px 12px;
  border: 1px solid #ffb06b;
  border-radius: 8px;
`;
export const button = styled(Button)`
  width: 300px;
`;
