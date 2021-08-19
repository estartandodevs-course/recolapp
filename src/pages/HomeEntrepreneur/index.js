import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import { signOut } from "../../services/users/auth";
import { TabBar } from "../../components/TabBar";

import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";

import * as S from "./styles";

const HomeEntrepreneur = () => {
  const history = useHistory();

  const { user, setUser, setOrder, setOrderTimestamp } =
    useContext(UserContext);

  useEffect(() => {
    setOrder([]);
    setOrderTimestamp("");
  }, []);

  return (
    <>
      <S.PageE>
        <S.BackButtonHE
          handleBack={() => signOut(history, setUser)}
          pageTitle="Sair"
        />
        <S.FirstText>{`Olá ${user?.name}`}</S.FirstText>
        <S.mid>
          <S.image src={ilustration} alt="bussines man" />
          <S.ButtonF onClick={() => history.push("/request-collect")}>
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
