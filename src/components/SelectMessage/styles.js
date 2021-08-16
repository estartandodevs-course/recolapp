import styled from "styled-components";
import { Input } from "../../components/Input";

export const ContainerAllMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 12px 10px;
  background-color: ${({ status }) => (status ? "#F28E36" : "#FDE5D7")};
  /* background-color: var(--inputBackground); */
  border-radius: 8px;
`;

export const MessageText = styled.div`
  line-height: 21px;
  text-align: center;
  font-size: 14px;
  width: 100%;
`;

export const InputCancelled = styled(Input)`
  color: #000000;
  padding-bottom: 33px;
`;
