import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step6 = ({ firstPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;
  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.body>
        <S.backb handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.desktopAling>
          <S.desktopContainer>
            <S.mainTextAling>
              <S.mainSpan>Como a reciclagem beneficia as empresas?</S.mainSpan>
            </S.mainTextAling>
            <S.pageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.contentSpan>
                A reciclagem é geradora de riquezas, pois a empresa reduz custos
                no seu processo de produto e ainda lucra com a venda dos
                resíduos que não poderão mais serem utilizados, mas são úteis
                para cooperativas e catadores. Além de melhorar a imagem frente
                a sociedade e acionistas.
                <br />
                <br />
                Outro aspecto positivo é que algumas das normas e leis
                ambientais exigem a destinação correta dos resíduos gerados
                pelas empresas, a reciclagem é um dos métodos mais bem visto
                devido aos benefícios gerados.
              </S.contentSpan>
            </S.pageContent>
          </S.desktopContainer>
        </S.desktopAling>
      </S.body>
    </>
  );
};
export default Step6;
