import { useEffect, useState } from "react";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { BackButton } from "../../components/BackButtom";
import { Button } from "../../components/Button";
import { Mask } from "../../components/InputMask";

const Register = () => {
  const [data, setData] = useState({ cpf: "" });
  var count = 0;
  // const [cpfCnpj, setcpfCnpj] = useState("");
  // useEffect(() => {
  // const response =

  //   setcpfCnpj(response);
  // }, [data.cpf]);

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const getCpfAndCnpjMask = (value) => {
    let onlyNumbers = value.replace(/[^\d]/g, "");
    let length = onlyNumbers.length;
    console.log(onlyNumbers);
    console.log(count);
    if (length > 11) {
      console.log("teste a");
      return "99.999.999/9999-99";
    } else {
      if (length > 10) {
        count = count + 1;
        console.log("teste c");
      }
      console.log("teste b");
      return "999.999.999-99";
    }
  };

  return (
    <S.Container onSubmit={submit}>
      <BackButton pageTitle="Teste" />
      <S.FormContainer>
        <Input
          id="name"
          value={data.name}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
          label="Nome Completo"
          width="100%"
        />
        <Mask
          mask={getCpfAndCnpjMask(data.cpf)}
          id="cpf"
          value={data.cpf}
          onChange={(e) =>
            setData({
              ...data,
              cpf: e.target.value,
            })
          }
          label="CPF/CNPJ"
        />
        <Input
          id="email"
          value={data.emai}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          label="E-mail"
        />
        <Mask
          mask={"(99)99999-9999"}
          id="celular"
          value={data.celular}
          onChange={(e) =>
            setData({
              ...data,
              celular: e.target.value,
            })
          }
          label="Celular"
        />
        <Input
          id="endereco"
          value={data.endereço}
          onChange={(e) =>
            setData({
              ...data,
              endereco: e.target.value,
            })
          }
          label="Endereço"
        />
        <Input
          id="cidade"
          value={data.cidade}
          onChange={(e) =>
            setData({
              ...data,
              cidade: e.target.value,
            })
          }
          label="Cidade"
        />
        <S.Wrapper>
          <Mask
            mask={"99999-999"}
            id="cep"
            value={data.cep}
            onChange={(e) =>
              setData({
                ...data,
                cep: e.target.value,
              })
            }
            label="CEP"
          />
          <Input
            id="estado"
            value={data.estado}
            onChange={(e) =>
              setData({
                ...data,
                estado: e.target.value,
              })
            }
            label="Estado"
          />
        </S.Wrapper>
        <Button type="submit" width="100%">
          Cadastrar
        </Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;
