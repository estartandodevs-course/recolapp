import { useEffect, useState } from "react";
import * as S from "./styles";

import { States } from "../../services/Select/states";
import { typeUser } from "../../services/Select/typeUser";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [count, setCount] = useState(1);
  const [maskCPF, SetMaskCPF] = useState("");
  const [data, setData] = useState({
    name: "",
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

  const [button, setButton] = useState(true);
  const [checkedBox, setCheckedBox] = useState({});

  const history = useHistory();

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

  const handleCertification = (e) => {
    setData({ ...data, certification: e.target.value });
    getCertificationMask(e.target.value);
  };

  const handleBox = (e) => {
    setCheckedBox({
      ...CheckedBox,
      [e.target.value]: e.target.checked,
    });
  };

  useEffect(() => {}, [checkedBox]);

  const finishRegister = () => {
    console.log(data);
  };

  // useEffect(() => {
  //   if ()
  // })

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
          onChange={(e) => handleCertification(e)}
          label="CPF/CNPJ"
        />
        <S.InputRegister
          id="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          label="E-mail"
        />
        <S.MaksCellphone
          mask="(99)99999-9999"
          id="celular"
          value={data.cellphone}
          onChange={(e) => setData({ ...data, cellphone: e.target.value })}
          label="Celular"
        />
        <S.InputRegister
          id="endereco"
          value={data.endereço}
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
            onChange={(e) => setData({ ...data, zip: e.target.value })}
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

      <S.ButtonRegister disable={false} onClick={() => finishRegister()}>
        Finalizar cadastro
      </S.ButtonRegister>
    </S.Container>
  );
};

export default Register;
