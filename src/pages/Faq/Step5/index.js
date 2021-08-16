import WomanRecy from "../../../assets/img/icons/icon_arrow_left.svg";
import * as S from "./styles";

const Step5 = (backPage) => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <S.mainSpan>O que fazer para facilitar a separação?</S.mainSpan>
        <img src={WomanRecy} alt="woman recycling" />
        <span>
          Para facilitar a separação existe a coleta seletiva, e a separação
          através das cores. No Brasil as cores possuem as seguintes
          classificações:
        </span>
        <br />
        <p>Azul: papel/papelão</p>
        <p>Vermelho: plástico </p>
        <p>Verde: vidro </p>
        <p> Amarelo: metal</p>
        <p> Preto: madeira</p>
        <p> Laranja: resíduos perigosos</p>
        <p>Branco: resíduos dos serviços de saúde</p>
        <p> Roxo: resíduos radioativos</p>
        <p> Marrom: resíduos orgânicos</p>
        <p>Cinza: resíduo geral não reciclável</p>
      </div>
    </>
  );
};
export default Step5;
