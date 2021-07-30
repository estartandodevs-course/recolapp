import { createGlobalStyle } from "styled-components";
import Poppins400 from "../assets/fonts/Poppins-Regular.ttf";
import Poppins700 from "../assets/fonts/Poppins-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face { font-family: "Poppins400"; src: url(${Poppins400}); };
  @font-face { font-family: "Poppins700"; src: url(${Poppins700}); };
    :root {
        --orange:#F28E36;
        --green:#008000;
        --lightGray:#FFF8F4;
    }
`;
