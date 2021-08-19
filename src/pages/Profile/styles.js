import styled from "styled-components";
import { HeaderWeb } from "../../components/HeaderWeb";
import { TabBar } from "../../components/TabBar";
import BackButton from "../../components/BackButton";

export const HeaderWebProfile = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const BackButtonProfile = styled(BackButton)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    max-width: 680px;
    margin: auto;
    margin-top: 68px;
    margin-bottom: 23px;
  }
`;

export const ContainerProfile = styled.div`
  overflow: auto;

  @media (min-width: 768px) {
    max-width: 680px;
    margin: auto;
    border-radius: 28px;
    border: solid 2px #3cb43c;
    margin-bottom: 48px;
    background-color: var(--lightTextColor);
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 265px;
  background-color: #228b22;
  width: 100%;
  padding-top: 13px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    background-color: var(--inputBackground);
    border-radius: 28px;
    width: 90%;
    margin: auto;
    margin-top: 48px;
  }
`;

export const UserProfileImg = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: end;
    /* padding-top: 13px; */
  }
`;

export const UserDataImgProfile = styled.div`
  background: url(${({ image }) => image});
  width: 130px;
  height: 130px;
  background-size: 130px;
  border-radius: 40px;
  position: relative;

  @media (min-width: 768px) {
    width: 152px;
    height: 152px;
    background-size: 152px;
  }
`;

export const UserDataImgProfileVerify = styled.div`
  background: url(${({ image }) => image});
  width: 22px;
  height: 22px;
  background-size: 22px;
  position: absolute;
  margin-right: 9.5px;
  margin-bottom: 9.5px;
  bottom: 0;
  right: 0;

  @media (min-width: 768px) {
    width: 25.5px;
    height: 25.5px;
    background-size: 25.5px;
    margin-right: 11px;
    margin-bottom: 11px;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-left: 40px;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: start;
    margin-right: 100px;
    height: 100%;
  }
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;

  @media (min-width: 768px) {
  }
`;

export const UserName = styled.p`
  color: var(--lightTextColor);
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  @media (min-width: 768px) {
    color: #000000;
    font-size: 28px;
    font-weight: 700;
  }
`;

export const TypeUser = styled.p`
  color: var(--lightTextColor);
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 768px) {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ScoreUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const RateUser = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: 768px) {
    color: #000000;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const StarImg = styled.img`
  width: 16px;
`;

export const ReviewsNumber = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 300;

  @media (min-width: 768px) {
    color: #000000;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f28e36;
  padding: 6px 8px 6px 23px;
  border-radius: 3px;
`;

export const PhoneNumber = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--lightTextColor);
`;

export const WhatsappImg = styled.img`
  width: 24px;
  margin-left: 18px;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  margin-top: 12px;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    height: 100%;
    margin-top: 140px;
  }
`;

export const EditName = styled.img`
  width: 24px;
  margin-left: 12px;
`;

export const ContainerMainBottom = styled.div`
  padding: 24px 30px 24px 30px;

  @media (min-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleInfo = styled.p`
  color: var(--textColor);
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ContainerAddressCompany = styled.div`
  background-color: var(--inputBackground);
  border-radius: 8px;
  /* height: 90px; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px 10px;
  margin-top: 14px;
  border-radius: 21px;
  padding: 23px;
`;

export const AddressTag = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 19px;
    font-weight: 600;
  }
`;

export const Address = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 19px;
  }
`;

export const Business = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  margin-top: 28px;

  @media (min-width: 768px) {
    font-size: 19px;
    font-weight: 600;
  }
`;

export const Company = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`;

export const ContainerCollections = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const TitleContainerCollections = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
`;

export const TitleCollections = styled.p`
  color: var(--textColor);
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InfoCollection = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  height: 66px;
  line-height: 21px;

  background-color: var(--inputBackground);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 12px 10px;

  @media (min-width: 768px) {
    font-size: 19px;
    border-radius: 21px;
    padding: 23px;
  }
`;

export const TabBarProfile = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
