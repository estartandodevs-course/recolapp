import WomanRecy from "../../../assets/img/icons/icon_arrow_left.svg";
import * as S from "./styles";

const Step7 = (backPage) => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <S.mainSpan>
          Qual a importancia dos catadores para a reciclagem?
        </S.mainSpan>
        <img src={WomanRecy} alt="woman recycling" />
        <span>
          Os catadores são os que organizam os materiais para a reciclagem. Eles
          coletam, separam, transportam e acondicionam. Torna-se um catador é
          sinônimo de fonte de renda para as camadas mais pobres do Brasil. As
          cooperativas e os catadores são responsáveis por aproximadamente 20%
          do volume entregue para os aparistas. Portanto é uma das profissões
          essenciais para que o processo de reciclagem no país funcione bem.
        </span>
      </div>
    </>
  );
};
export default Step7;
