import styled from "styled-components";
import BackButton from "../../../components/BackButton";

export const body = styled.div`
  background-color: #fff8f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
export const mainSpan = styled.span`
  background-color: rgba(253, 229, 215, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 700;
  padding: 300px 45px;
`;
