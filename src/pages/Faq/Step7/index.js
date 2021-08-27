import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step7 = ({ firstPage }) => {
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
                Os catadores são os que organizam os materiais para a
                reciclagem. Eles coletam, separam, transportam e acondicionam.
                <br />
                <br />
                Torna-se um catador é sinônimo de fonte de renda para as camadas
                mais pobres do Brasil. As cooperativas e os catadores são
                responsáveis por aproximadamente 20% do volume entregue para os
                aparistas.
                <br />
                <br />
                Portanto é uma das profissões essenciais para que o processo de
                reciclagem no país funcione bem.
              </S.ContentSpan>
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarFaq />
    </>
  );
};
export { Step7 };
