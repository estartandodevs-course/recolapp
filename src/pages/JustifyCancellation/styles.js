import styled from "styled-components";
import { Input } from "../../components/Input";

export const ContainerCancelled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 30px 0px 30px;
  background-color: var(--lightGray);
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 24px;

  font-size: 24px;
  color: var(--textColor);
  font-weight: 700;
  padding: 0 50px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding: ; */
  font-size: 17.64px;
  color: var(--textColor);
  font-weight: 400;
  margin-bottom: 40px;
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-bottom: 31px;
`;

export const InputCancelled = styled(Input)`
  color: #000000;
  padding-bottom: 33px;
`;
