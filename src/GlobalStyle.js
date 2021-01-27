import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #3d71a0;
    font-family: 'Inder', sans-serif;
    color: #fff;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;