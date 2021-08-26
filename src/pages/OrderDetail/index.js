import React, { useContext } from "react";
import { UserContext } from "../../contexts";
import * as S from "./styles";

const OrderDetail = () => {
  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  return (
    <>
      <S.HeaderDesktop logged={logged} />
      <S.MainContainer>Teste</S.MainContainer>

      <S.TabBarMobile />
    </>
  );
};

export default OrderDetail;
