import React from "react";
import { useHistory } from "react-router-dom";
import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";
import { TabBar } from "../../components/TabBar";
import * as S from "./styles";

const HomeE = () => {
  const history = useHistory();

  return (
    <>
      <S.PageE>
        <S.BackButtonHE pageTitle="Sair" />
        <S.FirstText>Olá antônio!</S.FirstText>
        <S.mid>
          <S.image src={ilustration} alt="bussines man" />
          <S.ButtonF onClick={() => history.push("/request-collection")}>
            Solicitar coleta
          </S.ButtonF>
          <S.ButtonF onClick={() => history.push("/scheduling")}>
            Agendamentos
          </S.ButtonF>
        </S.mid>
        <TabBar />
      </S.PageE>
    </>
  );
};
export default HomeE;
