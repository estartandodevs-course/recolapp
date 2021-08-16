import Backimg from "../../assets/img/icons/icon_arrow_left.svg";

const Step3 = () => {
  return (
    <>
      <S.backb handleBack={backPage} pageTitle="Dúvidas Frequentes" />
      <div>
        <span>O que não é reciclável?</span>
        <img src={Woman_recy} alt="woman recycling" />
        <span>
          Materiais como: papel-carbono, etiqueta adesiva, fita crepe,
          guardanapos, fotografias, filtro de cigarros, papéis sujos, papéis
          sanitários, copos de papel, cabos de panela e tomadas, clipes,
          grampos, esponjas de aço, canos, espelhos, cristais, cerâmicas,
          porcelana, pilhas e baterias de celular.
          <br />
          Materiais não recicláveis, como pilhas, baterias, lâmpadas
          incandescentes e fluorescentes, óleo de cozinha, entre outros, devem
          ser descartados em locais apropriados, senão prejudicam o meio
          ambiente.
        </span>
      </div>
    </>
  );
};
export default Step3;
