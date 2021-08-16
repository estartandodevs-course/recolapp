import Backimg from "../../assets/img/icons/icon_arrow_left.svg";

const Step6 = () => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <span>Como a reciclagem beneficia as empresas?</span>
        <img src={Woman_recy} alt="woman recycling" />
        <span>
          A reciclagem é geradora de riquezas, pois a empresa reduz custos no
          seu processo de produto e ainda lucra com a venda dos resíduos que não
          poderão mais serem utilizados, mas são úteis para cooperativas e
          catadores. Além de melhorar a imagem frente a sociedade e acionistas.
          <br />
          Outro aspecto positivo é que algumas das normas e leis ambientais
          exigem a destinação correta dos resíduos gerados pelas empresas, a
          reciclagem é um dos métodos mais bem visto devido aos benefícios
          gerados.
        </span>
      </div>
    </>
  );
};
export default Step6;
