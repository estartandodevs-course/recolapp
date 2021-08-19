import { useContext } from "react";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step1 = ({ setPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;

  return (
    <>
      <S.body>
        <S.HeaderDesktop logged={isLogged} />
        <S.backB pageTitle="Dúvidas Frequentes" />
        <S.desktopAling>
          <S.desktopContainer>
            <S.pageContent>
              <S.sectionButtons onClick={() => setPage(2)}>
                O que é reciclável?
              </S.sectionButtons>

              <S.sectionButtons onClick={() => setPage(3)}>
                O que não é reciclável?
              </S.sectionButtons>

              <S.sectionButtons onClick={() => setPage(4)}>
                Como separar o lixo?
              </S.sectionButtons>

              <S.sectionButtonsLarge onClick={() => setPage(5)}>
                O que fazer para facilitar a separação?
              </S.sectionButtonsLarge>

              <S.sectionButtonsLarge onClick={() => setPage(6)}>
                Como a reciclagem beneficia as empresas?
              </S.sectionButtonsLarge>

              <S.sectionButtonsLarge onClick={() => setPage(7)}>
                Qual a importância dos catadores para a reciclagem?
              </S.sectionButtonsLarge>
            </S.pageContent>
          </S.desktopContainer>
        </S.desktopAling>
      </S.body>
      <S.tabBar />
    </>
  );
};

export default Step1;
