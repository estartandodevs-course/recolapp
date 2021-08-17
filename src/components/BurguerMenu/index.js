import { useState } from "react";

import * as S from "./styles";

import logo from "../../assets/img/icons/logo_recolapp.svg";
import main from "../../assets/img/icons/main.svg";

import bepartofit from "../../assets/img/icons/peoples.svg";
import whoweare from "../../assets/img/icons/trash.svg";

const BurguerMenu = ({ ...rest }) => {
  const [mainShow, setMainShow] = useState(false);

  return (
    <S.HeaderAll mainShow={mainShow} {...rest}>
      <S.HeaderContainer>
        <S.HeaderLogo src={logo} />
      </S.HeaderContainer>
      <S.HeaderMain
        src={main}
        onClick={() => setMainShow((previous) => !previous)}
      />
      <S.HeaderMainShowOut
        mainShow={mainShow}
        onClick={() => setMainShow(false)}
      />
      <S.HeaderMainShow mainShow={mainShow}>
        <S.HeaderMainShowBePartOfIt>
          <S.HeaderMainShowBePartOfItImg src={bepartofit} />
          <S.HeaderMainShowBePartOfItText>
            Faça parte!
          </S.HeaderMainShowBePartOfItText>
        </S.HeaderMainShowBePartOfIt>
        <S.HeaderMainShowWhoWeAre>
          <S.HeaderMainShowWhoWeAreImg src={whoweare} />
          <S.HeaderMainShowWhoWeAreText>
            Quem somos
          </S.HeaderMainShowWhoWeAreText>
        </S.HeaderMainShowWhoWeAre>
        <S.HeaderMainShowTermsOfUse>Termos de Uso</S.HeaderMainShowTermsOfUse>
      </S.HeaderMainShow>
    </S.HeaderAll>
  );
};

export { BurguerMenu };
