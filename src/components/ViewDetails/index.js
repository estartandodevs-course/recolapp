import React from "react";

import * as S from "./styles";

import image from "../../assets/img/icons/icon_recycle.svg";

const ViewDetails = ({
  title = "Aguardando coletor ou cooperativa",
  date = "N/A",
  onClick,
  ...rest
}) => {
  return (
    <S.ContainerViewDetails {...rest}>
      <S.ContainerViewDetailsLeft>
        <S.TitleViewDetails>{title}</S.TitleViewDetails>
        <S.DataViewDetails>{date}</S.DataViewDetails>
        <S.OptionViewDetails onClick={onClick}>
          Ver detalhes
        </S.OptionViewDetails>
      </S.ContainerViewDetailsLeft>
      <S.ContainerViewDetailsImg image={image} />
    </S.ContainerViewDetails>
  );
};

export { ViewDetails };
