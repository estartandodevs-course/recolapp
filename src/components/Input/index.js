import * as S from "./styles";

const Input = ({ id, onChange, value, label }) => {
  return (
    <>
      <S.Container>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.InputElement value={value} onChange={onChange} />
      </S.Container>
    </>
  );
};

export { Input };
