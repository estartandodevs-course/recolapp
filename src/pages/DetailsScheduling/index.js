import { useHistory } from "react-router-dom";

import * as S from "./styles";

import states from "../../assets/img/icons/icon_clock.svg";

import { getUser } from "../../services/users";

const DetailsScheduling = () => {
  const history = useHistory();
  // const { id } = useParams();

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

  const user = getUser("marioferreira@gmail.com");

  console.log("user:", user);

  // if (!user)
  //   return (
  //     <>
  //       <p>Sem u!</p>
  //     </>
  //   );

  const { name, office } = user;

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

          <S.DSConfirmTitle>A coleta foi realizada ?</S.DSConfirmTitle>

          <S.DSConfirmParagraph>
            Confirme assim que a coleta for realizada e nos ajude a sabe se deu
            tudo certo.
          </S.DSConfirmParagraph>

          <S.DSConfirmCollection
            HaveUser={name}
            onClick={() => history.push("/confirm")}
          >
            Confirmar coleta
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
