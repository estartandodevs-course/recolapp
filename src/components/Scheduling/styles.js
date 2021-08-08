import styled from "styled-components";

export const SchedulingContainer = styled.div`
  background-color: var(--inputBackground);
  width: 100%;
  height: 100px;
  border-radius: 8px;
  font-family: Poppins;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const SchedulingDiv = styled.div`
  /* width: calc(100% - 12px); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 12px;
`;

export const SchedulingKey = styled.h3``;

export const SchedulingValue = styled.p`
  padding-left: 5px;
`;
