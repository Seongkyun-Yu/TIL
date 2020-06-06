import React from 'react';
import MainRouter from './Router/MainRouter';
import Navigation from './Components/Organisms/Navigation';
import SiteTitle from './Components/Atoms/SiteTitle';

import './App.css';

function App() {
  return (
    <div>
      <SiteTitle />
      <Navigation />
      <MainRouter />
    </div>
  );
}

export default App;
