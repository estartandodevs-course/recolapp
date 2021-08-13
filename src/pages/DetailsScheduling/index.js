import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import * as S from "./styles";

import states from "../../assets/img/icons/icon_clock.svg";

import { users } from "../../mock/users";

const DetailsScheduling = () => {
  const history = useHistory();
  const { id } = useParams();

  const info = [
    {
      material: "Vidro",
      weight: `${33}kg`,
    },
    {
      material: "Plástico",
      weight: `${5}kg`,
    },
  ];

  const data = users.filter((user) => user.collection.id === parseInt(id));

  const [userEnd, setUserEnd] = useState([]);

  useEffect(() => {
    data.map((previous) => setUserEnd(previous));
  }, []);

  const { name, office } = userEnd;

  return (
    <>
      <S.DSContainerAll key={name}>
        <S.DSBackButton pageTitle="Detalhes do agendamento" />
        <S.DSContainer>
          <S.DSMaterialInfo info={info} />
          <S.DSScheduling />
          <S.DSUserData name={name} office={office} />
          <S.DSCollectionStates>
            {name ? "Coleta em andamento" : "Procura em andamento"}
            <S.DSCollectionStatesImg image={states} />
          </S.DSCollectionStates>
          <S.DSConfirmCollection
            HaveUser={name}
            onClick={() => history.push("/confirm")}
          >
            Coleta realizada
          </S.DSConfirmCollection>
          <S.DSCancelCollection
            onClick={() => history.push(name ? "/cancel1" : "/cancel2")}
          >
            {name ? "Cancelar coleta" : "Cancelar solicitação"}
          </S.DSCancelCollection>
        </S.DSContainer>
        <S.DSTabBar />
      </S.DSContainerAll>
    </>
  );
};

export default DetailsScheduling;
