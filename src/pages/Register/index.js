import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

import { removeMask, passwordMatch } from "../../services/RegisterValidate";

import { States } from "../../services/Select/states";
import { typeUser } from "../../services/Select/typeUser";

const Register = () => {
  const [errorRegister, SetErrorDisable] = useState({
    message: "",
    status: false,
  });
  const [count, setCount] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [maskCPF, SetMaskCPF] = useState("");
  const [data, setData] = useState({
    name: "",
    password: "",
    certification: "",
    email: "",
    cellphone: "",
    city: "",
    street: "",
    zip: "",
    state: "",
    typeUser: "",
    boxCheck: false,
  });
  const [password, SetPassword] = useState({
    one: "",
    two: "",
  });

  const history = useHistory();

  const finishRegister = () => {
    if (passwordMatch(password.one, password.two) === false) {
      SetErrorDisable({
        message: "Senhas não são iguais!",
        status: true,
      });
      return 0;
    }

    setData({ ...data, password: password.one });

    return history.push("/home");
  };

  const getCertificationMask = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    const lengthType = onlyNumbers.length;

    if (lengthType === 11) {
      setCount(count + 1);
    }

    if (lengthType >= 11 && count === 2) {
      SetMaskCPF("99.999.999/9999-99");
      setCount(1);
    } else if (lengthType <= 11) {
      SetMaskCPF("999.999.999-99");
    }
  };

  const handleCertification = (event) => {
    setData({ ...data, certification: removeMask(event.target.value) });
    getCertificationMask(event.target.value);
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(data)) {
      if ((value === "" || value === false) && key !== "password") {
        setButtonDisable(true);
        break;
      }
      setButtonDisable(false);
    }
  }, [data]);

  return (
    <S.Container>
      <S.BackButtonRegister pageTitle="Faça seu cadastro" />
      <S.FormContainer>
        <S.InputRegister
          id="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          label="Nome Completo"
        />
        <S.MaskCertification
          mask={maskCPF}
          id="cpf"
          value={data.certification}
          onChange={(event) => handleCertification(event)}
          label="CPF/CNPJ"
        />
        <S.InputRegister
          id="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          label="E-mail"
        />
        <S.InputRegister
          id="password1"
          value={password.one}
          onChange={(e) => SetPassword({ ...password, one: e.target.value })}
          label="Senha"
          type="password"
        />
        <S.InputRegister
          id="password2"
          value={password.two}
          onChange={(e) => SetPassword({ ...password, two: e.target.value })}
          label="Confirmar Senha"
          type="password"
        />
        <S.MaksCellphone
          mask="(99)99999-9999"
          id="celular"
          value={data.cellphone}
          onChange={(e) =>
            setData({ ...data, cellphone: removeMask(e.target.value) })
          }
          label="Celular"
        />
        <S.InputRegister
          id="endereco"
          value={data.street}
          onChange={(e) => setData({ ...data, street: e.target.value })}
          label="Endereço"
        />
        <S.InputRegister
          id="cidade"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          label="Cidade"
        />
        <S.Wrapper>
          <S.MaskCep
            mask="99999-999"
            id="cep"
            value={data.zip}
            onChange={(e) =>
              setData({ ...data, zip: removeMask(e.target.value) })
            }
            label="CEP"
          />
          <S.SelectStates
            id="estado"
            value={data.state}
            onChange={(e) => setData({ ...data, state: e.value })}
            label="Estado"
            options={States}
          />
        </S.Wrapper>
        <S.SelectTypeUser
          id="typeUser"
          value={data.typeUser}
          onChange={(e) => setData({ ...data, typeUser: e.value })}
          label="Você é:"
          options={typeUser}
        />
      </S.FormContainer>
      <S.CheckboxRegister
        label="Li e concordo com os termos de uso"
        checked={data.boxCheck}
        onChange={(e) => setData({ ...data, boxCheck: e.target.checked })}
      />

      <S.ErrorMessage disable={errorRegister.status}>
        {errorRegister.message}
      </S.ErrorMessage>

      <S.ButtonRegister
        disable={buttonDisable}
        onClick={() => finishRegister()}
      >
        Finalizar cadastro
      </S.ButtonRegister>
    </S.Container>
  );
};

export default Register;
