import * as S from "./styles";

const SelectMessage = ({ messages, selectedMessage, onClick, ...rest }) => {
  return (
    <>
      <S.ContainerAllMessages {...rest}>
        {messages?.map((message) => (
          <S.ContainerMessage
            key={message}
            selected={message === selectedMessage}
            onClick={() => onClick(message)}
          >
            <S.MessageText>{message}</S.MessageText>
          </S.ContainerMessage>
        ))}
      </S.ContainerAllMessages>
    </>
  );
};

export { SelectMessage };
