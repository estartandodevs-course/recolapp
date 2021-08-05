import styled from "styled-components";
import ReactSelect from "react-select";

export const Select = styled(ReactSelect)`
  width: 100%;
  height: 45px;

  .css-yk16xz-control {
    background-color: var(--inputBackground);
    border-radius: 8px;
    border: none;
  }

  .css-1okebmr-indicatorSeparator {
    display: none;
  }

  .css-1wa3eu0-placeholder {
    display: none;
  }

  .css-1pahdxg-control {
    border: none;
    box-shadow: none;
    background-color: var(--inputBackground);
  }
`;
