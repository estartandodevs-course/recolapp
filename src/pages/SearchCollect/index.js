import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { UserContext } from "../../contexts";

const SearchCollect = () => {
  const infoCompany = [
    {
      company: "Confeitaria Docinho",
      address: "Rua Osvaldo Cruz, 84",
    },
    {
      company: "Confeitaria Docinho",
      address: "Rua Osvaldo Cruz, 84",
    },
    {
      company: "Confeitaria Docinho",
      address: "Rua Osvaldo Cruz, 84",
    },
    {
      company: "Confeitaria Docinho",
      address: "Rua Osvaldo Cruz, 84",
    },
  ];

  const history = useHistory();
  const [selectedCollection, setSelectedCollection] = useState("");

  const handleselectedCollection = (text) => {
    setSelectedCollection(text);
  };

  const disable = selectedCollection.length === 0;

  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  const countResult = infoCompany.length;

  const isResultPlural = `Resultado${countResult === 1 ? "" : "s"}`;

  return (
    <>
      <S.HeaderWebSelCollection logged={logged} />
      <S.MainContainer>
        <S.BackButtonSC pageTitle="Aqui estão as solicitações de coleta na sua região:" />
        <S.ContainerSC>
          <S.ContainerTitle>
            <S.ContainerNumRes>{countResult}</S.ContainerNumRes>
            <S.ResultsName>{isResultPlural}</S.ResultsName>
          </S.ContainerTitle>
          <S.ResultSection>
            {infoCompany?.map((element) => {
              return (
                <>
                  <S.ContainerResults
                    key={element}
                    onClick={handleselectedCollection}
                    selected={element === selectedCollection}
                  >
                    <S.Company>{element.company}</S.Company>
                    <S.Address>{element.address}</S.Address>
                  </S.ContainerResults>
                </>
              );
            })}
          </S.ResultSection>
        </S.ContainerSC>
        {/* <S.ButtonContainer> */}
        <S.ButtonSC
          disable={disable}
          onClick={() => history.push("/order-detail")}
        >
          Continuar
        </S.ButtonSC>
        {/* </S.ButtonContainer> */}
      </S.MainContainer>
      <S.TabBarSelCollection />
    </>
  );
};

export default SearchCollect;
