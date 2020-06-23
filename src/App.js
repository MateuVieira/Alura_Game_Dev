import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyled from './global_styles';

function App() {
  return (
    <Router history={history}>
      <GlobalStyled />
      <Routes />
    </Router>
  );
}

export default App;
