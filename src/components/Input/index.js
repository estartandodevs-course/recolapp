import { useEffect, useState } from "react";
import * as S from "./styles";

const Input = ({ label }) => {
  const [InputValue, SetInputValue] = useState("");

  useEffect(() => {
    const SetConsole = () => {
      console.log(InputValue); // teste
    };
    SetConsole();
  }, [InputValue]);

  return (
    <>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.InputElement
          onChange={(event) => SetInputValue(event.target.value)}
        />
      </S.Container>
    </>
  );
};

export { Input };
