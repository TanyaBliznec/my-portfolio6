import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
margin: 0;
font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

color: ${theme.colors.fontTx};

}
h2{
font-weight: 700;
font-size: 42px;
line-height: 124%;
letter-spacing: -0.01em;
color: ${theme.colors.fontTl};
}

p{
font-weight: 400;
font-size: 18px;
line-height: 144%;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

section{
    margin: 200px 0;
    background-color: ${theme.colors.primaryBg};
}

`