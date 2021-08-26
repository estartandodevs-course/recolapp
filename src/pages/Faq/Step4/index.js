import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step4 = ({ firstPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;
  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.Body>
        <S.BackB handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.MainTextAling>
              <S.MainSpan>Como separar o lixo?</S.MainSpan>
            </S.MainTextAling>
            <S.PageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.ContentSpan>
                Nunca misture o material reciclável e orgânico;
                <br />
                Coloque os plásticos, vidros, metais e papéis em sacos
                diferentes;
                <br />
                Lave e seque as embalagens que continham produtos orgânicos
                antes do descarte;
                <br />
                Não amasse e nem molhe os papéis. Ao invés disso, dobre-os
                dentro do saco, diminuindo bastante o volume;
                <br />
                Vidros quebrados e materiais cortantes devem ser enrolados em
                jornal ou colocados em uma caixa para evitar acidentes;
                <br />
                Não coloque garrafas e frascos com vidros planos;
                <br />
                Desmonte as embalagens mistas, separando as partes de metal,
                plástico e vidro, por exemplo, e distribua nos sacos corretos.
              </S.ContentSpan>
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
    </>
  );
};
export { Step4 };
