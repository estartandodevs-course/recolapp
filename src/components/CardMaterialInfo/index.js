import React from "react";

import * as S from "./styles";

import { checkMark } from "../../assets/img/icons";

function MaterialInfo({ info, ...rest }) {
  return (
    <>
      <S.ContainerMaterialInfo {...rest}>
        <S.TitleContainer>Materiais a serem recolhidos:</S.TitleContainer>
        {info?.map((element) => {
          return (
            <S.MaterialData>
              <S.ContainerInfo>
                {element.material}: {element.weight}
              </S.ContainerInfo>
              <S.ContainerCheck>
                <S.CheckMark src={checkMark}></S.CheckMark>
              </S.ContainerCheck>
            </S.MaterialData>
          );
        })}
      </S.ContainerMaterialInfo>
    </>
  );
}

export { MaterialInfo };
