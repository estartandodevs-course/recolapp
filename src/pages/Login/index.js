import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";

import { Button } from "../../components/Button";

import * as S from "./styles";

import image from "../../assets/img/illustrations/login.svg";
import { loginWithEmailAndPassword } from "../../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [errorDisable, setErroDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const authLogin = async () => {
    setLoading(true);
    const response = await loginWithEmailAndPassword(email, password);
    setLoading(false);

    if (response?.idToken) {
      setUser(response.user);
      history.push("/home");
    } else {
      setErroDisable(false);
    }
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  return (
    <S.Body>
      <S.BackButtonLogin pageTitle="Faça seu login" />
      <S.Container>
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
        <Button disable={disable} loading={loading} onClick={() => authLogin()}>
          Entrar
        </Button>
      </S.Container>
    </S.Body>
  );
};

export default Login;
