import React from "react";
import { useHistory } from "react-router-dom";
import { Confirmation } from "../../components/Confirmation";
import { collectionConfirmation } from "../../assets/img/illustrations/index";

function CollectionDenied() {
  const history = useHistory();
  return (
    <>
      <Confirmation
        message="Tudo bem, fica pra próxima!"
        img={collectionConfirmation}
        alt="foto"
        buttonMessage="Voltar para tela inicial"
        onClick={() => history.push("/home")}
      />
    </>
  );
}

export default CollectionDenied;
