import * as S from "./styles";
import myCollections from "../../assets/img/illustrations/meus_agendamentos.svg";
import { ViewDetails } from "../../components/ViewDetails";
import { TabBar } from "../../components/TabBar";

const ScheduledCollections = () => {
  return (
    <S.CollectionsContainer>
      <S.CollectionsButton pageTitle="Meus agendamentos" />
      <S.CollectionsImg src={myCollections} />
      <ViewDetails />
      <TabBar />
    </S.CollectionsContainer>
  );
};

export default ScheduledCollections;
