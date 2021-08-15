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
export const button = styled(Button)`
  width: 300px;
`;