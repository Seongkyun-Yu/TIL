import React from 'react';
import { MovieContextProvider } from './Context/MovieContext';
import SiteTitle from './Components/Atoms/SiteTitle';
import MainRouter from './Router/MainRouter';
import Nav from './Components/Organisms/Nav';

import './App.css';

function App() {
  return (
    <div>
      <MovieContextProvider>
        <SiteTitle />
        <Nav />
        <MainRouter />
      </MovieContextProvider>
    </div>
  );
}

export default App;
