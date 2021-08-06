import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div``;
export const Select = styled(ReactSelect)`
  width: ${(props) => props.width};

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

  .css-26l3qy-menu {
    background-color: var(--inputBackground);
    margin: 0;
    padding: 0;
    border: none;
  }
`;
export const Label = styled.label`
  color: #828282;
  font-size: 12px;
  line-height: 18px;
`;
