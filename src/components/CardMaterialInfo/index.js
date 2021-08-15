/* eslint-disable */

import React from "react";

import * as S from "./styles";

import { checkMark } from "../../assets/img/icons";

const MaterialInfo = ({ info, width, ...rest }) => {
  return (
    <>
      <S.ContainerMaterialInfo width={width} {...rest}>
        <S.TitleContainer>Materiais a serem recolhidos:</S.TitleContainer>
        {info?.map((element) => {
          return (
            <S.MaterialData key={element.name}>
              <S.ContainerInfo>
                {element.name}: {element.weight} kg
              </S.ContainerInfo>
              <S.ContainerCheck>
                <S.CheckMark src={checkMark} />
              </S.ContainerCheck>
            </S.MaterialData>
          );
        })}
      </S.ContainerMaterialInfo>
    </>
  );
};

export { MaterialInfo };
