import { useHistory } from "react-router-dom";
import Recycling from "../../../assets/img/illustrations/recycling.svg";
import * as S from "./styles";

const Step5 = () => {
  const history = useHistory();
  return (
    <S.body>
      <S.warn>Agendamento realizado com sucesso!</S.warn>
      <S.ilustration src={Recycling} alt="recycling ilustration" />
      <S.button onClick={() => history.push("/home")}>
        Voltar para tela inicial
      </S.button>
    </S.body>
  );
};

export default Step5;
