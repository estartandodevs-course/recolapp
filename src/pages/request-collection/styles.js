import styled from "styled-components";

import { BackButton } from "../../components/BackButtom";
import { Checkbox } from "../../components/CheckBox";

export const body = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
`;
export const backb = styled(BackButton)`
  margin-top: 17px;
  margin-bottom: 23px;
  margin-left: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;

export const checkbox = styled(Checkbox)`
  width: 100px;
`;
