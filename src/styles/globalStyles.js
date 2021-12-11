import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  font-size: 62.5%;
}
.App{
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  transition: all linear 0.2s;
}
body {
  background: ${({ theme }) => theme.colors.background};
  font-family: 'Open Sans', sans-serif;
}
a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary}
  overflow: hidden;
}
`;

export default GlobalStyles;
