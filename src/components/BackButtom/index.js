import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import Backimg from "../../assets/img/icons/icon_arrow_left.svg";

export const BackButton = ({ pageTitle, ...rest }) => {
  const history = useHistory();
  const handleBack = () => history.goBack();
  return (
    <S.Section {...rest}>
      <S.Img src={Backimg} onClick={handleBack} />
      <S.Pagetitle>{pageTitle}</S.Pagetitle>
    </S.Section>
  );
};
