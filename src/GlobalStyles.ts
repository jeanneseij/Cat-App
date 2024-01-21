import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
