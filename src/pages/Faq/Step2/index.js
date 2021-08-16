import Backimg from "../../../assets/img/icons/icon_arrow_left.svg";
import Woman_recy from "../../../assets/img/icons/icon_arrow_left.svg";

const Step2 = () => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <span>O que é reciclável?</span>
        <img src={Woman_recy} alt="woman recycling" />
        <span>
          Resíduos descartados que podem retornar à cadeia produtiva para virar
          o mesmo produto ou produtos diferentes dos originais, como a maioria
          dos papéis, vidros e plásticos, papelão e alumínio. Estes podem ser
          separados e entregues à coleta seletiva. Já o lixo eletrônico pode ser
          reciclado, após triagem, e deve ser descartado em pontos específicos
          com essa finalidade..
        </span>
      </div>
    </>
  );
};
export default Step2;
