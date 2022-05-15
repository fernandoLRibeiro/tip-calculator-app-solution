import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono', monospace;
        background-color: ${({ theme }) =>
          theme.colors.neutral.lightGrayishCyan};
    }

`;
