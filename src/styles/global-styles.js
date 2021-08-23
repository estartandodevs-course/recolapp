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
        --inputBackground: #fde5d7;
        --textColor: #4f4f4f;
        --middleOrange: #FFB06B;
        --lightTextColor: #ffffff;

        --tabBarHeight: 64px;
        --headerWebHeight: 80px;
        --defaultScreenWebWidth: 600px;

    }

    * {
     margin: 0;
     padding: 0;
     font-family: Poppins;
    }
    body {
      background-color: var(--lightGray);
    }
`;
