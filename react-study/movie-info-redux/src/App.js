import React from 'react';
import SiteTitle from './Components/Atoms/SiteTitle';
import MainRouter from './Router/MainRouter';
import Nav from './Components/Organisms/Nav';

import './App.css';

function App() {
  return (
    <div>
      <SiteTitle />
      <Nav />
      <MainRouter />
    </div>
  );
}

export default App;
