import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
