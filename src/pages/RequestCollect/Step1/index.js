import React, { useState, useEffect, useContext } from "react";

import { getDefaultMaterials } from "../../../services/materials.service";
import { UserContext } from "../../../contexts";

import * as S from "./styles";

const Step1 = ({ nextPage, order, setOrder }) => {
  const [material, setMaterial] = useState(order);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (!order?.length) {
      const materialsDefault = getDefaultMaterials();
      setMaterial(materialsDefault);
    }
  }, []);

  const orderFilter = material?.filter((item) => item.status);
  const materialsQuantity = orderFilter?.length;

  useEffect(() => {
    setOrder(material);
    setDisable(materialsQuantity <= 0);
  }, [material]);

  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  return (
    <>
      <S.HeaderWebRequest logged={logged} />
      <S.Body>
        <S.BackB pageTitle="Informe os materiais que serão coletados" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.MaterialSelect>
              <S.MaterialSpan>Escolha quantas opções desejar.</S.MaterialSpan>
              <S.SelectMaterialRerquest
                material={material}
                setMaterial={setMaterial}
              />
            </S.MaterialSelect>
            <S.BottonPage>
              <S.ItensSelected>
                <S.Indicator>Itens selecionados</S.Indicator>
                <S.SpanNum>{materialsQuantity}</S.SpanNum>
              </S.ItensSelected>
              <S.ButtonConfirm disable={disable} onClick={nextPage}>
                Confirme
              </S.ButtonConfirm>
            </S.BottonPage>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarRequest />
    </>
  );
};
export default Step1;
