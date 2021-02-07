import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { Header, Main, Nav } from './layout';
import Hooks from './shared/hooks'

const App: React.FunctionComponent = () => {
  const isMobile = Hooks.useIsMobile();
  const { isScrolled, setIsScrolled } = Hooks.useIsScrolled();
  
  let navDesktop: JSX.Element|null = <Nav.Desktop />;
  let navMobile: JSX.Element|null = null;
  let hideHeader = '';
  if (isMobile) {
    hideHeader = isScrolled ? 'hidden': hideHeader;
    navDesktop = null;
    navMobile = <Nav.Mobile />
  }
  
  return (
    <Router>
      <div className="App">
        <div className={`Header-wrapper ${hideHeader}`}>
          <Header />
        </div>
        {
          navDesktop &&
          <div className="Nav-wrapper">
            {navDesktop}
          </div>
        }
        <div className="Main-wrapper" onScroll={setIsScrolled}>
          <Main />
        </div>
        {
          navMobile &&
          <div className="Nav-mobile-wrapper">
            {navMobile}
          </div>
        }
      </div>
    </Router>
  );
}

export default App;
