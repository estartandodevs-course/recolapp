import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Confirmation } from "../../components/Confirmation";
import { collectionConfirmation } from "../../assets/img/illustrations/index";
import { setCollectionCollector } from "../../services/recycleCollection.service";
import { UserContext } from "../../contexts";

const CollectionAccepted = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  setCollectionCollector(id, user?.id);

  return (
    <>
      <Confirmation
        message="Parabéns!
        Você aceitou o pedido!"
        img={collectionConfirmation}
        alt="foto"
        buttonMessage="Voltar para tela inicial"
        onClick={() => history.push("/home")}
      />
    </>
  );
};

export default CollectionAccepted;
