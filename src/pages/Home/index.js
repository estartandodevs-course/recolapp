import { useHistory } from "react-router-dom";

import * as S from "./styles";

import image from "../../assets/img/illustrations/tela_inicial.svg";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <S.HeaderDesktop />
      <S.HeaderMobile />
      <S.Container>
        <S.Title>Faça parte dessa iniciativa!</S.Title>
        <S.Img src={image} alt="homeScreen" />
        <S.ButtonHome onClick={() => history.push("/register")}>
          Cadastrar
        </S.ButtonHome>
        <S.Pragraph>Já possuo cadastro</S.Pragraph>
        <S.RedirectLogin onClick={() => history.push("/login")}>
          Fazer login
        </S.RedirectLogin>
      </S.Container>
    </>
  );
};

export default Home;
