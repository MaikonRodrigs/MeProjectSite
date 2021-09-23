import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { FirstPage } from './components/firstPage/index'; 
import { HomePage } from './components/homePage/index';
import { NavBar } from './components/navBar';

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <NavBar toggleTheme={toggleTheme} />
          <HomePage toggleTheme={toggleTheme} />
        </div>
        <Switch>
          {/* <Route exact path="/" component={FirstPage} />
          <Route path="/homePage"component={HomePage} /> */}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
