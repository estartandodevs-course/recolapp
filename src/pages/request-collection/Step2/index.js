import * as S from "./styles";
import plusicon from "../../../assets/img/icons/+icon.svg";
import { TabBar } from "../../../components/TabBar";

const Step2 = () => {
  return (
    <S.body>
      <S.backb pageTitle="Informe a quantidade média em quilos de cada material" />
      <S.containers>
        <S.valuearea>
          <S.materialname>Papel</S.materialname>
          <S.kgindex>KG</S.kgindex>
          <S.kgvalue type="number" step="0.5" min="1" max="50" />
        </S.valuearea>
      </S.containers>
      <S.turnback>
        <S.turnbackbutton type="image" src={plusicon} alt="plusicon" />
        <S.buttonspan>Adicionar outro item</S.buttonspan>
      </S.turnback>
      <S.button onClick={() => setPage(3)}>Continuar</S.button>
      <TabBar />
    </S.body>
  );
};

export default Step2;
