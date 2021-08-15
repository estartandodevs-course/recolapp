import Recycling from "../../../assets/img/illustrations/recycling.svg";
import * as S from "./styles";

const Step5 = () => {
  return (
    <>
      <span>Agendamento realizado com sucesso!</span>
      <img src={Recycling} alt="recycling ilustration" />
      <S.button>Voltar para tela inicial</S.button>
    </>
  );
};

export default Step5;
