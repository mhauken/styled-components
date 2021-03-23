import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    background-color: ${p => p.theme.color.bg};
    color: ${p => p.theme.color.text};
    transition: background-color .4s ease-out;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;