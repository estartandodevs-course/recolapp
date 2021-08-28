import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import { getCollectionsInZone } from "../../services/recycleCollection.service";

import * as S from "./styles";

const SearchCollect = () => {
  const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionID, setCollectionID] = useState(undefined);
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const collectionsResponse = await getCollectionsInZone(user?.city);
      setCollections(collectionsResponse);
    })();
  }, []);

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
        <S.Body>
          <S.ContainerSC>
            {collections.length ? (
              <>
                <S.ContainerTitle>
                  <S.ContainerNumRes>{countResult}</S.ContainerNumRes>
                  <S.ResultsName>{isResultPlural}</S.ResultsName>
                </S.ContainerTitle>
                <S.ResultSection>
                  {collections?.map(({ author, id, street }) => {
                    return (
                      <S.ContainerResults
                        key={id}
                        selected={id === selectedCollection}
                        onClick={() => onClick(id)}
                      >
                        <S.Company>{author?.name}</S.Company>
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
          <S.ContainerButton>
            <S.ButtonSC
              disable={disable}
              onClick={() => history.push(`/order-detail/${collectionID}`)}
            >
              Continuar
            </S.ButtonSC>
          </S.ContainerButton>
        </S.Body>
      </S.MainContainer>
      <S.TabBarSelCollection />
    </>
  );
};

export default SearchCollect;
