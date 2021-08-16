import * as S from "./styles";

const Step1 = () => {
  return (
    <>
      <S.backb pageTitle="Dúvidas Frequentes" />
      <button onClick={() => setPage(2)}>O que é reciclável?</button>
      <button onClick={() => setPage(3)}>O que não é reciclável?</button>
      <button onClick={() => setPage(4)}>Como separar o lixo?</button>
      <button onClick={() => setPage(5)}>
        O que fazer para facilitar a separação?
      </button>
      <button onClick={() => setPage(6)}>
        Como a reciclagem beneficia as empresas?
      </button>
      <button onClick={() => setPage(7)}>
        Qual a importância dos catadores para a reciclagem?
      </button>
    </>
  );
};

export default Step1;
