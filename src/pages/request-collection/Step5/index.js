/* eslint-disable */

import { useHistory } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts";
import { createCollect } from "../../../services/collections";

import * as S from "./styles";

import Recycling from "../../../assets/img/illustrations/recycling.svg";

const Step5 = ({ order, orderTimestamp }) => {
  const { user } = useContext(UserContext);

  const history = useHistory();

  const orderFilter = order?.filter((item) => item.status);

  createCollect({
    user: user,
    orderTimestamp: orderTimestamp,
    order: orderFilter,
  });

  return (
    <S.body>
      <S.warn>Agendamento realizado com sucesso!</S.warn>
      <S.ilustration src={Recycling} alt="recycling ilustration" />
      <S.button onClick={() => history.push("/home")}>
        Voltar para tela inicial
      </S.button>
    </S.body>
  );
};

export default Step5;
