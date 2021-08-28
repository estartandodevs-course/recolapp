import React, { useContext, useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../contexts";
import { getCollectByID } from "../../services/recycleCollection.service";

import * as S from "./styles";

const OrderDetail = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [collect, setCollect] = useState([]);

  useEffect(() => {
    (async () => {
      const responseCollect = await getCollectByID(id);
      setCollect(responseCollect);
    })();
  }, []);

  const logged = user?.name;

  const timestamp = new Date(parseInt(collect?.timestamp));
  const dateCollect = timestamp.toLocaleDateString("pt-BR");
  const hourCollect = timestamp.toLocaleTimeString("pt-BR").slice(0, 5);

  return (
    <>
      <S.OrderDetailsBody>
        <S.HeaderDesktop logged={logged} />

        <S.OrderDetailsBackButton pageTitle="Detalhes do pedido" />

        <S.OrderDetailsMaterialInfo info={collect?.material} />

        <S.OrderDetailsScheduling
          street={collect?.street}
          date={dateCollect}
          hour={hourCollect}
        />

        <S.OrderDetailsUserData
          hasCollector
          name={collect?.author?.name}
          office={`${collect?.author?.typeUser}`}
        />

        <S.OrderDetailsAsk>Deseja realizar a coleta?</S.OrderDetailsAsk>

        <S.ButtonYes onClick={() => history.push(`/collection-accepted/${id}`)}>
          Sim, quero realizar
        </S.ButtonYes>

        <S.ButtonNo
          bgColor="#F28E36"
          onClick={() => history.push(`/collection-denied/${id}`)}
        >
          Não, obrigado
        </S.ButtonNo>
      </S.OrderDetailsBody>
      <S.TabBarMobile />
    </>
  );
};

export default OrderDetail;
