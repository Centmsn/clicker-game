import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Press Start 2P', cursive;
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
