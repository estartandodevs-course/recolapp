import { useHistory } from "react-router-dom";

import * as S from "./styles";

import image from "../../assets/img/illustrations/tela_inicial.svg";
import { recicle, location } from "../../assets/img/icons";
import { homeWeb } from "../../assets/img/illustrations";

const Introduction = () => {
  const history = useHistory();

  return (
    <S.ContainerAll>
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

      <S.ContainerWeb>
        <S.ContainerWebLeft>
          <S.TitleWeb>Faça parte da nossa iniciativa!</S.TitleWeb>
          <S.Underline />
          <S.Presentation>
            <strong>Prazer, somos a Recolapp!</strong>
            <br />
            Uma iniciativa que ajuda MEIs e Microempresas a se conectarem com
            cooperativas de reciclagem para que seus resíduos sejam coletados e
            reciclados.
          </S.Presentation>
          <S.OrderCollection>
            <S.OrdemCollectionImg src={location} />
            <S.OrdemCollectionText>
              Solicite uma coleta dos seus resíduos
            </S.OrdemCollectionText>
          </S.OrderCollection>
          <S.Questions>
            <S.QuestionsImg src={recicle} />
            <S.QuestionsText>
              Tire suas dúvidas sobre que resíduos são recicláveis
            </S.QuestionsText>
          </S.Questions>
        </S.ContainerWebLeft>
        <S.ContainerWebRight>
          <S.MainRight>
            <S.MainImage src={homeWeb} />
            <S.TextMei>
              Se você é MEI, microempresário ou uma Cooperativa de reciclagem,
              junte-se a nós e participe desse movimento!
            </S.TextMei>
          </S.MainRight>
          <S.ButtonHomeWeb onClick={() => history.push("/register")}>
            Cadastrar
          </S.ButtonHomeWeb>
        </S.ContainerWebRight>
      </S.ContainerWeb>
      {/* <S.FooterWeb> &copy; 2021 Recolapp</S.FooterWeb> */}
    </S.ContainerAll>
  );
};

export default Introduction;
