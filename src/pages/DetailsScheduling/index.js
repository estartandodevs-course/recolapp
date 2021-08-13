import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

const DetailsScheduling = () => {
  const history = useHistory();

  return (
    <>
      <S.DSBackButton pageTitle="Detalhes do agendamento" />
      <S.DSContainer>
        <S.DSMaterialInfo
          info={[
            {
              material: "Vidro",
              weight: `${33}kg`,
            },
            {
              material: "Plástico",
              weight: `${5}kg`,
            },
          ]}
        />
        <S.DSScheduling />
        <S.DSConfirmCollection onClick={() => history.push("/confirm")}>
          Coleta realizada
        </S.DSConfirmCollection>
        <S.DSCancelCollection
          bgColor="#F28E36"
          onClick={() => history.push("/cancel")}
        >
          Cancelar coleta
        </S.DSCancelCollection>
      </S.DSContainer>
      <S.DSTabBar />
    </>
  );
};

export default DetailsScheduling;
