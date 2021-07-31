import React from "react";

import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";

import * as S from "./styles";

import image from "../../assets/img/illustrations/tela_inicial.png";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <S.Container>
        <S.Title>Faça parte dessa iniciativa!</S.Title>
        <S.Img src={image} alt="homeScreen" />
        <S.ContainerBottom>
          <Button
            onClick={() => history.push("/register")}
            bgColor="#008000"
            width="85%"
          >
            Cadatrar
          </Button>
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
