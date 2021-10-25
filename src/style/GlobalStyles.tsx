import { createGlobalStyle } from "styled-components";

// suggestions fonts (from Google Fonts)
// Amatic SC
// Unna
// Eczar



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        border: none;
        background: none;
    }

    input {
        border: none;
        background: none;
    }
`;

export default GlobalStyle;
