import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { SelectMaterial } from "../../../components/SelectMaterial";
import { recyclablematerials } from "../../../mock/RecyclableMaterials/RecyclableMaterials";
import { TabBar } from "../../../components/TabBar";

import * as S from "./styles";

const Step1 = ({ nextPage }) => {
  const selectedByStorage = JSON.parse(localStorage.getItem("material"));

  const [material, setMaterial] = useState(recyclablematerials);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  useEffect(() => {
    if (selectedByStorage) setMaterial(selectedByStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("material", JSON.stringify(material));
    setSelectedMaterial(material.filter((_material) => _material.status));
  }, [material]);

  const materialsQuantity = selectedMaterial.length;
  return (
    <>
      <S.body>
        <S.backb pageTitle="Informe os materiais que serão coletados" />
        <S.materialselect>
          <span>Escolha quantas opções desejar.</span>
          <SelectMaterial material={material} setMaterial={setMaterial} />
        </S.materialselect>
        <S.bottonpage>
          <S.itensselected>
            <S.indicator>Itens selecionados</S.indicator>
            <S.spannum>{materialsQuantity}</S.spannum>
          </S.itensselected>
          <S.button onClick={nextPage}>Confirme</S.button>
        </S.bottonpage>
      </S.body>
      <TabBar />
    </>
  );
};
export default Step1;
