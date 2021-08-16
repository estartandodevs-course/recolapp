import WomanRecy from "../../../assets/img/icons/icon_arrow_left.svg";
import * as S from "./styles";

const Step4 = (backPage) => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <span>Como separar o lixo?</span>
        <img src={WomanRecy} alt="woman recycling" />
        <span>
          Nunca misture o material reciclável e orgânico;
          <br /> Coloque os plásticos, vidros, metais e papéis em sacos
          diferentes;
          <br /> Lave e seque as embalagens que continham produtos orgânicos
          antes do descarte;
          <br /> Não amasse e nem molhe os papéis. Ao invés disso, dobre-os
          dentro do saco, diminuindo bastante o volume;
          <br /> Vidros quebrados e materiais cortantes devem ser enrolados em
          jornal ou colocados em uma caixa para evitar acidentes;
          <br /> Não coloque garrafas e frascos com vidros planos;
          <br /> Desmonte as embalagens mistas, separando as partes de metal,
          plástico e vidro, por exemplo, e distribua nos sacos corretos.
        </span>
        {/* <p> Nunca misture o material reciclável e orgânico;</p>
        <p>
          Coloque os plásticos, vidros, metais e papéis em sacos diferentes;
        </p>
        <p>
          Lave e seque as embalagens que continham produtos orgânicos antes do
          descarte;
        </p>
        <p>
          Não amasse e nem molhe os papéis. Ao invés disso, dobre-os dentro do
          saco, diminuindo bastante o volume;
        </p>
        <p>
          Vidros quebrados e materiais cortantes devem ser enrolados em jornal
          ou colocados em uma caixa para evitar acidentes;
        </p>
        <p>Não coloque garrafas e frascos com vidros planos;</p>
        <p>
          Desmonte as embalagens mistas, separando as partes de metal, plástico
          e vidro, por exemplo, e distribua nos sacos corretos.
        </p> */}
      </div>
    </>
  );
};
export default Step4;
