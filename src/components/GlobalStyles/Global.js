import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono', monospace;
        background-color: ${({ theme }) =>
          theme.colors.neutral.lightGrayishCyan};
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
        margin: 0;
    }

`;
