import React from "react";

import * as S from "./styles";

function Modal({
  text = "Você confirma o cancelamento da coleta?",
  confirm = "Sim",
  deny = "Não",
  width = "100%",
  action,
  onClick,
  ...rest
}) {
  return (
    <>
      <S.ContainerModal width={width} {...rest}>
        <S.ModalTitle>{text}</S.ModalTitle>
        <S.ActionModal>
          <S.YesButtom>{confirm}</S.YesButtom>
          <S.NoButtom>{deny}</S.NoButtom>
        </S.ActionModal>
      </S.ContainerModal>
    </>
  );
}

export { Modal };
