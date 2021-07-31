import { Container, Wrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Register = () => {
  return (
    <Container>
      <Input id="name" value="" label="Nome Completo" />
      <Input id="cpf" value="" label="CPF/CNPJ" />
      <Input id="email" value="" label="E-mail" />
      <Input id="telefone" value="" label="Telefone" />
      <Input id="endereço" value="" label="Endereço" />
      <Input id="cidade" value="" label="Cidade" />
      <Wrapper>
        <Input id="cep" value="" label="CEP" />
        <Input id="estado" value="" label="Estado" />
      </Wrapper>
      <Button width="65%">Cadastrar</Button>
    </Container>
  );
};

export default Register;
