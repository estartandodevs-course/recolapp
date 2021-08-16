import React from "react";
import { useHistory } from "react-router-dom";

import { Confirmation } from "../../components/Confirmation";
import { sentMessage } from "../../assets/img/illustrations/index";

const CollectCancelled = () => {
  const history = useHistory();
  return (
    <>
      <Confirmation
        message="Sua mensagem foi enviada com sucesso!"
        img={sentMessage}
        alt="foto"
        buttonMessage="Voltar para tela inicial"
        onClick={() => history.push("/home")}
      />
    </>
  );
};

export default CollectCancelled;
