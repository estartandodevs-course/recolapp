import styled from "styled-components";

export const ContainerSelectMaterial = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 16px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ContainerMaterial = styled.div`
  background-color: ${({ status }) => (status ? "#F28E36" : "#ffb06b")};
  width: 138px;
  height: 65px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMaterialText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
