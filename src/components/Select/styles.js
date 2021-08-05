import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: 67px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  color: #828282;
  font-size: 12px;
  line-height: 18px;
`;

export const Select = styled(ReactSelect)`
  width: 100%;
  /* height: 45px; */

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
  }
`;
