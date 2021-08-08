import * as S from "./styles";
import confirmImg from "../../assets/img/illustrations/agend_confirmado.svg";

const Confirmation = () => {
  return (
    <S.PageContainer>
      <S.ConfirmationText>Agendamento realizado com sucesso</S.ConfirmationText>
      <S.ConfirmationImg src={confirmImg} />
      <S.ConfirmationButton>Voltar para a tela inicial</S.ConfirmationButton>
    </S.PageContainer>
  );
};

export default Confirmation;
