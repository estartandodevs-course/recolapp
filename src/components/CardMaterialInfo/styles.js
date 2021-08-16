import styled from "styled-components";

export const ContainerMaterialInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--inputBackground);
  width: ${(props) => props.width};
  border-radius: 8px;
  padding-bottom: 18px;
`;

export const TitleContainer = styled.span`
  display: flex;
  padding: 11px 0;
  color: #000000;
  font-size: 16px;
`;

export const MaterialData = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const ContainerInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--middleOrange);
  color: var(--lightTextColor);
  width: 223px;
  height: 39px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
`;

export const ContainerCheck = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  box-sizing: border-box;

  width: 230.5px;
  height: 44px;
  padding-left: 213px;
  margin-bottom: 2.5px;
`;

export const CheckMark = styled.img`
  display: flex;
  /* position: absolute; */
  width: 21px;
`;
