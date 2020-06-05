import React from 'react';
import MainRouter from './Router/MainRouter';
import Navigation from './Components/Organisms/Navigation';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <MainRouter />
    </div>
  );
}

export default App;
