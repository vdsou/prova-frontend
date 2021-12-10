import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background: ${({ theme }) => theme.colors.background};
}

`;

export default GlobalStyles;
