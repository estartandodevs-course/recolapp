import { useContext } from "react";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const faqTexts = [
  {
    page: 2,
    text: "O que é reciclável?",
  },
  {
    page: 3,
    text: "O que não é reciclável?",
  },
  {
    page: 4,
    text: "Como separar o lixo?",
  },
  {
    page: 5,
    text: "O que fazer para facilitar a separação?",
  },
  {
    page: 6,
    text: "Como a reciclagem beneficia as empresas?",
  },
  {
    page: 7,
    text: "Qual a importância dos catadores para a reciclagem?",
  },
];

const Step1 = ({ setPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;

  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.Body>
        <S.BackB pageTitle="Dúvidas Frequentes" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.PageContent>
              {faqTexts.map(({ text, page }) => (
                <S.SectionButtons key={text} onClick={() => setPage(page)}>
                  {text}
                </S.SectionButtons>
              ))}
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
      <S.TabBarFaq />
    </>
  );
};

export { Step1 };
