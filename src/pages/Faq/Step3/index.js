import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step3 = ({ firstPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;
  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.body>
        <S.backb handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.desktopAling>
          <S.desktopContainer>
            <S.mainTextAling>
              <S.mainSpan>O que não é reciclável?</S.mainSpan>
            </S.mainTextAling>
            <S.pageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.contentSpan>
                Materiais como: papel-carbono, etiqueta adesiva, fita crepe,
                guardanapos, fotografias, filtro de cigarros, papéis sujos,
                papéis sanitários, copos de papel, cabos de panela e tomadas,
                clipes, grampos, esponjas de aço, canos, espelhos, cristais,
                cerâmicas, porcelana, pilhas e baterias de celular.
                <br />
                <br />
                Materiais não recicláveis, como pilhas, baterias, lâmpadas
                incandescentes e fluorescentes, óleo de cozinha, entre outros,
                devem ser descartados em locais apropriados, senão prejudicam o
                meio ambiente.
              </S.contentSpan>
            </S.pageContent>
          </S.desktopContainer>
        </S.desktopAling>
      </S.body>
    </>
  );
};
export default Step3;
