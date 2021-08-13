import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SelectMaterial } from "../../components/SelectMaterial";
import { recyclablematerials } from "../../mock/RecyclableMaterials/RecyclableMaterials";
import * as S from "./styles";

const RequestCollection = () => {
  const history = useHistory();
  const [material, setMaterial] = useState(recyclablematerials);

  return (
    <S.body>
      <S.backb pageTitle="Informe os materiais que serão coletados" />
      <S.materialselect>
        <span>Escolha quantas opções desejar.</span>
        <SelectMaterial material={material} setMaterial={setMaterial} />
      </S.materialselect>
      <S.bottonpage>
        <S.itensselected>
          <span>itens selecionados</span>
          <S.spannum>2</S.spannum>
        </S.itensselected>
        <S.button onClick={() => history.push("/")}>Confirme</S.button>
      </S.bottonpage>
    </S.body>
  );
};
export default RequestCollection;
