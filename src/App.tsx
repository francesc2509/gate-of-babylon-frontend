import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { Header, Main, Nav } from './layout';
import Hooks from './shared/hooks'

function App() {
  const isMobile = Hooks.useIsMobile();

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        {
          !isMobile &&
          <div className="App-nav">
            <Nav.Desktop />
          </div>
        }
        <div className="App-main">
          <Main />
        </div>
        {
          isMobile &&
          <div className="App-nav-mobile">
            <Nav.Mobile />
          </div>}
      </div>
    </Router>
  );
}

export default App;
