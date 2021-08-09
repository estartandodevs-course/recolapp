import * as S from "./styles";
import confirmImg from "../../assets/img/illustrations/agend_confirmado.svg";

const Confirmation = ({
  message,
  img,
  buttonMessage,
}) => {
  return (
    <S.PageContainer>
      <S.ConfirmationText>{message}</S.ConfirmationText>
      <S.ConfirmationImg src={img} />
      <S.ConfirmationButton>{buttonMessage}</S.ConfirmationButton>
    </S.PageContainer>
  );
};

export default Confirmation;
