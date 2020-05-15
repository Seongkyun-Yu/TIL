import React from 'react';
import './App.css';

import GameSection from './components/templates/GameSection';
import useGameData from './Hook/useGameData';

import GameContext from './Context/GameContext';

function App() {
  const [state, checkBoard, backsies] = useGameData();

  const data = {
    state,
    checkBoard,
    backsies,
  };

  return (
    <GameContext.Provider value={data}>
      <GameSection />
    </GameContext.Provider>
  );
}

export default App;
