import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import { getCollectionsInZone } from "../../services/recycleCollection.service";
import { getUserById } from "../../services/users.service";

import * as S from "./styles";

const SearchCollect = () => {
  const [userEnd, setUserEnd] = useState("");

  const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionID, setCollectionID] = useState(undefined);
  const history = useHistory();
  const { user } = useContext(UserContext);
  const collections = getCollectionsInZone(user?.city);

  const onClick = (collect_id) => {
    setSelectedCollection(collect_id);
    setCollectionID(collect_id);
  };

  const disable = selectedCollection === "" || collectionID === undefined;

  const logged = user?.name;

  const countResult = collections.length;
  const isResultPlural = `Resultado${countResult === 1 ? "" : "s"}`;

  return (
    <>
      <S.HeaderWebSelCollection logged={logged} />
      <S.MainContainer>
        <S.BackButtonSC pageTitle="Aqui estão as solicitações de coleta na sua região:" />

        <S.ContainerSC>
          {collections.length ? (
            <>
              <S.ContainerTitle>
                <S.ContainerNumRes>{countResult}</S.ContainerNumRes>
                <S.ResultsName>{isResultPlural}</S.ResultsName>
              </S.ContainerTitle>
              <S.ResultSection>
                {collections?.map(({ user_id, collection_id, street }) => {
                  useEffect(() => {
                    const fetchUser = async () => {
                      const response = await getUserById(user_id);
                      setUserEnd(response);
                    };
                    fetchUser();
                  }, []);

                  const { name } = userEnd;

                  return (
                    <S.ContainerResults
                      key={collection_id}
                      selected={collection_id === selectedCollection}
                      onClick={() => onClick(collection_id)}
                    >
                      <S.Company>{name}</S.Company>
                      <S.Address>{street}</S.Address>
                    </S.ContainerResults>
                  );
                })}
              </S.ResultSection>
            </>
          ) : (
            <S.CollectionsEmpty>
              Infelizmente não há coleta(s) na sua região!
            </S.CollectionsEmpty>
          )}
        </S.ContainerSC>

        <S.ButtonSC
          disable={disable}
          onClick={() => history.push(`/order-detail/${collectionID}`)}
        >
          Continuar
        </S.ButtonSC>
      </S.MainContainer>
      <S.TabBarSelCollection />
    </>
  );
};

export default SearchCollect;
