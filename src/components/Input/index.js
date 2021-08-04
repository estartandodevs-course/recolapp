import * as S from "./styles";

const Input = ({
  id,
  type = "text",
  onChange,
  value,
  label,
  width = "100%",
  ...rest
}) => {
  return (
    <>
      <S.Container {...rest}>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.InputElement
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          width={width}
        />
      </S.Container>
    </>
  );
};

export { Input };
