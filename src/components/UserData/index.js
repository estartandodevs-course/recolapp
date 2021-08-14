import React from "react";

import * as S from "./styles";

import profile from "../../assets/img/illustrations/perfil_coletor.svg";
import verify from "../../assets/img/icons/verify.svg";
import whatsapp from "../../assets/img/icons/icon_whatsapp.svg";

const UserData = ({
  image,
  name,
  office = "Associado a Cooperativa Pinheiro",
  onClick,
  ...rest
}) => {
  return (
    <>
      <S.UserDataContainer {...rest} HaveUser={name}>
        <S.UserDataContainerTop>
          <S.UserDataImgProfile image={!image ? profile : image}>
            <S.UserDataImgProfileVerify image={verify} />
          </S.UserDataImgProfile>
          <S.UserDataContainerRight>
            <S.UserDataName>{name}</S.UserDataName>
            <S.UserDataOffice>{office}</S.UserDataOffice>
          </S.UserDataContainerRight>
        </S.UserDataContainerTop>
        <S.UserDataContainerBottom onClick={onClick}>
          Entrar em contato
          <S.UserDataImgZap image={whatsapp} />
        </S.UserDataContainerBottom>
      </S.UserDataContainer>
      <S.NotHaveUserData {...rest} HaveUser={name}>
        Ops.. ainda não
        <br />
        encontramos
        <br />
        um coletor responsável para a retirada dos materiais
        <br />
        <br />
        Aguarde mais um pouco...
        <S.UserDataContainerBottom onClick={onClick}>
          Entrar em contato
          <S.UserDataImgZap image={whatsapp} />
        </S.UserDataContainerBottom>
      </S.NotHaveUserData>
    </>
  );
};

export { UserData };
