import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import * as S from "./styles";

const Checkbox = ({ label, checked, onChange, inputProps, ...rest }) => {
  return (
    <>
      <S.CheckboxContainer {...rest}>
        <S.Checkbox
          checked={checked}
          onChange={onChange}
          inputProps={inputProps}
          label={label}
        />
      </S.CheckboxContainer>
    </>
  );
};

export { Checkbox };
