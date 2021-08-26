import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import * as S from "./styles";

const OrderDetail = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  return (
    <>
      <S.HeaderDesktop logged={logged} />
      <S.MainContainer>
        <S.ButtonYes onClick={() => history.push("/collection-accepted")}>
          Sim, quero realizar
        </S.ButtonYes>
        <S.ButtonNo
          bgColor="#F28E36"
          onClick={() => history.push("/collection-denied")}
        >
          Não, obrigado
        </S.ButtonNo>
      </S.MainContainer>

      <S.TabBarMobile />
    </>
  );
};

export default OrderDetail;
