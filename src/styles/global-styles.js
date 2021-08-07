import { createGlobalStyle } from "styled-components";
import Poppins400 from "../assets/fonts/Poppins-Regular.ttf";
import Poppins700 from "../assets/fonts/Poppins-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
     @font-face {
        font-family: 'Poppins';
        src: url(${Poppins400}) format('ttf'),
        url(${Poppins700}) format('ttf');
      }
    :root {
        --orange:#F28E36;
        --green:#008000;
        --lightGray:#FFF8F4;
        --inputBackground: #fde5d7;
        --textColor: #4f4f4f;

    }

    * {
     margin: 0;
     padding: 0;
    }

    body {
      height: 100vh;
      font-family: Poppins;
    }
`;
