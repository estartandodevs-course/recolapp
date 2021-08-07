import React from "react";

import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";
import * as S from "./styles";
import { PageE } from "../Home/styles";

const HomeE = () => {
  return (
    <PageE>
      <S.BackButton pageTitle="Sair" />
      <S.span>Ola antonio</S.span>
      <img src={ilustration} alt="bussines man" />
      <S.Button>Solicitar coleta</S.Button>
      <S.Button>Agendamentos</S.Button>
      {/* < aba de incones /> */}
    </PageE>
  );
};
export default HomeE;
