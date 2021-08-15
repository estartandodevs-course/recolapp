import Recycling from "../../../assets/img/illustrations/recycling.svg";
const Step5 = () => {
  return (
    <>
      <span>Agendamento realizado com sucesso!</span>
      <img src={Recycling} alt="recycling ilustration" />
      <button>Voltar para tela inicial</button>
      {/* limpar local storage */}
    </>
  );
};

export default Step5;
