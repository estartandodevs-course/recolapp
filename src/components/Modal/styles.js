import styled from "styled-components";

export const ModalOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4c4c485;
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const ContainerModal = styled.div`
  width: 301px;
  background-color: var(--lightTextColor);
  border-radius: 8px;
  height: 96px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 0 39px;
  line-height: 16.8px;
  color: #4f4f4f;
`;

export const ActionModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;
  padding-top: 12px;
`;

export const YesButtom = styled.button`
  background-color: var(--green);
  height: 32px;
  width: 89px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  color: #fffefe;
  cursor: pointer;
`;

export const NoButtom = styled.button`
  background-color: var(--orange);
  height: 32px;
  width: 89px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  color: #fffefe;
  cursor: pointer;
`;
