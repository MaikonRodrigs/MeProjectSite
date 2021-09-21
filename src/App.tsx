import React, { useState } from 'react';

import { HomePage } from './components/homePage/index';

import GlobalStyle from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

import light from './styles/theme/light';
import dark from './styles/theme/dark';

const App = () => {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <HomePage toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>

  );
}

export default App;
