import { useState } from "react";
import * as S from "./styles";
// import { Input } from "../../components/Input";
// import { BackButton } from "../../components/BackButtom";
import { Button } from "../../components/Button";
// import { Mask } from "../../components/InputMask";
import { Select } from "../../components/Select";
import { States } from "../../services/StatesToSelect/mock";
// import { CheckBox } from "../../components/CheckBox";

const Register = () => {
  let count = 0;
  const [data, setData] = useState({ cpf: "" });
  const [maskCPF, SetMaskCPF] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const getCpfAndCnpjMask = (value) => {
    let onlyNumbers = value.replace(/[^\d]/g, "");
    let length = onlyNumbers.length;

    if (length === 11) {
      count += 1;
    }

    if (length >= 11 && count === 2) {
      SetMaskCPF("99.999.999/9999-99");
    } else if (length <= 11) {
      SetMaskCPF("999.999.999-99");
    }
  };

  const handleCpfCnpj = (e) => {
    getCpfAndCnpjMask(e.target.value);
  };

  return (
    <S.Container onSubmit={submit}>
      <S.BackButtonRegister pageTitle="Faça seu cadastro" />
      <S.FormContainer>
        <S.InputRegister
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
        <S.MaskRegister
          mask={maskCPF}
          id="cpf"
          width="100%"
          onChange={(e) => handleCpfCnpj(e)}
          label="CPF/CNPJ"
        />
        <S.InputRegister
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
        <S.MaskRegister
          mask={"(99)99999-9999"}
          id="celular"
          width="100%"
          value={data.celular}
          onChange={(e) =>
            setData({
              ...data,
              celular: e.target.value,
            })
          }
          label="Celular"
        />
        <S.InputRegister
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
        <S.InputRegister
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
          <S.MaskRegister
            mask={"99999-999"}
            id="cep"
            width="100%"
            value={data.cep}
            onChange={(e) =>
              setData({
                ...data,
                cep: e.target.value,
              })
            }
            label="CEP"
          />
          <Select
            id="estado"
            options={States}
            value={data.estado}
            onChange={(e) => {}}
            label="Estado"
          />
        </S.Wrapper>
        <Select
          id="typeUser"
          options={[
            { value: "Empreendedor", label: "Empreendedor" },
            { value: "Coletor", label: "Coletor" },
            { value: "PessoaFisica", label: "Pessoa Física" },
            { value: "Cooperativa", label: "Cooperativa" },
          ]}
          value={data.estado}
          onChange={(e) => {}}
          label="Você é:"
        />
      </S.FormContainer>
      <Button children="Cadastrar" type="submit" width="100%"></Button>
    </S.Container>
  );
};

export default Register;
