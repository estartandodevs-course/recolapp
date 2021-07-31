import React from "react";
import * as S from "./styles";
import Backimg from "../../assets/img/icons/icon_arrow_left.svg";

export const BackButton = ({ pageTitle, handleBack }) => {
  return (
    <S.Section>
      <S.Img src={Backimg} onClick={handleBack} />
      <S.Pagetitle>{pageTitle}</S.Pagetitle>
    </S.Section>
  );
};
// intrucoes para o componente

// import { useHistory } from "react-router-dom";

// import { BackButton } from "../../components/BackButtom";

// const App = () => {
//   const history = useHistory();

//   const handleBack = () => history.goBack();

//   return (
//     <div>
//       <BackButton pageTitle="testando" handleBack={handleBack} />
//     </div>
//   );
// };
