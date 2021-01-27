import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#70b5f2, #298adf) fixed no-repeat;
    font-family: 'Inder', sans-serif;
    color: #fff;
  }
  
  h1 {
    text-align: center;
    font-size: 4rem;
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
