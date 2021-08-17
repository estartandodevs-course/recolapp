import * as S from "./styles";

const Input = ({
  id,
  type = "text",
  onChange,
  placeholder,
  value,
  label,
  width = "100%",
  bgColor = "#fde5d7",
  labelColor = "#828282",
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
          bgColor={bgColor}
          labelColor={labelColor}
          placeholder={placeholder}
        />
      </S.Container>
    </>
  );
};

export { Input };
