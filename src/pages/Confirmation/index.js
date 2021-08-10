import * as S from "./styles";

const Confirmation = ({
  message,
  img,
  buttonMessage,
}) => {
  return (
    <S.ConfirmationContainer>
      <S.ConfirmationText>{message}</S.ConfirmationText>
      <S.ConfirmationImg src={img} />
      <S.ConfirmationButton>{buttonMessage}</S.ConfirmationButton>
    </S.ConfirmationContainer>
  );
};

export default Confirmation;
