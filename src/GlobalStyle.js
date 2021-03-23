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
    transition: background-color .2s ease-in-out;
    background-color: ${(p) => p.theme.color.bg};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    color: ${p => p.theme.color.text};
  }
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  /* other styles */
`;