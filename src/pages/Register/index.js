import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

import { removeMask, passwordMatch } from "../../mock/RegisterValidate";

import { States } from "../../mock/Select/states";
import { typeUser } from "../../mock/Select/typeUser";

const Register = () => {
  const [errorRegister, setErrorDisable] = useState({
    message: "",
    status: false,
  });
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(true);
  const [maskCertification, setMaskCertification] = useState("");
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
  const [password, setPassword] = useState({
    one: "",
    two: "",
  });

  const history = useHistory();

  const finishRegister = () => {
    if (passwordMatch(password.one, password.two) === false) {
      setErrorDisable({
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
      setMaskCertification("99.999.999/9999-99");
      setCount(1);
    } else if (lengthType <= 11) {
      setMaskCertification("999.999.999-99");
    }
  };

  const handleCertification = (event) => {
    setData({ ...data, certification: removeMask(event.target.value) });
    getCertificationMask(event.target.value);
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(data)) {
      if ((value === "" || value === false) && key !== "password") {
        setDisable(true);
        break;
      }
      setDisable(false);
    }
  }, [data]);

  return (
    <>
      <S.HeaderWebPage />
      <S.Container>
        <S.BackButtonRegister pageTitle="Faça seu cadastro" />
        <S.RegisterTitle>Faça seu cadastro</S.RegisterTitle>
        <S.FormContainer>
          <S.NameCert>
            <S.InputRegister
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              label="Nome Completo"
            />
            <S.MaskCertification
              mask={maskCertification}
              id="cpf"
              value={data.certification}
              onChange={(event) => handleCertification(event)}
              label="CPF/CNPJ"
            />
          </S.NameCert>
          <S.EmailPass>
            <S.InputRegister
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              label="E-mail"
            />
            <S.InputRegister
              id="password1"
              value={password.one}
              onChange={(e) =>
                setPassword({ ...password, one: e.target.value })
              }
              label="Senha"
              type="password"
            />
          </S.EmailPass>
          <S.PassCel>
            <S.InputRegister
              id="password2"
              value={password.two}
              onChange={(e) =>
                setPassword({ ...password, two: e.target.value })
              }
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
          </S.PassCel>
          <S.AdressCity>
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
          </S.AdressCity>
          <S.CepStates>
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
          </S.CepStates>
        </S.FormContainer>
        <S.CheckButton>
          <S.CheckboxRegister
            label="Li e concordo com os termos de uso"
            checked={data.boxCheck}
            onChange={(e) => setData({ ...data, boxCheck: e.target.checked })}
          />

          <S.ErrorMessage disable={errorRegister.status}>
            {errorRegister.message}
          </S.ErrorMessage>

          <S.ButtonRegister disable={disable} onClick={() => finishRegister()}>
            Finalizar cadastro
          </S.ButtonRegister>
        </S.CheckButton>
      </S.Container>
    </>
  );
};

export default Register;
