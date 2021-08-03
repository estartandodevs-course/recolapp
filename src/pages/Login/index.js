import React, { useEffect, useState } from "react";

import * as S from "./styles";

import image from "../../assets/img/illustrations/login.svg";

const Login = () => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const authLogib = () => {
    if (Email === "admin" && Password === "123") {
      console.log("Entrou!");
    } else {
      console.log("Email/Senha inválidos!");
    }
  };

  const [ButtonDisable, SetButtonDisable] = useState(true);

  useEffect(() => {
    if (Email !== "" && Password !== "") {
      SetButtonDisable(false);
    } else {
      SetButtonDisable(true);
    }
  }, [Email, Password]);

  return (
    <>
      <S.Container>
        <S.BackButtonLogin pageTitle="Faça seu login" />
        <S.Img src={image} alt="loginScreen" />
        <S.InputEmail
          id="email"
          label="Email"
          onChange={(e) => SetEmail(e.target.value)}
        />
        <S.InputPassword
          type="password"
          id="password"
          label="Password"
          onChange={(e) => SetPassword(e.target.value)}
        />
        <S.ButtonEnter disable={ButtonDisable} onClick={() => authLogib()}>
          Entrar
        </S.ButtonEnter>
      </S.Container>
    </>
  );
};

export default Login;
