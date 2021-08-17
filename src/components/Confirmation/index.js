import * as S from "./styles";

const Confirmation = ({ message, img, buttonMessage, onClick, alt }) => {
  return (
    <S.ConfirmationContainer>
      <S.ConfirmationText>{message}</S.ConfirmationText>
      <S.ConfirmationImg src={img} alt={alt} />
      <S.ConfirmationButton onClick={onClick}>
        {buttonMessage}
      </S.ConfirmationButton>
    </S.ConfirmationContainer>
  );
};

export { Confirmation };
