import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    --webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: #2B6CB0;
;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
