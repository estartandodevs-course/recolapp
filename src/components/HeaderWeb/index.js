import { useHistory } from "react-router-dom";

import * as S from "./styles";

import logo from "../../assets/img/icons/logo_recolapp.svg";
import profile from "../../assets/img/illustrations/perfil_coletor.svg";

const HeaderWeb = ({ logged = false, ...rest }) => {
  const history = useHistory();
  return (
    <S.ContainerHeaderWeb {...rest}>
      <S.HeaderWebLogo
        src={logo}
        onClick={() => history.push(logged ? "/home" : "/")}
      />

      <S.HeaderWebCenterText>
        <S.HeaderWebLoggedCollect
          logged={logged}
          onClick={() => history.push("/home")}
        >
          Início
        </S.HeaderWebLoggedCollect>
        <S.HeaderWebWhoWeAre>Quem somos</S.HeaderWebWhoWeAre>
        <S.HeaderWebFrequentlyDoubts onClick={() => history.push("/faq")}>
          Dúvidas Frequentes
        </S.HeaderWebFrequentlyDoubts>
      </S.HeaderWebCenterText>

      <S.HeaderWebRight logged={logged}>
        <S.HeaderWebButtonRegister onClick={() => history.push("/register")}>
          Criar Conta
        </S.HeaderWebButtonRegister>
        <S.HeaderWebButtonLogin onClick={() => history.push("/login")}>
          Entrar
        </S.HeaderWebButtonLogin>
      </S.HeaderWebRight>

      <S.HeaderWebLogged logged={logged}>
        <S.HeaderWebLoggedImage
          src={profile}
          onClick={() => history.push("/profile")}
        />
      </S.HeaderWebLogged>
    </S.ContainerHeaderWeb>
  );
};

export { HeaderWeb };
