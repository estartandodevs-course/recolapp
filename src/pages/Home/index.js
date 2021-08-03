import React from "react";

import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";

import * as S from "./styles";

import image from "../../assets/img/illustrations/tela_inicial.svg";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <S.Container>
        <S.Title>Faça parte dessa iniciativa!</S.Title>
        <S.Img src={image} alt="homeScreen" />
        <S.ContainerBottom>
          <Button onClick={() => history.push("/register")}>Cadatrar</Button>
          <S.Pragraph>Já possuo cadastro</S.Pragraph>
          <S.RedirectLogin onClick={() => history.push("/login")}>
            Fazer login
          </S.RedirectLogin>
        </S.ContainerBottom>
      </S.Container>
    </>
  );
};

export default Home;
