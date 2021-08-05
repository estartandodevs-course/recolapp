import { useEffect, useState } from "react";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { BackButton } from "../../components/BackButtom";
import { Button } from "../../components/Button";
import { Mask } from "../../components/InputMask";

const Register = () => {
  let [count, setCount] = useState(1);
  const [maskCPF, SetMaskCPF] = useState("");
  const [data, setData] = useState({
    name: "", 
    certification: "", 
    email: "",
    cellphone: "",
    city: "",
    street: "",
    zip: "",
    state: ""
  });

  const submit = (e) => {
    e.preventDefault();
  };

  const getCertificationMask = (value) => {
    let onlyNumbers = value.replace(/[^\d]/g, "");
    let length = onlyNumbers.length;

    if (length === 11) {
      setCount((count+1));
    }

    if (length >= 11 && count === 2) {
      SetMaskCPF("99.999.999/9999-99");
      setCount(1)
    } else if (length <= 11) {
      SetMaskCPF("999.999.999-99");
    }
  };

  const handleCertification = (e) => {
    setData({
      ...data,
      certification: e.target.value,
    })
    getCertificationMask(e.target.value);
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
        />
        <Mask
          mask={maskCPF}
          id="cpf"
          value={data.certification}
          onChange={(e) => handleCertification(e)}
          label="CPF/CNPJ"
        />
        <Input
          id="email"
          value={data.email}
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
          value={data.cellphone}
          onChange={(e) =>
            setData({
              ...data,
              cellphone: e.target.value,
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
              street: e.target.value,
            })
          }
          label="Endereço"
        />
        <Input
          id="cidade"
          value={data.city}
          onChange={(e) =>
            setData({
              ...data,
              city: e.target.value,
            })
          }
          label="Cidade"
        />
        <S.Wrapper>
          <Mask
            mask={"99999-999"}
            id="cep"
            value={data.zip}
            onChange={(e) =>
              setData({
                ...data,
                zip: e.target.value,
              })
            }
            label="CEP"
          />
          <Input
            id="estado"
            value={data.state}
            onChange={(e) =>
              setData({
                ...data,
                state: e.target.value,
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
