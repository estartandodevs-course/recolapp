import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import * as S from "./styles";

const Step5 = ({ firstPage }) => {
  return (
    <>
      <S.body>
        <S.backb handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.mainTextAling>
          <S.mainSpan>O que fazer para facilitar a separação?</S.mainSpan>
        </S.mainTextAling>
        <S.pageContent>
          <img src={WomanRecy} alt="woman recycling" />
          <S.contentSpan>
            Para facilitar a separação existe a coleta seletiva, e a separação
            através das cores. No Brasil as cores possuem as seguintes
            classificações:
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
          </S.contentSpan>
        </S.pageContent>
      </S.body>
    </>
  );
};
export default Step5;
