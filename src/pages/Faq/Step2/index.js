import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import * as S from "./styles";

const Step2 = ({ firstPage }) => {
  return (
    <>
      <S.body>
        <S.backb handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.mainTextAling>
          <S.mainSpan>O que é reciclável?</S.mainSpan>
        </S.mainTextAling>
        <S.pageContent>
          <img src={WomanRecy} alt="woman recycling" />
          <S.contentSpan>
            Resíduos descartados que podem retornar à cadeia produtiva para
            virar o mesmo produto ou produtos diferentes dos originais, como a
            maioria dos papéis, vidros e plásticos, papelão e alumínio. Estes
            podem ser separados e entregues à coleta seletiva. Já o lixo
            eletrônico pode ser reciclado, após triagem, e deve ser descartado
            em pontos específicos com essa finalidade..
          </S.contentSpan>
        </S.pageContent>
      </S.body>
    </>
  );
};
export default Step2;
