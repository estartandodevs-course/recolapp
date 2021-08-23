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

  const logged = user?.name || false;

  return (
    <>
      <S.HeaderWebRequest logged={logged} />
      <S.DesktopContainer>
        <S.DesktopAling>
          <S.Body>
            <S.Title>Agendamento realizado com sucesso!</S.Title>
            <S.Ilustration src={Recycling} alt="recycling ilustration" />
            <S.ButtonFinish onClick={() => history.push("/home")}>
              Voltar para tela inicial
            </S.ButtonFinish>
          </S.Body>
        </S.DesktopAling>
      </S.DesktopContainer>
    </>
  );
};

export default Step5;
