import styled from "styled-components";

import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const body = styled.div`
  background-color: #fff8f4;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const backb = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const button = styled(Button)`
  width: 300px;
  margin-top: 300px;
  /* background-color: rgba(0, 128, 0, 1);
  color: rgba(255, 255, 255, 1);
  padding: 15px 107px;
  border: none;
  border-radius: 8px; */
`;
export const submitbutton = styled.input`
  display: none;
`;

export const datediv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const hourdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const dateSpan = styled.span`
  font-size: 10px;
`;
export const hourSpan = styled.span`
  font-size: 10px;
`;
export const inputDate = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
`;
export const inputHour = styled(Input)`
  background-color: rgba(253, 229, 215, 1);
  border-radius: 8px;
  width: 300px;
`;
export const dateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
