import * as S from "./styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Button } from "../../components/Button";
import { TabBar } from "../../components/TabBar";
import { SelectMessage } from "../../components/SelectMessage";

const Cancelled = () => {
  const history = useHistory();
  const options = [
    {
      text: "Infelizmente tive um imprevisto e não poderei recebê-lo.",
      status: false,
      show: true,
    },
    {
      text: "Vou precisar agendar em outro horário.",
      status: false,
      show: true,
    },
    {
      text: "",
      status: false,
      show: false,
    },
  ];

  const [message, setMessage] = useState(options);

  useEffect(() => {}, [message]);

  return (
    <>
      <S.ContainerCancelled>
        <S.Title>Sua coleta foi CANCELADA.</S.Title>
        <S.SubTitle>
          Para deixar uma mensagem para o Coletor, basta clicar em alguma das
          opções abaixo:
        </S.SubTitle>
        <S.ContainerOptions>
          <SelectMessage message={message} setMessage={setMessage} />
        </S.ContainerOptions>
        <Button>Confirmar mensagem</Button>
      </S.ContainerCancelled>
      <TabBar />
    </>
  );
};

export default Cancelled;
