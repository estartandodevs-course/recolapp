import * as S from "./styles";

const Input = ({ id, onChange, value, label, width = "100%" }) => {
  return (
    <>
      <S.Container>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.InputElement
          id={id}
          value={value}
          onChange={onChange}
          width={width}
        />
      </S.Container>
    </>
  );
};

export { Input };
