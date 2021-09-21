import React from 'react';
import { HomePage } from './components/homePage/index';
import GlobalStyle from './styles/GlobalStyles'


const App = () => {
  
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
