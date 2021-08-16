import * as S from "./styles";

const SelectMessage = ({ message, setMessage, ...rest }) => {
  const onClick = (element) => {
    setMessage((previous) => {
      return previous.map((item) => {
        if (item.text == element.text) {
          return { ...item, status: !item.status };
        }
        return item;
      });
    });
  };
  return (
    <>
      <S.ContainerAllMessages {...rest}>
        {message?.map((element) => {
          return (
            <>
              {element.show ? (
                <S.ContainerMessage
                  key={element.text}
                  status={element.status}
                  onClick={() => onClick(element)}
                >
                  <S.MessageText>{element?.text}</S.MessageText>
                </S.ContainerMessage>
              ) : (
                <S.InputCancelled
                  label="Outro:"
                  bgColor={element.status ? "#F28E36" : "#FDE5D7"}
                  key={element.text}
                  onClick={() => onClick(element)}
                />
              )}
            </>
          );
        })}
      </S.ContainerAllMessages>
    </>
  );
};

export { SelectMessage };
