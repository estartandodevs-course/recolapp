import styled from "styled-components";

export const UserDataContainer = styled.div`
  width: 100%;
  display: ${({ HaveUser }) => (HaveUser ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  line-height: 19.2px;
`;

export const UserDataContainerTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserDataContainerRight = styled.div`
  width: 115px;
  margin-left: 10px;
  font-size: 16px;
`;

export const UserDataName = styled.p`
  font-weight: 700;
`;

export const UserDataOffice = styled.p`
  font-weight: 400;
`;

export const UserDataImgProfile = styled.div`
  background: url(${({ image }) => image});
  width: 78px;
  height: 78px;
  background-size: 78px;
  border-radius: 40px;
  position: relative;
`;

export const UserDataImgProfileVerify = styled.div`
  background: url(${({ image }) => image});
  width: 13.2px;
  height: 13.2px;
  background-size: 13.2px;
  position: absolute;
  margin-right: 6.6px;
  margin-bottom: 6.6px;
  bottom: 0;
  right: 0;
`;

export const UserDataContainerBottom = styled.div`
  background: #f28e36;
  width: 195px;
  height: 31px;
  margin-top: 19px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserDataImgZap = styled.div`
  background: url(${({ image }) => image});
  width: 24px;
  height: 24px;
  background-size: 24px;
  margin-left: 4px;
`;

export const NotHaveUserData = styled.div`
  display: ${({ HaveUser }) => (!HaveUser ? "flex" : "none")};
  text-align: center;
  font-weight: 700;
  color: #4f4f4f;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
