import styled from "styled-components";

import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";

export const body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export const backb = styled(BackButton)`
  padding-top: 17px;
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
  margin-bottom: 100px;
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
  color: rgba(242, 142, 54, 1);
  font-weight: 700;
  font-size: 18px;
  margin-left: 126px;
  padding: 2px 10px 2px 10px;
  border: 1px solid #ffb06b;
  border-radius: 8px;
`;
export const button = styled(Button)`
  width: 300px;
`;
export const indicator = styled.span`
  color: rgba(130, 130, 130, 1);
  font-size: 16px;
  font-weight: 700;
`;
