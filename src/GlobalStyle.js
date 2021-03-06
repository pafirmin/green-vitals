import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#8ac8ff, #298adf) fixed no-repeat;
    font-family: 'Inder', sans-serif;
    color: #fff;
    overflow-x: hidden;
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
    
    &:focus {
      outline: none;
    }
  }
`;
