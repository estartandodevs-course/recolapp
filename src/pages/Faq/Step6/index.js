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
      <S.Body>
        <S.BackB handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.MainTextAling>
              <S.MainSpan>Como a reciclagem beneficia as empresas?</S.MainSpan>
            </S.MainTextAling>
            <S.PageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.ContentSpan>
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
              </S.ContentSpan>
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarFaq />
    </>
  );
};
export { Step6 };
