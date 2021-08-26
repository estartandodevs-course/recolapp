import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step5 = ({ firstPage }) => {
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
              <S.MainSpan>O que fazer para facilitar a separação?</S.MainSpan>
            </S.MainTextAling>
            <S.PageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.ContentSpan>
                Para facilitar a separação existe a coleta seletiva, e a
                separação através das cores. No Brasil as cores possuem as
                seguintes classificações:
                <br />
                <br />
                Azul: papel/papelão
                <br />
                Vermelho: plástico
                <br />
                Verde: vidro
                <br />
                Amarelo: metal
                <br />
                Preto: madeira
                <br />
                Laranja: resíduos perigosos
                <br />
                Branco: resíduos dos serviços de saúde
                <br />
                Roxo: resíduos radioativos
                <br />
                Marrom: resíduos orgânicos
                <br />
                Cinza: resíduo geral não reciclável
                <br />
              </S.ContentSpan>
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarFaq />
    </>
  );
};
export { Step5 };
