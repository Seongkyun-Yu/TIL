import React from 'react';
import { MovieContextProvider } from './Context/MovieContext';

import MainRouter from './Router/MainRouter';
import Nav from './Components/Organisms/Nav';

function App() {
  return (
    <div>
      <MovieContextProvider>
        <Nav />
        <MainRouter />
      </MovieContextProvider>
    </div>
  );
}

export default App;
