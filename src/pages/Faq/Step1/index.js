import * as S from "./styles";

const Step1 = (setPage) => {
  return (
    <>
      <S.body>
        <S.backB pageTitle="Dúvidas Frequentes" />
        <S.sectionButtons onClick={() => setPage(2)}>
          O que é reciclável?
        </S.sectionButtons>
        <S.sectionButtons onClick={() => setPage(3)}>
          O que não é reciclável?
        </S.sectionButtons>
        <S.sectionButtons onClick={() => setPage(4)}>
          Como separar o lixo?
        </S.sectionButtons>
        <S.sectionButtons onClick={() => setPage(5)}>
          O que fazer para facilitar a separação?
        </S.sectionButtons>
        <S.sectionButtons onClick={() => setPage(6)}>
          Como a reciclagem beneficia as empresas?
        </S.sectionButtons>
        <S.sectionButtons onClick={() => setPage(7)}>
          Qual a importância dos catadores para a reciclagem?
        </S.sectionButtons>
      </S.body>
    </>
  );
};

export default Step1;
