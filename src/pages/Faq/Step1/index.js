import * as S from "./styles";

const Step1 = ({ setPage }) => {
  return (
    <>
      <S.body>
        <S.backB pageTitle="Dúvidas Frequentes" />
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
      </S.body>
    </>
  );
};

export default Step1;
