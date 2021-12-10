import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  font-size: 62.5%;
}
* {
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');
  margin: 0;
  padding: 0;
}
body {
  background: ${({ theme }) => theme.colors.background};
  font-family: 'Open Sans', sans-serif;
}
a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary}
}
`;

export default GlobalStyles;
