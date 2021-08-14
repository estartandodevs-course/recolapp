import * as S from "./styles";
import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";
import { TabBar } from "../../components/TabBar";

const ScheduledCollections = () => {
  return (
    <>
      <S.CollectionsContainer>
        <S.CollectionsButton pageTitle="Meus agendamentos" />
        <S.CollectionsImg src={myCollections} />
        <S.ViewSettings />
        <S.ViewSettings />
      </S.CollectionsContainer>
      <TabBar />
    </>
  );
};

export default ScheduledCollections;
