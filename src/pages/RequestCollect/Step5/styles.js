import styled from "styled-components";

import { Button } from "../../../components/Button";

export const body = styled.div`
  background-color: #fff8f4;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
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
`;
