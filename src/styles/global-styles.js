import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: Poppins;
  src: url(${PoppinsRegular});
}
@font-face {
  font-family: Poppins-Bold;
  src: url(${PoppinsBold});
}

    :root {
        --orange:#F28E36;
        --green:#008000;
        --lightGray:#FFF8F4;
        --textColor: #4f4f4f;
    }

    * {
     margin: 0;
     padding: 0;
     font-family: Poppins;
    }

`;
