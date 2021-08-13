import styled from "styled-components";

export const ContainerViewDetails = styled.div`
  background-color: #008000;
  height: 110px;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 30.33px;

  color: #ffffff;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleViewDetails = styled.p`
  margin-top: 10px;
  font-weight: 600;
`;
export const DataViewDetails = styled.p`
  font-weight: 400;
`;
export const OptionViewDetails = styled.p`
  margin-top: 6px;
  font-weight: 300;
  text-decoration: underline;
`;

export const ContainerViewDetailsLeft = styled.div``;

export const ContainerViewDetailsImg = styled.div`
  background: url(${({ image }) => image});
  width: 35px;
  height: 35px;
  background-size: 35px;
`;
