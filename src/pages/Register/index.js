import { useState } from "react";
import { FormContainer, Wrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Register = () => {
  const [data, setData] = useState({
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <FormContainer onSubmit={submit}>
      <Input
        id="name"
        value={data.name}
        onChange={(e) => setData({
          ...data, name: e.target.value,
        })}
        label="Nome Completo"
      />
      <Input
        id="cpf"
        value={data.cpf}
        onChange={(e) => setData({
          ...data, cpf: e.target.value,
        })}
        label="CPF"
      />
      <Input
        id="email"
        value={data.emai}
        onChange={(e) => setData({
          ...data, email: e.target.value,
        })}
        label="E-mail"
      />
      <Input
        id="telefone"
        value={data.telefone}
        onChange={(e) => setData({
          ...data, telefone: e.target.value,
        })}
        label="Telefone"
      />
      <Input
        id="endereco"
        value={data.endereço}
        onChange={(e) => setData({
          ...data, endereco: e.target.value,
        })}
        label="Endereço"
      />
      <Input
        id="cidade"
        value={data.cidade}
        onChange={(e) => setData({
          ...data, cidade: e.target.value,
        })}
        label="Cidade"
      />
      <Wrapper>
        <Input
          id="cep"
          value={data.cep}
          onChange={(e) => setData({
            ...data, cep: e.target.value,
          })}
          label="CEP"
        />
        <Input
          id="estado"
          value={data.estado}
          onChange={(e) => setData({
            ...data, estado: e.target.value,
          })}
          label="Estado"
        />
      </Wrapper>
      <Button type="submit" width="65%">Cadastrar</Button>
    </FormContainer>
  );
};

export default Register;
