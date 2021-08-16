import React from "react";
import { useHistory } from "react-router-dom";

import { Confirmation } from "../../components/Confirmation";
import { collectionConfirmation } from "../../assets/img/illustrations/index";

const CollectionConfirm = () => {
  const history = useHistory();
  return (
    <>
      <Confirmation
        message="Coleta realizada com sucesso!"
        img={collectionConfirmation}
        alt="foto"
        buttonMessage="Voltar para tela inicial"
        onClick={() => history.push("/home")}
      />
    </>
  );
};

export default CollectionConfirm;
