import styled from "styled-components";

export const ContainerViewDetails = styled.div`
  background-color: #008000;
  min-height: 89px;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 30.33px;
  line-height: 19.2px;

  color: #ffffff;
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleViewDetails = styled.p`
  max-width: 200px;
  max-height: 20px;
  margin-top: 17px;
  font-weight: 600;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const DataViewDetails = styled.p`
  margin-top: 2px;
  font-weight: 400;
`;
export const OptionViewDetails = styled.p`
  margin-top: 8px;
  margin-bottom: 5px;
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
