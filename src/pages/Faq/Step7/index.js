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
              </S.contentSpan>
            </S.pageContent>
          </S.desktopContainer>
        </S.desktopAling>
      </S.body>
    </>
  );
};
export default Step7;
