import styled from "styled-components";

export const SchedulingContainer = styled.div`
  background-color: var(--inputBackground);
  width: 100%;
  height: 100px;
  border-radius: 8px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const SchedulingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 12px;

  color: #000000;
  /* font-family: "Poppins400"; */
  font-size: 16px;
`;

export const SchedulingKey = styled.h3``;

export const SchedulingValue = styled.p`
  padding-left: 5px;
`;
