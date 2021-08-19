import { useContext } from "react";
import * as S from "./styles";

import { verify, edit, star, whatsapp } from "../../assets/img/icons";

import { profile } from "../../assets/img/illustrations/index";
import { UserContext } from "../../contexts";

const Profile = () => {
  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  const partOne = user?.cellphone.slice(0, 2);
  const partTwo = user?.cellphone.slice(2, 7);
  const partThree = user?.cellphone.slice(7, 11);

  return (
    <>
      <S.HeaderWebProfile logged={logged} />
      <S.BackButtonProfile pageTitle="Meu perfil" />
      <S.ContainerProfile>
        <S.HeaderProfile>
          <S.UserProfileImg>
            <S.UserDataImgProfile image={profile}>
              <S.UserDataImgProfileVerify image={verify} />
            </S.UserDataImgProfile>
          </S.UserProfileImg>
          <S.ContainerUser>
            <S.ContainerInfoUser>
              <S.UserName>{`${user?.name}`}</S.UserName>
              <S.TypeUser>{`(${user?.typeUser})`}</S.TypeUser>
              <S.ScoreUser>
                <S.RateUser>4,8 </S.RateUser>
                <S.StarImg src={star} />
                <S.ReviewsNumber>(+100)</S.ReviewsNumber>
              </S.ScoreUser>
              <S.PhoneContainer>
                <S.PhoneNumber>{`(${partOne}) ${partTwo}-${partThree}`}</S.PhoneNumber>
                <S.WhatsappImg src={whatsapp} />
              </S.PhoneContainer>
            </S.ContainerInfoUser>
            <S.EditContainer>
              <S.EditName src={edit} />
            </S.EditContainer>
          </S.ContainerUser>
        </S.HeaderProfile>
        <S.ContainerMainBottom>
          <S.ContainerInfo>
            <S.TitleContainerInfo>
              <S.TitleInfo>Informações</S.TitleInfo>
              <S.EditName src={edit} />
            </S.TitleContainerInfo>
            <S.ContainerAddressCompany>
              <S.AddressTag>Endereço</S.AddressTag>
              <S.Address>
                Av. Rio Branco, 145 - Campo Limpo/São Paulo-SP
              </S.Address>
              <S.Business>Empreendimento</S.Business>
              <S.Company>Dono da Confeitaria Docinho</S.Company>
            </S.ContainerAddressCompany>
          </S.ContainerInfo>
          <S.ContainerCollections>
            <S.TitleContainerCollections>
              <S.TitleCollections>Coletas</S.TitleCollections>
              <S.EditName src={edit} />
            </S.TitleContainerCollections>
            <S.InfoCollection>
              04/08 - Coleta realizada pela Cooperativa Pinheiro
            </S.InfoCollection>
          </S.ContainerCollections>
        </S.ContainerMainBottom>
      </S.ContainerProfile>
      <S.TabBarProfile />
    </>
  );
};

export default Profile;
