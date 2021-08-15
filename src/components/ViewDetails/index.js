import React from "react";

import * as S from "./styles";

import image from "../../assets/img/icons/icon_recycle.svg";

const ViewDetails = ({
  title = "Cooperativa Pinheiro",
  date = "Sáb, 24/07 - 15:30h",
  details = "Ver detalhes",
  onClick,
  ...rest
}) => {
  return (
    <S.ContainerViewDetails {...rest}>
      <S.ContainerViewDetailsLeft>
        <S.TitleViewDetails>{title}</S.TitleViewDetails>
        <S.DataViewDetails>{date}</S.DataViewDetails>
        <S.OptionViewDetails onClick={onClick}>{details}</S.OptionViewDetails>
      </S.ContainerViewDetailsLeft>
      <S.ContainerViewDetailsImg image={image} />
    </S.ContainerViewDetails>
  );
};

export { ViewDetails };
