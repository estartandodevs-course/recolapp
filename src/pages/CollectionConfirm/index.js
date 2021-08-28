import { useHistory, useParams } from "react-router-dom";

import { Confirmation } from "../../components/Confirmation";
import { collectionConfirmation } from "../../assets/img/illustrations/index";
import { removeCollection } from "../../services/recycleCollection.service";

const CollectConfirm = () => {
  const history = useHistory();
  const { id } = useParams();

  removeCollection(id);

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

export default CollectConfirm;
