import React from "react";
import { useHistory } from "react-router-dom";
import { Confirmation } from "../../components/Confirmation";
import { collectionConfirmation } from "../../assets/img/illustrations/index";

const CollectionAccepted = () => {
  const history = useHistory();
  return (
    <>
      <Confirmation
        message="Parabéns!
        Você aceitou o pedido de coleta da Confeitaria Docinho."
        img={collectionConfirmation}
        alt="foto"
        buttonMessage="Voltar para tela inicial"
        onClick={() => history.push("/home")}
      />
    </>
  );
};

export default CollectionAccepted;
