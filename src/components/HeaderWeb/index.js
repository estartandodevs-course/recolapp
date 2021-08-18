import React from "react";

import { useHistory } from "react-router-dom";

import * as S from "./styles";

import logo from "../../assets/img/icons/logo_recolapp.svg";

const HeaderWeb = ({ ...rest }) => {
  const history = useHistory();
  return (
    <S.ContainerHeaderWeb {...rest}>
      <S.HeaderWebLogo src={logo} />
      <S.HeaderWebCenterText>
        <S.HeaderWebWhoWeAre>Quem somos</S.HeaderWebWhoWeAre>
        <S.HeaderWebFrequentlyDoubts>
          Dúvidas Frequentes
        </S.HeaderWebFrequentlyDoubts>
      </S.HeaderWebCenterText>
      <S.HeaderWebRight>
        <S.HeaderWebButtonRegister onClick={() => history.push("/register")}>
          Criar Conta
        </S.HeaderWebButtonRegister>
        <S.HeaderWebButtonLogin onClick={() => history.push("/login")}>
          Entrar
        </S.HeaderWebButtonLogin>
      </S.HeaderWebRight>
    </S.ContainerHeaderWeb>
  );
};

export { HeaderWeb };
