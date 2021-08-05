import styled from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect)`
  width: 100%;
  height: 45px;

  .css-yk16xz-control {
    background-color: var(--inputBackground);
    border-radius: 8px;
    border: none;
    outline: none;
    &:focus {
      border: none;
    }
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-1wa3eu0-placeholder {
    display: none;
  }

  .css-2b097c-container, .css-1f43avz-a11yText-A11yText, .css-1pahdxg-control {
    outline: none;
    border: none;
    }
  }
`;
