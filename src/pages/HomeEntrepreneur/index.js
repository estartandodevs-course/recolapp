import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../contexts";

import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";
import { TabBar } from "../../components/TabBar";

import * as S from "./styles";

const HomeEntrepreneur = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  return (
    <>
      <S.PageE>
        <S.BackButtonHE pageTitle="Sair" />
        <S.FirstText>{`Olá ${user?.name}`}</S.FirstText>
        <S.mid>
          <S.image src={ilustration} alt="bussines man" />
          <S.ButtonF onClick={() => history.push("/request-collection")}>
            Solicitar coleta
          </S.ButtonF>
          <S.ButtonF onClick={() => history.push("/schedules")}>
            Agendamentos
          </S.ButtonF>
        </S.mid>
      </S.PageE>
      <TabBar />
    </>
  );
};
export default HomeEntrepreneur;
