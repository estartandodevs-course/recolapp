import { useHistory } from "react-router-dom";

import * as S from "./styles";

function Modal({
  text = "Você confirma o cancelamento da coleta?",
  confirm = "Sim",
  deny = "Não",
  width = "100%",
  action,
  onClick,
  showModal,
  setShowModal,
  id = "",
  ...rest
}) {
  const history = useHistory();

  return (
    <>
      {showModal && (
        <S.ModalOut
          onClick={() => setShowModal((previous) => !previous)}
          {...rest}
        >
          <S.ContainerModal width={width} onClick={(e) => e.stopPropagation()}>
            <S.ModalTitle>{text}</S.ModalTitle>
            <S.ActionModal>
              <S.YesButtom onClick={() => history.push(`/cancelled/${id}`)}>
                {confirm}
              </S.YesButtom>
              <S.NoButtom onClick={() => setShowModal((previous) => !previous)}>
                {deny}
              </S.NoButtom>
            </S.ActionModal>
          </S.ContainerModal>
        </S.ModalOut>
      )}
    </>
  );
}

export { Modal };
