import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import Backimg from "../../assets/img/icons/icon_arrow_left.svg";

const BackButton = ({ pageTitle, handleBack = false, ...rest }) => {
  const history = useHistory();
  const handleBackFallBack = () => history.goBack();
  const onClick = handleBack || handleBackFallBack;

  return (
    <S.Section {...rest}>
      <S.Img src={Backimg} onClick={onClick} />
      <S.Pagetitle>{pageTitle}</S.Pagetitle>
    </S.Section>
  );
};
export default BackButton;
