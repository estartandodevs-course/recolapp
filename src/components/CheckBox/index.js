/* eslint-disable */
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import CheckboxLib from "@material-ui/core/Checkbox";

const Checkbox = ({ label, checked, onChange, inputProps, ...rest }) => {
  const GreenCheckbox = withStyles({
    root: {
      color: "var(--textColor)",
      "&$checked": {
        color: "var(--textColor)",
      },
    },
    checked: {},
  })((props) => <CheckboxLib color="default" {...props} />);

  return (
    <>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={checked}
            onChange={onChange}
            inputProps={inputProps}
          />
        }
        label={label}
        {...rest}
      />
    </>
  );
};

export { Checkbox };
