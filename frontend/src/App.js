import React from 'react';

import Routes from './routes';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
