import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';

import Router from './router';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
