import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";

import * as S from "./styles";

import { SelectMessage } from "../../components/SelectMessage";

const JustifyCancellation = () => {
  const history = useHistory();
  const options = [
    "Infelizmente tive um imprevisto e não poderei recebê-lo.",
    "Vou precisar agendar em outro horário.",
  ];

  const [selectedMessage, setSelectedMessage] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  const disable = selectedMessage.length === 0 && otherMessage.length === 0;

  const handleOtherMessage = (event) => {
    const newMessage = event.target.value;
    setOtherMessage(newMessage);
    setSelectedMessage("");
  };

  const handleSelectedMessage = (text) => {
    setSelectedMessage(text);
    setOtherMessage("");
  };

  const { user } = useContext(UserContext);
  const logged = user?.name;

  return (
    <>
      <S.HeaderWebCancelled logged={logged} />
      <S.ContainerCancelled>
        <S.ContainerMain>
          <S.Title>Sua coleta foi CANCELADA.</S.Title>
          <S.SubTitle>
            Para deixar uma mensagem para o Coletor, basta clicar em alguma das
            opções abaixo:
          </S.SubTitle>
          <S.ContainerOptions>
            <SelectMessage
              messages={options}
              selectedMessage={selectedMessage}
              onClick={handleSelectedMessage}
            />
            <S.InputCancelled
              label="Outro:"
              labelColor="#000000"
              value={otherMessage}
              bgColor={otherMessage.length > 0 ? "#F28E36" : "#FDE5D7"}
              onChange={handleOtherMessage}
              placeholder="Deixe uma outra mensagem para o coletor"
            />
          </S.ContainerOptions>
          <S.ButtonCancelled
            disable={disable}
            onClick={() => history.push("/collect-cancelled")}
          >
            Confirmar mensagem
          </S.ButtonCancelled>
        </S.ContainerMain>
      </S.ContainerCancelled>
      <S.TabBarCancelled />
    </>
  );
};

export default JustifyCancellation;
