import React from "react";
import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";
import { TabBar } from "../../components/TabBar";
import * as S from "./styles";

const HomeE = () => {
  return (
    <S.PageE>
      <S.BackButtonHE pageTitle="Sair" />
      <S.FirstText>Olá antônio!</S.FirstText>
      <S.mid>
        <S.image src={ilustration} alt="bussines man" />
        <S.ButtonF>Solicitar coleta</S.ButtonF>
        <S.ButtonF>Agendamentos</S.ButtonF>
      </S.mid>
      <TabBar />
    </S.PageE>
  );
};
export default HomeE;
