import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";

import * as S from "./styles";

import image from "../../assets/img/illustrations/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [errorDisable, SetErrorDisable] = useState(true);

  const history = useHistory();

  const authLogib = () => {
    if (email === "admin" && password === "123") {
      history.push("/home");
    } else {
      SetErrorDisable(false);
      setTimeout(() => SetErrorDisable(true), 3000);
    }
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [email, password]);

  return (
    <>
      <S.Container>
        <S.BackButtonLogin pageTitle="Faça seu login" />
        <S.Img src={image} alt="loginScreen" />
        <S.InputEmail
          id="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <S.InputPassword
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <S.ErrorMessage disable={errorDisable}>
          O email ou senha está errado. Por favor, tente novamente
        </S.ErrorMessage>
        <Button disable={buttonDisable} onClick={() => authLogib()}>
          Entrar
        </Button>
      </S.Container>
    </>
  );
};

export default Login;
