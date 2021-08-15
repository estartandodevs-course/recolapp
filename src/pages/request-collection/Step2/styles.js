import styled from "styled-components";

import { BackButton } from "../../../components/BackButtom";
import { Button } from "../../../components/Button";

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
export const containers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const valuearea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const materialname = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: rgba(79, 79, 79, 1);
`;
export const kgindex = styled.span`
  color: rgba(130, 130, 130, 1);
  font-weight: 400;
  font-size: 12px;
`;
export const kgvalue = styled.input`
  border: none;
  border-radius: 8px;
  outline: none;
  width: 138px;
  height: 40px;
  background-color: rgba(253, 229, 215, 1);
`;
export const turnback = styled.div`
  display: flex;
  flex-direction: row;
`;
export const turnbackbutton = styled.input`
  width: 16, 67px;
  height: 16, 67px;
`;
export const buttonspan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(79, 79, 79, 1);
`;
export const button = styled(Button)`
  width: 300px;
`;
