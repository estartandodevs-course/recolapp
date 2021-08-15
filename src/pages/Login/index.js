import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";

import { Button } from "../../components/Button";

import * as S from "./styles";

import image from "../../assets/img/illustrations/login.svg";
import { getUser } from "../../services/users";
import { auth } from "../../services/users/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [errorDisable, SetErrorDisable] = useState(true);

  const history = useHistory();
  const context = useContext(UserContext);

  const authLogin = () => {
    const response = auth(email, password);

    if (response.auth) {
      context.setUser(getUser(response.user.id));
      history.push("/home");
    } else {
      SetErrorDisable(false);
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
        <Button disable={buttonDisable} onClick={() => authLogin()}>
          Entrar
        </Button>
      </S.Container>
    </>
  );
};

export default Login;
