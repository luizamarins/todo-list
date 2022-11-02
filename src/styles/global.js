import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: cornsilk;
    color: #c4c;
}

body, input, textarea, button {
    font-family: 'Comic Neue', cursive;
    font-weight: 400;
    font-size: 1rem;
}

input, textarea, button {
    cursor: pointer;
}

:focus {
    outline: transparent;
    box-shadow: 0 0 0 0;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

`;